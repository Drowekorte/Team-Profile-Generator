const inquirer = require("inquirer");
const fs = require("fs");
const { engineerPrompts, internPrompts, managerPrompts } = require("./prompt/prompts");
const Employee = require("./classes/employeeParentClass.js");
// const githubUsername = require('github-username');
// const generateHTML = require("/generateHTML.js");
init();

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), () => { }
    );
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
                            employeeInfo();
                        });
                    case "Intern":
                        return internPrompts().then(function(intern){
                            writeToFile() ;
                        });    
                    default:
                }

})}