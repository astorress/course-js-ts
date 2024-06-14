type UserAsercion = {
  name: string;
  age: number;
};

const userAsercion = {
  name: "John",
  age: 30,
};

// si se tiene una función con tipo de any se puede asignar tipo de datos al invocar
function sumaAsercion(a: any): any {
  return a + 2;
}

const resultadosSumaAsercion = sumaAsercion(2) as string;
console.log(resultadosSumaAsercion);

function xAsercion<T>(obj: T): T {
  if (typeof obj === "number") {
    return (obj + 2) as T;
  }
  return obj;
}
