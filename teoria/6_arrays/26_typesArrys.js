"use strict";
const usersTypeArrays = ["Johan", "Paul", "Juan"];
const ageTypeArrays = [20, 39, 40];
//  ageTypeArrays[1] = "1"; // esto da error en ts porque el arrays inicial era todos numeros
const ageTypeArrays2 = [20, 30, 40];
// esto significa que es un arrays de numero o un arrays de string, pero no combinados
const ageTypeArrays3 = [1, 2, 3, 4];
// de esta forma si se puede combinar tipos de datos en unas list
const ageTypeArrays4 = [1, "2"];
// Se asigna un valor con un indice muy lejano al que existe, el valor queda indefinido, pero no de forma explicita de ts
ageTypeArrays4[5] = 32;
console.log(ageTypeArrays4);
const usersTypeArrays2 = [
    {
        id: "1",
        name: "John",
        email: "jajajaj",
    },
];
// Los arreglos deberian tener solo un tipo de dato
