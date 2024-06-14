///////////////////////////////////////////////////////////////////
// Valores Falsy
/*
- false
- 0
- "" | '' | ``
- null
- undefined
- NaN

*/

if (0) {
} else {
  console.log("Hola 0");
}

if (false) {
} else {
  console.log("Hola false");
}

if ("") {
} else {
  console.log("Hola '' ");
}

if (undefined) {
} else {
  console.log("Hola undefined");
}

if (null) {
} else {
  console.log("Hola null ");
}

if (NaN) {
} else {
  console.log("Hola NaN ");
}

///////////////////////////////////////////////////////////////////
// Valores Truthy
/*
- true
- != 0
- != "" | '' | ``
- != null
- != undefined
- != NaN 

*/

if (1) {
  console.log("Hola !=0");
} else {
}

if (true) {
  console.log("Hola true");
} else {
}

if ("asas") {
  console.log("Hola != '' ");
} else {
}
