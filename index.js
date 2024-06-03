// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // import inquirer for asking questions
const fs = require('fs'); // import file system for writing files
const generateMarkdown = require('./utils/generateMarkdown'); // import function to generate markdown content

// TODO: Create an array of questions for user input
// This array contains the questions that will be asked to the user
const questions = [
    {
        type: 'input', // this type of input is a text field
        name: 'title', // the name/key for the response
        message: 'What is the title of your project?', // message will be the question displayed to the user.
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the steps needed to install your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'If relevant, provide a list of your collaborators, with links to their GitHub profiles:',
    },
    {
        type: 'list', // this type of input will be a dropdown list
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['Apache 2.0', 'GNUv3.0', 'MIT', 'BSD 3-Clause', 'No License'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'If you would like other developers to contribute, provide guidelines for how to do so:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you wrote tests for your application, provide examples on how to run them:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => { // used fs.writeFile to write data to a file
        if (err) { // checks if theres an error
            console.error('Error writing file:', err); // logs the error
        } else {
            console.log('README.md has been generated successfully!'); // logs message if successful 
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => { // use inquirer to ask the questions
        const readmeContent = generateMarkdown(answers); // generate markdown content using the answers to the questions
        writeToFile('README.md', readmeContent); // write generated content to README.md
    });
}

// Function call to initialize app
init(); // starts the application
