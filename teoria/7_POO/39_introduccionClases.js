"use strict";
// una clase se puede pensar como un plano o plantilla para crear un objeto, esto es muy similar a lo que hace type de ts
const personaIntroduccionClases = {
    nombre: "Tony",
    edad: 45,
    bienvenida: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    },
};
console.log(personaIntroduccionClases);
//
class PersonaIntroduccionClases1 {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    bienvenida() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
const personaIntroduccionClases1 = new PersonaIntroduccionClases1("Juan", 45);
console.log(personaIntroduccionClases1);
personaIntroduccionClases1.bienvenida();
console.log(personaIntroduccionClases1.nombre);
