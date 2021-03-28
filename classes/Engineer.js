const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github = github;
    };
    getGithub() {
        return (this.github);
    }
}

// const engineerEmployee = new Engineer(data.id, data.getRole, data.getofficeNumber);

module.exports = Engineer