// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         title: 'App Toolkit',
//         description: 'Collection of utility apps for the web',
//         installation: 'How to install app-toolkit',
//         usage: 'How to use app-toolkit',
//         contributors: 'Team 6',
//         test: 'How to test app-toolkit'
//     }
// ]

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter contributors to this project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter testing instructions.'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'GNU', 'None']
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(mdContent => {
        fs.writeFile('./README.md', mdContent, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('README.md has been created.')
        });
    });
}

// Function call to initialize app
init();
