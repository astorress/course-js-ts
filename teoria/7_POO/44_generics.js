"use strict";
const userGenerics = {
    name: "John",
    age: 30,
};
// a las funciones se puedes dejar un tipo de datos generico que puede ser especificado al invocar la funcion
function xGenerics(value) {
    return value;
}
const retornadoGenerics = xGenerics(userGenerics);
console.log(retornadoGenerics);
