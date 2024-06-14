// una clase se puede pensar como un plano o plantilla para crear un objeto, esto es muy similar a lo que hace type de ts

/*
Una clase es una plantilla. Define de manera genérica cómo van a ser los objetos de determinado tipo. 
Por ejemplo, en un juego, una clase para representar a personas puede llamarse Persona y tener una serie de atributos como 
Nombre, Apellidos o Edad (que normalmente son propiedades), y una serie de comportamientos que pueden tener, como Hablar(), Caminar() o Comer() y 
que se implementan como métodos de la clase (funciones).


Una clase por sí sola no sirve de nada, pues no es más que un concepto, sin entidad real. Para poder utilizar una 
clase en un programa lo que hay que hacer es instanciarla. Instanciar una clase consiste en crear un nuevo objeto 
concreto de la misma. Es decir, un objeto es ya una entidad concreta que se crea a partir de la plantilla que es la clase. 
Este nuevo objeto tiene ya "existencia" real, puesto que ocupa memoria y se puede utilizar en el programa. Así un objeto puede ser una persona que se llama 
Cristina López, de 37 años y que en nuestro programa podría hablar, caminar o comer, que son los comportamientos que están definidos en la clase.

*/
type PersonaIntroduccionClases = {
  nombre: string;
  edad: number;
  bienvenida: () => void;
};
const personaIntroduccionClases: PersonaIntroduccionClases = {
  nombre: "Tony",
  edad: 45,
  bienvenida: function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  },
};

console.log(personaIntroduccionClases);

//
class PersonaIntroduccionClases1 {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  bienvenida() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

const personaIntroduccionClases1 = new PersonaIntroduccionClases1("Juan", 45);
console.log(personaIntroduccionClases1);

personaIntroduccionClases1.bienvenida();

console.log(personaIntroduccionClases1.nombre);
