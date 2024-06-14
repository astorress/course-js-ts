"use strict";
const userOptionalChaining = {
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
// Optional Chaining (para valores indefinidos)
const post = userOptionalChaining.post?.anotherPost; // esto sirve para verificar si el atributo exite y en caso que si, pueda ir bajando las jerarquia del objecto. Si no, no
// Nullish coalescing operator
// Esto pregunta si es indenifido o nulo, asigne
const post2 = userOptionalChaining.post?.anotherPost ?? userOptionalChaining._password;
