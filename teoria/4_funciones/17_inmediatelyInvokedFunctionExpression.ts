// IIFE inmediately Invoked Function Expression, para esto se usan funciones anonimas o funciones flecha

const xIIFE = function (): void {
  console.log("x");
};

xIIFE();

// Esta es la forma de invocar funciones de forma inmediata
(function () {
  console.log("y");
})();

(() => console.log("y"))();
