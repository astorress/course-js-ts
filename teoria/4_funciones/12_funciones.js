"use strict";
//// funciones: las variables dentro de una funcion son locales
const aFuncion = 5;
function sumar(aFuncion, bFuncion) {
    const resultado = aFuncion + bFuncion;
    return resultado;
}
console.log(sumar(1, 4));
console.log(typeof sumar(1, 4));
//// Se puede especificar el tipo de variable de los parametros de entrada y de la salida
function sumar2(aFuncion2, bFuncion2) {
    const resultado2 = aFuncion2 + bFuncion2;
    return resultado2;
}
console.log(sumar2(1, 4));
console.log(typeof sumar2(1, 4));
//// cláusulas de guarda sirve para los casos donde el return depende de un condicional
/*
function restar(aFuncion3: number, bFuncion3: number): number | undefined {
  if (aFuncion3 < bFuncion3) {
    return aFuncion3 - b;
  }
}*/
function restar(aFuncion3, bFuncion3) {
    if (typeof aFuncion3 != "number" || typeof bFuncion3 != "number")
        return;
    if (aFuncion3 < bFuncion3)
        return;
    return aFuncion3 - bFuncion3;
}
