class Manager extends Employee {
    constructor(id, employeeName, employeeEmail) {
        super(officeNumber, getRole);
        this.officeNumber = officeNumber;
        this.getRole = getRole;
};
}

const managerEmployee = new Manager(data.id, data.getRole, data.getofficeNumber);

module.exports = Manager