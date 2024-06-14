const usersTypeArrays = ["Johan", "Paul", "Juan"];

const ageTypeArrays = [20, 39, 40];

//  ageTypeArrays[1] = "1"; // esto da error en ts porque el arrays inicial era todos numeros

const ageTypeArrays2: number[] = [20, 30, 40];

// esto significa que es un arrays de numero o un arrays de string, pero no combinados
const ageTypeArrays3: number[] | string[] = [1, 2, 3, 4];

// de esta forma si se puede combinar tipos de datos en unas list
const ageTypeArrays4: (number | string)[] = [1, "2"];

// Se asigna un valor con un indice muy lejano al que existe, el valor queda indefinido, pero no de forma explicita de ts
ageTypeArrays4[5] = 32;

console.log(ageTypeArrays4);

// si se quiere tener tipo de datos diferentes a los por defecto hago lo siguiente
type UsersTypeArrays = {
  id: string;
  name: string;
  email: string;
};

const usersTypeArrays2: UsersTypeArrays[] = [
  {
    id: "1",
    name: "John",
    email: "jajajaj",
  },
];

// Los arreglos deberian tener solo un tipo de dato
