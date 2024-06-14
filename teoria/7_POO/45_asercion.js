"use strict";
const userAsercion = {
    name: "John",
    age: 30,
};
// si se tiene una función con tipo de any se puede asignar tipo de datos al invocar
function sumaAsercion(a) {
    return a + 2;
}
const resultadosSumaAsercion = sumaAsercion(2);
console.log(resultadosSumaAsercion);
function xAsercion(obj) {
    if (typeof obj === "number") {
        return (obj + 2);
    }
    return obj;
}
