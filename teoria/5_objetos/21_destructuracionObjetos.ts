type Post = {
  title: string;
  content: string;
  date: string;
};

type UserDestructuracion = {
  name: string;
  lastName: string;
  age: number;
  _password?: string; // campo opcional
  fullName(): string; // fullName: () => string;
  post: Post;
};

const userDestructuracion: UserDestructuracion = {
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
};

// object destructuring
// const name = userDestructuracion.name; // sno está en otro alcance de bloque y por esto arroja error
// const lastName = userDestructuracion.fullName;
// const age = userDestructuracion.age;

// La destructuración sirve para guardan en variables independientes cada uno de las propiedades de los objecto
const {
  name: name2,
  lastName: lastName2,
  age: age2,
  _password: _password2 = "123456",
  post: { title: title2, content: content2, date: date2 },
} = userDestructuracion; // {nombreAntes: nombreDespues}

/*
const {
  name,
  lastName,
  age,
  post: {title, content, date },
} = userDestructuracion; 
*/
console.log(userDestructuracion);
console.log(name2);
