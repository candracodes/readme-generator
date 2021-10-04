// TODO: Include packages needed for this application
// 1. npm init -y (complete)
// 2. npm install inquirer (complete)
// 3. added .gitignore with node_modules and .DS_store

// TODO: Require a file system and the ability to retrieve logic from inquirer
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([{
            type: 'input',
            message: 'What is the title of your application?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please describe your application...',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How can users go about installing your application?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How should users use this application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who are the contributors for this application?',
            name: 'contributors',
        },
        {
            type: "list",
            name: "license",
            message: "What license would you like to use for this application?",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'input',
            message: 'How should users go about testing this application?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What information would you like to provide if users have questions?',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'What is your Github username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }
    ])
    .then(response => {
        console.log('response', response);
        const fileContent = `# ${response.title}
![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)

## Description
- ${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- ${response.installation}

## Usage
- ${response.usage}

## Contributing
- ${response.contributors}

## License
![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)
- ${response.license}

## Tests
- ${response.tests}

## Questions
- ${response.questions}
- [GitHub Account](https://github.com/${response.github})
- Contact Email: ${response.email}
        `
        fs.writeFile('./utils/README.md', fileContent, (err) => {
            if (err) {
                console.log('ERROR:', err);
            } else {
                console.log('SUCCESS!');
            }
        });
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// I didn't go this route with my approach, so I don't actually need this function

// TODO: Create a function to initialize app
// I honestly don't know the reason I'd need this function either, but... I'll leave it here for later exploration
function init() {}

// Function call to initialize app
init();

