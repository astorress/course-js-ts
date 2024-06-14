"use strict";
const userObjetos = {
    name: "John",
    lastName: "Doe",
    age: 30,
    _password: "123456",
    fullName() {
        this._password;
        return `${this.name} ${this.lastName}`;
    },
};
