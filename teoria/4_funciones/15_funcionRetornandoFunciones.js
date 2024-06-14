"use strict";
const funcionHola = () => "Hola Mundo";
// Formas de invocar funciones dentro de funciones
const invocarOtraFuncio = () => {
    return funcionHola();
};
const zFuncionHola = funcionHola();
console.log(funcionHola());
console.log(invocarOtraFuncio());
console.log(zFuncionHola);
