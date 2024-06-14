// (public | private | protected) & readonly
class EmployeeModificadores {
  name: string;
  id: string;
  public salary: number;

  constructor(name: string, id: string, salary: number) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  calculateSalary() {
    return this.salary;
  }
}

class ManagerModificadores extends EmployeeModificadores {
  numberOfEmployeesManaged: number;

  constructor(name: string, id: string, salary: number, numberOfEmployeesManaged: number) {
    super(name, id, salary);
    this.numberOfEmployeesManaged = numberOfEmployeesManaged;
  }

  calculateBonus() {
    return this.numberOfEmployeesManaged * 100;
  }

  override calculateSalary() {
    return super.calculateSalary() + this.calculateBonus();
  }
}

const employeeModificadores = new EmployeeModificadores("Fexxo", "112", 42);
employeeModificadores.salary;
