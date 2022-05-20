const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./assets/generateMd");

// create the fs.writeFile function to promisify async
const writeFileAsync = util.promisify(fs.writeFile);

// questions array to use "inquirer"

const questions = [
    {
        type: "input",
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
    },
    {
        type: "input",
        message: "Describe your Project",
        name: "description",
        default: "README.md Generator"
    },
    {
        type: "list",
        message: "What is your Project's license?",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ],
        default: "MIT"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be used to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What is the functionality for this repo?",
        name: "usage",
        default: "Generate ReadMe.md using node.js"
    },
    {
        type: "input",
        message: "Who is contribuiting to the Project?",
        name: "contribution",
        default: "Just me 🙂!"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        default: "Email"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username",
        default: "Github/username"
    },

]

// function to prompt questions to the user 
const promptUser = () => {
    return inquirer.prompt(questions);
}

// function to generate ReadMe file
const generateReadMe = (fileName, data) => {
    return writeFileAsync(fileName, data);
}

// function for initializing the application 
const init = async () => {
    try {
        console.log("Hello! To generate a README, \nPlease answer the following questions:")

        // prompt questions for user to answer
        const answers = await promptUser();

        // create ReadMe.md using users answers
        const fileMd = generateMd(answers);

        // generate ReadMe file using users answers
        await generateReadMe("./newREADME/README.md", fileMd);

        // notify user that the new ReadMe file has been generated
        console.log("Your README.md file has been created in your newREADME folder.");

    } catch (err) {
        console.error("Issues creating your README.md file... Please try again.");
        console.log(err);
    }
}

// function to call for init()

init();

