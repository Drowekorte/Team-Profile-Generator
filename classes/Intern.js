const Employee = require('./Employee');

class Intern extends Employee {
    // todo: add id, name, email
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }
    getSchool() {

        return (this.school);
    }
}

// const internEmployee = new Intern(data.id, data.getRole, data.getofficeNumber);

module.exports = Intern;
