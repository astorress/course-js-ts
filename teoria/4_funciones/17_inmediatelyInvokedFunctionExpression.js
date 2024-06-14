"use strict";
// IIFE inmediately Invoked Function Expression, para esto se usan funciones anonimas o funciones flecha
const xIIFE = function () {
    console.log("x");
};
xIIFE();
// Esta es la forma de invocar funciones de forma inmediata
(function () {
    console.log("y");
})();
(() => console.log("y"))();
