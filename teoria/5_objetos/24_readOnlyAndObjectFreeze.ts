type PostFreeze = {
  title: string;
  content: string;
  date: string;
  anotherPost?: {
    title: string;
    content: string;
  };
};

type UserFreeze = {
  name: string;
  lastName: string;
  age: number;
  _password?: string; // campo opcional
  fullName(): string; // fullName: () => string;
  post: PostFreeze;
  property: null;
};

const userFreeze: UserFreeze = {
  name: "John",
  lastName: "Doe",
  age: 30,
  _password: "123456",
  fullName() {
    this._password;
    return `${this.name} ${this.lastName}`;
  },
  post: {
    title: "My firt post",
    content: "Hello world",
    date: "2020-01-01",
  },
  property: null,
};

// Object Freeze
const userFreezeCongelado = Object.freeze(userFreeze); //Esto hace que no se pueda modificar, borrar, etc el objecto, solo leer
userFreezeCongelado.age = 20;

console.log(userFreezeCongelado);

// Otra forma de crear el freeze es
const userFreeze2: UserFreeze = Object.freeze({
  name: "John",
  lastName: "Doe",
  age: 30,
  _password: "123456",
  fullName() {
    this._password;
    return "Hola";
  },
  post: {
    title: "My firt post",
    content: "Hello world",
    date: "2020-01-01",
  },
  property: null,
});

// Si se quiere que solo una de las propiedades sea solo de lectura se le asigna un readonly al crear el type
type UserFreeze3 = {
  readonly name: string;
  lastName: string;
  age: number;
  _password?: string; // campo opcional
  fullName(): string; // fullName: () => string;
  post: PostFreeze;
  property: null;
};

const userFreeze3: UserFreeze3 = {
  name: "John",
  lastName: "Doe",
  age: 30,
  _password: "123456",
  fullName() {
    this._password;
    return "Hola";
  },
  post: {
    title: "My firt post",
    content: "Hello world",
    date: "2020-01-01",
  },
  property: null,
};

delete userFreeze3.name;
