const funcionHola: () => void = () => "Hola Mundo";

// Formas de invocar funciones dentro de funciones
const invocarOtraFuncio: Function = () => {
  return funcionHola();
};
const zFuncionHola = funcionHola();

console.log(funcionHola());
console.log(invocarOtraFuncio());
console.log(zFuncionHola);
