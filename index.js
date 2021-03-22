const inquirer = require("inquirer");
const generateHTML = require("/index.html");
name

id

email

getName()

getId()

getEmail()

getRole()—returns 'Employee'

// Manager gets officeNumber and getRole()over-written to return 'Manager'.
// Engineer gets github username, getGithub() and getRole()over-written to return 'Engineer'.
// Manager gets officeNumber and getRole()over-written to return 'Manager'.

class Employee {
    constructor(id, employeeName, employeeEmail,)
    this.employeeName = employeeName;
    this.employeeId = EmployeeRole;
    this.employeeEmail = employeeEmail;
    this.employeeRole = employeeRole;

};

class Manager extends EmployeeConstructor {
    constructor(id, employeeName, employeeEmail, employeeRole);
    super(officeNumber, getRole());
        this.employeeRole = this.managerRole


const companyEmployee = new Manager(data.(id,));
manager.generateHTML();
companyEmployee.getRole();
companyEmployee.getRole();

inquirer
.prompt([
    {
        name: 'title'
        name: "employee",
        message: "What type of employee would you like to add?",
        type: "list",
        choices: ["Manager", "Engineer", "Intern", "I'm done"],
    },

    .then(function ({ employee }) {

        console.log(response);
        switch (employee) {
            case "Manager":
                .prompt
                break;
            case "Engineer":
            .prompt([
                name: "name",
                message: "What is their name?",
                type: "list",
                choices: ["Engineer", "Intern", "I'm done"],
            ])
            break;
        case "Intern":
break;
        case "I'm done":
break;
        }

    })
])


const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project:',
        name: "description"
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'License,',
        name: 'license',
        choices: ["APACHE", "IBM", "MIT", "Mozilla"]
    },

    {
        type: 'input',
        message: 'Contributions',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },

]

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", data)
        })
}

init()

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        writeToFile("README.md", data)
    })
    // generateMarkdown();


// Function call to initialize app
}

init()