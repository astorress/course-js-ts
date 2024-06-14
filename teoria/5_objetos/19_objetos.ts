// los objetos son pares claves y valores, diccionarios, se pueden agregar cualquier tipo de datos, otros objetos e incluso funciones
// las claves van con camelCase

const usuarioObject1 = {
  nombre: "Juan",
  edad: 19,
  imprimir: function () {
    console.log("Hola");
  },
  imprimirNombre: function () {
    console.log(this.nombre);
  },
  datosPersonales: {
    nombre: "Juan", // Se puede repetir claves siempre que esten anidados, porque es otro alcance de bloque
    cedula: 121212,
  },
};

console.log(usuarioObject1["nombre"]);
console.log(usuarioObject1.edad);
usuarioObject1.imprimir();
usuarioObject1.imprimirNombre();
console.log(usuarioObject1["datosPersonales"]["cedula"]);
console.log(`Hola, mi nombre es ${usuarioObject1.nombre} y tengo ${usuarioObject1.edad}`);

// añadir objetos
const usuarioObject2 = {
  nombre: "Sebas",
  edad: 20,
  imprimir: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  },
};

usuarioObject2.edad2 = 25;
usuarioObject2["nombre2"] = "Anderson";
if (usuarioObject2.edad >= 18) {
  usuarioObject2.imprimirEdad = () => console.log(`Tengo ${this.edad} años`);
}

console.log(usuarioObject2);

// modificar
usuarioObject2.edad2 = 12;
usuarioObject2["nombre2"] = "Juan";

console.log(usuarioObject2);

// Borrar
delete usuarioObject2.edad2;
delete usuarioObject2.imprimirEdad;
delete usuarioObject2["nombre2"];

console.log(usuarioObject2);
