const Employee = require("./employeeParentClass")

class Manager extends Employee {
    constructor(officeNumber, ) {
        super(officeNumber);
        this.officeNumber = officeNumber;
        
};
}

const managerEmployee = new Manager(this.officeNumber);
// managerEmployee.writeToFile();

module.exports = Manager


getGithub() {

}
class Engineer extends Employee {
    constructor( github, getGithub) {
        super(github, getGithub);
        this.github = github;
        this.getGithub = getGithub;
    };
}

const engineerEmployee = new Engineer(this.github, this.getGithub);
// engineerEmployee.writeToFile();
module.exports = Engineer


class Intern extends Employee {
    constructor(school) {
        super(school);
        this.school = school;

    };
}

const internEmployee = new Intern(this.school);
// internEmployee.writeToFile();

module.exports = {Manager, Engineer, Intern}