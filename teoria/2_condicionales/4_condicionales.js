"use strict";
// sentencias if - > boolean - > true | false
if (false) {
    console.log("true");
}
else {
    console.log("true");
}
const edadCondicionales = 20;
const esMayorDeEdadCondicionales = edadCondicionales >= 18;
if (esMayorDeEdadCondicionales) {
    console.log("true");
}
else {
    console.log("true");
}
// || -> OR
const numeroCondicionales1 = 1;
const numeroCondicionales2 = 2;
const limite = 1;
if (numeroCondicionales1 > 1 || numeroCondicionales2 > 1) {
    console.log("Hola mundo");
}
else {
    console.log("Chao mundo");
}
// && -> AND
if (numeroCondicionales1 > 1 && numeroCondicionales2 > 1) {
    console.log("Hola mundo");
}
else {
    console.log("Chao mundo");
}
// if simplificado, si se tiene un condicional cuya salida es solo una linea, se puede crear la sentencia if de forma más simple
if (numeroCondicionales1 > 1 || numeroCondicionales2 > 1)
    console.log("Hola Mundo de nuevo");
