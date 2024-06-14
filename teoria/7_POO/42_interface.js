"use strict";
class EmployeeInterface {
    name;
    id;
    salary;
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    calculateSalary() {
        return this.salary;
    }
}
class ManagerInterface extends EmployeeInterface {
    numberOfEmployeesManaged;
    constructor(name, id, salary, numberOfEmployeesManaged) {
        super(name, id, salary);
        this.numberOfEmployeesManaged = numberOfEmployeesManaged;
    }
    calculateBonus() {
        return this.numberOfEmployeesManaged * 100;
    }
}
