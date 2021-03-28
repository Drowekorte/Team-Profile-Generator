const inquirer = require("inquirer");
// const githubUsername = require('github-username');

// (async () => {
// 	github.managerPrompts(await githubUsername(data.github));
// })();

function managerPrompts() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Manager name?',
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is their id?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: `What is their email?`,
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the office number?',
        }
    ])
};

function engineerPrompts() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id?',
        },
        {
            type: 'input',
            name: 'email',
            message: `What is their email?`,
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
        }
    ])
};

function internPrompts() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is their id?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: `What is their email?`,
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?',
        }
    ])
}

module.exports = { managerPrompts, engineerPrompts, internPrompts }