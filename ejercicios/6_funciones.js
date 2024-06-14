"use strict";
// Ejercicio 1
function calculateAverage(aCalculateAverage, bCalculateAverage) {
    if (typeof aCalculateAverage != "number" || typeof bCalculateAverage != "number")
        return;
    return (aCalculateAverage + bCalculateAverage) / 2;
}
console.log(calculateAverage(5, 5));
// Ejercicio 2
function addStrings(aAddStrings, bAddStrings) {
    if (typeof aAddStrings != "string" || typeof bAddStrings != "string")
        return;
    return aAddStrings + bAddStrings;
}
console.log(addStrings("Hola", " mundo"));
// Ejercicio 3
function square(aSquare) {
    if (typeof aSquare != "number")
        return;
    return aSquare ** 2;
}
console.log(square(2));
// Ejercicio 4
function sumOfSqure(aSumOfSquare, bSumOfSquare) {
    if (typeof aSumOfSquare != "number" || typeof bSumOfSquare != "number")
        return;
    return aSumOfSquare ** 2 + bSumOfSquare ** 2;
}
console.log(sumOfSqure(4, 3));
