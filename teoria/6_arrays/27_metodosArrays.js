"use strict";
const arraysMetodo = [1, 2, 3, 4, 5];
// .length
console.log(arraysMetodo.length);
arraysMetodo.length = 3; // se puede modificar el tamaño del array, no es recomendable, pero se puede
console.log(arraysMetodo);
// .push(elemento) --> agregar elemetos, el append() de ts y js
arraysMetodo.push(5);
console.log(arraysMetodo); // siempre se agrega en el ultimo indice
// .pop() --> eliminar elementos
arraysMetodo.pop();
console.log(arraysMetodo); // siempre se elimina el ultimo elemento
// .shift() --> eliminar elementos
arraysMetodo.shift();
console.log(arraysMetodo); // siempre se elimina el primer elemento
// unshift() --> agregar elementos
arraysMetodo.unshift(1, 2);
console.log(arraysMetodo); // siempre se agreg en los primeros indices
