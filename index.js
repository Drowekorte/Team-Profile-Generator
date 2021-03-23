const inquirer = require("inquirer");
const generateHTML = require("/index.html");


// Manager gets officeNumber and getRole()over-written to return 'Manager'.
// Engineer gets github username, getGithub() and getRole()over-written to return 'Engineer'.
// Manager gets officeNumber and getRole()over-written to return 'Manager'.

class Employee {
    constructor(id, employeeName, employeeEmail,) {
        this.id = id;
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
    }


};

class Manager extends Employee {
    constructor(id, employeeName, employeeEmail) {
        super(officeNumber, getRole);
        this.employeeRole = this.managerRole
    };



    const companyEmployee = new Manager(data.id, data.getRole, data.getofficeNumber);
    // manager.generateHTML();
    // companyEmployee.getRole();
    // companyEmployee.getRole();
    // getName()
    // getId()
    // getEmail()
    // getRole()
    // getRole() —returns 'Employee'

    inquirer.prompt([
        {
        type: 'list',
        name: 'employee',
        message: 'What type of employee would you like to add?',
        choices: ["Manager", "Engineer", "Intern", "I'm done"]
    }])

    .then(function (employee) {

                console.log(response);
                switch (employee) {
                    case "Manager":
                        inquirer
                            .prompt
                        break;
                    case "Engineer":
            inquirer.prompt([ {
                        name: "name",
                        message: "What is their name?",
                        type: "list",
                        choices: ["Engineer", "Intern", "I'm done"],
            }
                    ])
                        break;
                    case "Intern":
                        break;
                    case "I'm done":
                        break;
                }

            });






// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then(function (data) {
//             writeToFile("README.md", data)
//         })
//     // generateMarkdown();


//     // Function call to initialize app
// }

// init()