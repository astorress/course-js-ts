const xFunctionFlecha = (aFuncionFlecha: number, bFuncionFlecha: number): number => {
  return aFuncionFlecha + bFuncionFlecha;
};

// Formas alternativas de crear la función flecha
/*
const xFunctionFlecha = (aFuncionFlecha: number, bFuncionFlecha: number): number => aFuncionFlecha + bFuncionFlecha;

const xFunctionFlecha:(aFuncionFlecha: number, bFuncionFlecha: number) => number = (aFuncionFlecha, bFuncionFlecha) => aFuncionFlecha + bFuncionFlecha;

*/
console.log(xFunctionFlecha(4, 5));
