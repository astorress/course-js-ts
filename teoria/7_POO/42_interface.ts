interface EmployeeTypeInterface {
  name: string;
  id: string;
  salary: number;
  calculateSalary: () => number;
}

class EmployeeInterface implements EmployeeTypeInterface {
  name: string;
  id: string;
  salary: number;

  constructor(name: string, id: string, salary: number) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  calculateSalary() {
    return this.salary;
  }
}

class ManagerInterface extends EmployeeInterface implements EmployeeTypeInterface {
  numberOfEmployeesManaged: number;

  constructor(name: string, id: string, salary: number, numberOfEmployeesManaged: number) {
    super(name, id, salary);
    this.numberOfEmployeesManaged = numberOfEmployeesManaged;
  }

  calculateBonus() {
    return this.numberOfEmployeesManaged * 100;
  }
}
