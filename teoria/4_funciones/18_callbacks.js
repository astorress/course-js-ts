"use strict";
// Pasando funciones como parametros
function operacionCallback(aCallback, bCallback, callback) {
    if (callback(aCallback, bCallback) > 10)
        return true;
    return false;
}
function sumaCallback(aSumaCallback, bSumaCallback) {
    return aSumaCallback + bSumaCallback;
}
function restaCallback(aRestaCallback, bRestaCallback) {
    return aRestaCallback + bRestaCallback;
}
function multiCallback(aMultiCallback, bMultiCallback) {
    return aMultiCallback + bMultiCallback;
}
const resultadoCallback = operacionCallback(10, 20, sumaCallback);
console.log(resultadoCallback);
