"use strict";
// (public | private | protected) & readonly
class EmployeeModificadores {
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
class ManagerModificadores extends EmployeeModificadores {
    numberOfEmployeesManaged;
    constructor(name, id, salary, numberOfEmployeesManaged) {
        super(name, id, salary);
        this.numberOfEmployeesManaged = numberOfEmployeesManaged;
    }
    calculateBonus() {
        return this.numberOfEmployeesManaged * 100;
    }
    calculateSalary() {
        return super.calculateSalary() + this.calculateBonus();
    }
}
const employeeModificadores = new EmployeeModificadores("Fexxo", "112", 42);
employeeModificadores.salary;
