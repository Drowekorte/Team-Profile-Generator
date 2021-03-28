const inquirer = require("inquirer");
const fs = require("fs");
const { engineerPrompts, internPrompts, managerPrompts } = require("./prompt/prompts");
const Employee = require("./classes/Employee.js");
const Engineer = require("./classes/Engineer.js");
// const githubUsername = require('github-username');
// const generateHTML = require("./util/generateHTML.js");


init();

function writeToFile(fileName, data) {
    console.log(data);
    // fs.writeFile(fileName, generateHTML(data), () => { }
    // );
};

function init() {
    managerPrompts().then(function(manager){
        employeeInfo();
    })
};

function employeeInfo() {
    inquirer.prompt({
        type: "list",
        name: "type",
        message: "What employee are we adding?",
        choices: ["Engineer", "Intern"],
    })
    .then(function (employee) {
                switch (employee.type) {
                    case "Engineer":
                        return engineerPrompts().then(function(engineer){
                            console.log(engineer)
                            // employeeInfo();
                            let newEngineer = new Engineer(engineer.id, engineer.name, engineer.email, engineer.github)
                            console.log(newEngineer)
                        });
                    case "Intern":
                        return internPrompts().then(function(intern){
                            writeToFile() ;
                        });    
                    default:
                }

})}