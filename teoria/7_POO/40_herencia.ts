// Herencia

/*
Desde el punto de vista de la genética, cuando una persona obtiene de sus padres ciertos rasgos 
(el color de los ojos o de la piel, una enfermedad genética, etc...) se dice que los hereda. 
Del mismo modo en POO cuando una clase hereda de otra obtiene todos los rasgos que tuviese la primera.

A la clase de la que se hereda se le llama clase base, y a la clase que hereda de ésta se le llama clase derivada.

Así, en nuestro juego que involucra personas, podemos tener clases de personas más especializadas para representar 
personajes especiales del juego. Por ejemplo, podríamos definir clases como Pirata, Piloto o Estratega que heredan 
de la clase Persona. Todos los objetos de estas clases heredan las propiedades y los métodos de Persona, pero pueden 
particularizar algunos de ellos y además añadir cosas propias.
*/

class ProductHerencia {
  price: number;
  id: number;

  constructor(price: number, id: number) {
    this.price = price;
    this.id = id;
  }
}

class BookHerencia extends ProductHerencia {
  title: string;
  pages: number;

  constructor(title: string, pages: number, price: number, id: number) {
    super(price, id);
    this.title = title;
    this.pages = pages;
  }

  calculateShippingCost() {
    return this.price * 0.1;
  }
}

const bookHerencia = new BookHerencia("Harry Potter", 100, 100, 1);
console.log(bookHerencia);

class TVHerencia extends ProductHerencia {
  name: string;

  constructor(name: string, price: number, id: number) {
    super(price, id);
    this.name = name;
  }
}

const tvHerencia = new TVHerencia("LG", 1000, 1);
console.log(tvHerencia);
