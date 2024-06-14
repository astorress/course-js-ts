///////////////////////////////////////////////////////////////////
// aritmeticos (+, -, *, /, %, **)
const xOperadores = 5;
const yOperadores = 10;
const zOperadores = xOperadores + yOperadores;

console.log(zOperadores, 5, 10, "", true, false, undefined);

console.log(5 + 5, 5 - 5, 5 * 5);

console.log((5 + 5) * 5);

///////////////////////////////////////////////////////////////////
// concatenación
const aOperadores = "Hola" + " mundo";
console.log(aOperadores);

const holaOperadores = "Hol";
const mundoOperadores = "mundo";

const comillasInvertidas = `${holaOperadores} ${mundoOperadores}`;
console.log(comillasInvertidas);

///////////////////////////////////////////////////////////////////
// unarios (+, -, !. typeof, void, delete)
//// ! -> negación (NOT)
const TrueOperadores = !false;
console.log(TrueOperadores);

console.log(-10);

//// NaN -> Not a Number
const numeroOperadores = +"10";
console.log(numeroOperadores);

const numeroOperadores1 = +"10asas";
console.log(numeroOperadores1);

const numeroOperadores2 = 5 + "5";
console.log(numeroOperadores2);

///////////////////////////////////////////////////////////////////
// Incremento (++) y decremento (--)
//// esto operadores se pueden usar como prefijo o sufijo

////// sufijo (evalua el valor y suma)
let incrementoOperadores = 5;
console.log(incrementoOperadores++);
console.log(incrementoOperadores);

////// prefijo (suma y evalua)
let incrementoOperadores1 = 5;
console.log(++incrementoOperadores1);
console.log(incrementoOperadores1);

///////////////////////////////////////////////////////////////////
// asignación (+=, -=, *=, /=, %=, **=)
let sumaTotalOperadores = 0;

sumaTotalOperadores = sumaTotalOperadores + 5;
console.log(sumaTotalOperadores);

sumaTotalOperadores += 5;
console.log(sumaTotalOperadores);

sumaTotalOperadores %= 2;
console.log(sumaTotalOperadores);

///////////////////////////////////////////////////////////////////
// condicionales (>, <, >=, <=, ==, ===)

console.log(5 > 5);

//console.log(5 == "5"); //para js esto es igual, porque convierte el string en un number
//onsole.log(5 === "5");
