// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide the steps needed to install your project:',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'If relevant, provide a list of your collaborators, with links to their GitHub profiles:',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your project:',
        choices: ['Apache 2.0', 'GNUv3.0', 'MIT', 'BSD 3-Clause', 'No License'],
    },
    {
        type: 'input',
        name: 'Features',
        message: 'If your project has features, list them here:',
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'If you would like other developers to contribute, provide guidelines for how to do so:',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'If you wrote tests for your application, provide examples on how to run them:',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('README.md has been generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
