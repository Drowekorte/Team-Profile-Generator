const inquirer = require("inquirer");
const fs = require("fs");
const { engineerPrompts, internPrompts, managerPrompts } = require("./prompt/prompts");

const Engineer = require("./classes/Engineer.js");
const Intern = require("./classes/Intern.js");
const Manager = require("./classes/Manager.js");

const teamArray = []

init();



function writeToFile(fileName, data) {
    console.log(data);
    // basic layout of html
    // iterate through the teamArray
    // create html for each employee
    // add it to the html
    // write it to the file

    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>My custom Bulma website</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
        </head>
        <body>
    `;

    // add the employees
    // for loop () 
    // html +=

    html += `
            </body>
        </html>
    `;

    //fs.writeFile(fileName, generateHTML(data), () => { });
};

function init() {
    managerPrompts().then(function (manager) {
        const newManager = new Manager(manager.employeeId, manager.employeeName, manager.employeeEmail, manager.officeNum)
        teamArray.push(newManager)
        employeeInfo();
    })
};

function employeeInfo() {
    inquirer.prompt({
        type: "list",
        name: "type",
        message: "What employee are we adding?",
        choices: ["Engineer", "Intern", "I'm Done"],
    })
        .then(function (employee) {
            switch (employee.type) {
                case "Engineer":
                    return engineerPrompts().then(function (engineer) {
                        console.log(engineer)
                        // employeeInfo();
                        let newEngineer = new Engineer(engineer.id, engineer.name, engineer.email, engineer.github)
                        teamArray.push(newEngineer)
                        console.log(newEngineer)
                        employeeInfo();
                    });
                case "Intern":
                    return internPrompts().then(function (intern) {
                        let newIntern = new Intern(intern.employeeName, intern.employeeId, intern.employeeEmail, intern.school)
                        teamArray.push(newIntern)

                        employeeInfo();
                    });
                case "Im Done":
                    writeToFile();
                default:
            }

        })
}