const inquirer = require("inquirer");
const fs = require("fs");

// const generateHTML = require("/generateHTML.js");
// const employeeParentClass = require("/classes/employeeParentClass.js");
// const engineerSubClass = require("/classes/engineerSubClass.js");
// const managerSubClass = require("/classes/managerSubClass.js");
// const internSubClass = require("/classes/internSubClass.js");


// manager.generateHTML();
// companyEmployee.getRole();
// companyEmployee.getRole();
// getName()
// getId()
// getEmail()
// getRole()
// getRole() —returns 'Employee'


const questions = [
    {
        type: 'list',
        name: 'employeeInfo',
        message: 'What type of employee would you like to add?',
        choices: ["Manager", "Engineer", "Intern"]
    }
]

//  const moreQuestions = 


function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), () => { }
    );
};

function init() {
    inquirer.prompt(questions)
        .then(function (employee) {
            switch (employee.employeeInfo) {
                case "Manager":
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
                    break;
                case "Engineer":
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
                    break;
                case "Intern":
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
                            name: 'school',
                            message: 'What school do they attend?',
                        }
                    ])
                    break;
            }

        });
    // generateHTML();

    // writeToFile("index.html", data)
    // Function call to initialize app
}

init()