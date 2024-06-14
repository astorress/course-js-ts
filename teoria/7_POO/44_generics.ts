type UserGenerics = {
  name: string;
  age: number;
};

const userGenerics: UserGenerics = {
  name: "John",
  age: 30,
};

// a las funciones se puedes dejar un tipo de datos generico que puede ser especificado al invocar la funcion
function xGenerics<T>(value: T): T {
  return value;
}

const retornadoGenerics = xGenerics<UserGenerics>(userGenerics);
console.log(retornadoGenerics);
