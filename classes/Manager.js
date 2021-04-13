const Employee = require("./Employee")

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;

    };
    getOfficeNumber() {

        return (this.officeNumber);
    }
}

// const managerEmployee = new Manager(this.officeNumber);
// managerEmployee.writeToFile();

module.exports = Manager