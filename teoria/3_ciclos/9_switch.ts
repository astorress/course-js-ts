// la sentencia switch es una forma de if pero cuando se trabajar con multiples condiciones

// if
const frutaSwitch: string = "Manzana";

if (frutaSwitch == "Manzana") {
  console.log("Manzana");
} else if (frutaSwitch == "Platano") {
  console.log("Platano");
} else {
  console.log("La fruta no existe");
}

// switch
switch (frutaSwitch) {
  case "Manzana":
    console.log("Manzana");
    break;
  case "Platano":
    console.log("Platano");
    break;
  default:
    console.log("La frutaa no existe");
}
