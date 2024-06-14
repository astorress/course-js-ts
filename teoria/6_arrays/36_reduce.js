"use strict";
const studentsReduce = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },
    { name: "Bob", age: 23 },
];
const promedioEdad = studentsReduce.reduce((acumulado, student) => acumulado + student.age, 0);
console.log(promedioEdad);
// ejercicio
const wordsReduce = ["hello", "world", "javascript", "reduce"];
const wordsMaxLen = wordsReduce.reduce((acumulado, currentWord) => {
    if (currentWord.length > acumulado.length) {
        return currentWord;
    }
    return acumulado;
    // return currentWord.length > acumulado.length ? currentWord: acumulado
});
