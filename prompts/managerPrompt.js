function managerPrompts() {
    inquirer.prompt([
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
            message: 'What is the office number?',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the office number?',
        }
    ])
};

function engineerPrompts() {
    inquirer.prompt([
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
            message: 'What is the office number?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
        }
    ])
};

function engineerPrompts() { }

module.exports = {managerPrompts, engineerPrompts, }