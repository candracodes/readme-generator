// TODO: Include packages needed for this application
// 1. npm init -y (complete)
// 2. npm install inquirer (complete)
// 3. added .gitignore with node_modules and .DS_store
// 4. Test message to make sure the index file is working
console.log("README app is working.");

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
            type: 'input',
            message: 'What licensing is included in this project (make this a choice and create badge based on selection',
            name: 'license',
        },
        {
            type: 'input',
            message: 'How should users go about testing this application?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What questions would you like to include?',
            name: 'questions',
        }
    ])
    .then(response => {
        console.log('response', response);
        const fileContent = `# ${response.title}
## Description
- ${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- ${response.installation}

## Usage
- ${response.usage}

## Contributors
- ${response.contributors}

## License
- ${response.license}

## Tests
- ${response.tests}

## Questions
- ${response.questions}
        `
        fs.writeFile('README2.md', fileContent, (err) => {
            if (err) {
                console.log('ERROR:', err);
            } else {
                console.log('SUCCESS!');
            }
        });
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// TODO: Set up the basic structure of the README file:
/*
## ================================================
# {project-title}

## Description
- {description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- {installation}

## Usage
- {usage}

## Contributors
- {contributors}

## License
- {license}

## Tests
- {tests}

## Questions
- {questions}

--- 
TODO: Investigate how to add a badge
## Badges
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
*/