"use strict";
const userDestructuracionRest = {
    name: "John",
    lastName: "Doe",
    age: 30,
    _password: "123456",
    fullName() {
        this._password;
        return `${this.name} ${this.lastName}`;
    },
};
const { name: firstNameRest, lastName: lastNameRest, age: ageRestageRest, _password: _passwordRest = "123456", } = userDestructuracionRest; // {nombreAntes: nombreDespues}
// rest sirve para obtener como variable independiente algunos de los parametros del objecto (no necesito todas)
const { name: firstNameRest2, lastName: lastNameRest2, ...resto } = userDestructuracionRest;
console.log(resto);
const restoDePropiedades = {
    ...resto,
    age: 0,
};
console.log(restoDePropiedades);
