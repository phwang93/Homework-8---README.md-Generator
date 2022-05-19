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
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
    },
    {
        type: "input",
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
    },
    {
        type: "input",
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
    },
    {
        type: "input",
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
    },
    {
        type: "input",
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
    },
    {
        type: "input",
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
    },
    {
        type: "input",
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
    },
    {
        type: "input",
        message: "What is the Projects's title?",
        name: "title",
        default: "ReadMe Generator"
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
        await generateReadMe("./newReadMe/README.md", fileMd);

        // notify user that the new ReadMe file has been generated
        console.log("Your README.md file has been created in your newReadMe folder.");

    } catch (err) {
        console.error("Issues creating your README.md file... Please try again.");
        console.log(err);
    }
}

// function to call for init()

init();

