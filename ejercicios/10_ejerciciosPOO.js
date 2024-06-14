"use strict";
class AutoEjercicioPOO {
    marca;
    modelo;
    anio;
    encendido;
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log("El auto está encendido");
    }
    apagar() {
        this.encendido = false;
        console.log("El auto está apagado");
    }
}
const autoEjercicioPOO1 = new AutoEjercicioPOO("Toyota", "Caamry", 2009);
console.log(autoEjercicioPOO1);
autoEjercicioPOO1.encender();
console.log(autoEjercicioPOO1);
autoEjercicioPOO1.apagar();
console.log(autoEjercicioPOO1);
