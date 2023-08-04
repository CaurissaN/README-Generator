// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief summary of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Are there any steps for installation?"
    },
    {
        type: "list",
        name: "license",
        message: "Select any license from the following",
        choices: ["Apache","BSD","GNU"]
    },

    {
        type: "input",
        name: "Usage",
        message: "To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax"
    },
   

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        err ? console.log(err) : console.log("README.md was created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
