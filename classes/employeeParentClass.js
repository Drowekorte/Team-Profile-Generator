const index = require("../index.js")

class Employee {
    constructor(id, employeeName, employeeEmail,) {
        this.id = id;
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
    }
};

const generateNewEmployee = new Employee (this.id, this.employeeName, this.employeeEmail);
// generateNewEmployee.writeToFile();


module.exports = Employee