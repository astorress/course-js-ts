"use strict";
const userFreeze = {
    name: "John",
    lastName: "Doe",
    age: 30,
    _password: "123456",
    fullName() {
        this._password;
        return `${this.name} ${this.lastName}`;
    },
    post: {
        title: "My firt post",
        content: "Hello world",
        date: "2020-01-01",
    },
    property: null,
};
// Object Freeze
const userFreezeCongelado = Object.freeze(userFreeze); //Esto hace que no se pueda modificar, borrar, etc el objecto, solo leer
userFreezeCongelado.age = 20;
console.log(userFreezeCongelado);
// Otra forma de crear el freeze es
const userFreeze2 = Object.freeze({
    name: "John",
    lastName: "Doe",
    age: 30,
    _password: "123456",
    fullName() {
        this._password;
        return "Hola";
    },
    post: {
        title: "My firt post",
        content: "Hello world",
        date: "2020-01-01",
    },
    property: null,
});
const userFreeze3 = {
    name: "John",
    lastName: "Doe",
    age: 30,
    _password: "123456",
    fullName() {
        this._password;
        return "Hola";
    },
    post: {
        title: "My firt post",
        content: "Hello world",
        date: "2020-01-01",
    },
    property: null,
};
delete userFreeze3.name;
