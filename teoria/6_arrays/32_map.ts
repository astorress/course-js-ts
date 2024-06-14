// map ejecuta una función sobre todos los ejemplos del array, por lo cual de entrada tiene un arrays y de salida es otro arrya
const numbersMap = [1, 2, 3, 4, 5];

for (let i = 0; i < numbersMap.length; i++) {
  const number = numbersMap[i];
  numbersMap[i] = number * 2;
}

const numberMap2 = numbersMap.map((number) => number * 2);
console.log(numberMap2);

// ejemplo
type StudentMap = {
  name: string;
  age: number;
};

const studentsMap: StudentMap[] = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Bob", age: 23 },
];

const mayorDeEdad = studentsMap.map((student) => {
  if (student.age >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
});

console.log(mayorDeEdad);

const mayorDeEdad2 = studentsMap.map((student) => ({
  ...student,
  isAdult: student.age >= 18,
}));

console.log(mayorDeEdad2);
