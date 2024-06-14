"use strict";
// .concat
console.log("a" + "b");
const arrayMetodos1 = [1, 2, 3];
const arrayMetodos2 = [4, 5, 6];
console.log(arrayMetodos1 + arrayMetodos2); // concatena mal
const arrayMetodos3 = arrayMetodos1.concat(arrayMetodos2);
console.log(arrayMetodos3);
// operador spread
const arraySpread = [...arrayMetodos1, ...arrayMetodos2, ...arrayMetodos3];
console.log(arraySpread);
// desestructuración de arrays
const [aDesestructurado, bDesestructurado, cDesestructurado] = arrayMetodos1;
console.log(aDesestructurado);
console.log(bDesestructurado);
console.log(cDesestructurado);
const arrayMetodos4 = ["Hola", "Mundo", 5, 10, true];
const [dDesestructurado, eDesestructurado, ...fDesestructurado] = arrayMetodos4;
console.log(dDesestructurado, eDesestructurado, fDesestructurado);
// rest
function funMetodos(a, b, ...args) {
    console.log(args);
}
funMetodos(1, 3, 4, 5, 5);
