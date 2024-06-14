"use strict";
// Polimorfismo
/*
La palabra polimorfismo viene del griego "polys" (muchos) y "morfo" (forma), y
quiere decir "cualidad de tener muchas formas"


En POO, el concepto de polimorfismo se refiere al hecho de que varios objetos de diferentes clases,
pero con una base común, se pueden usar de manera indistinta, sin tener que saber de qué clase exacta
son para poder hacerlo.

Supongamos que en nuestro juego tenemos un montón de personajes que están juntos en un mismo escenario.
Hay varios piratas, algunos estrategas y un montón de otros tipos de personas. En un momento dado necesitamos que todos se pongan a hablar.
Cada uno lo hace de una forma diferente, ya que son tipos de personajes distintos. Sería algo bastante tedioso tener que localizar primero
a los de un tipo y hacerlos hablar, lo luego a los de otro y así sucesivamente. La idea es que puedas tratarlos a todos como personas,
independientemente del tipo específico de persona que sean y simplemente decirles que hablen.
*/
class EmployeePolimorfismo {
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
class ManagerPolimorfismo extends EmployeePolimorfismo {
    numberOfEmployeesManaged;
    constructor(name, id, salary, numberOfEmployeesManaged) {
        super(name, id, salary);
        this.numberOfEmployeesManaged = numberOfEmployeesManaged;
    }
    calculateBonus() {
        return this.numberOfEmployeesManaged * 100;
    }
    calculateSalary() {
        return this.salary * this.calculateBonus();
    }
}
const managerPolimorfismo = new ManagerPolimorfismo("Jane", "M001", 75000, 10);
console.log(managerPolimorfismo.calculateSalary());
