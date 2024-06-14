// Ejercicio 1
const lengthOfString = function (aLengthOfString: string): number {
  return aLengthOfString.length;
};

console.log(lengthOfString("Hola mundo"));

// Ejercicio 2
const max1 = (aMax1: number, bMax1: number): number => Math.max(aMax1, bMax1);

const max2: (aMax2: number, bMax2: number) => number = (aMax2, bMax2) => Math.max(aMax2, bMax2);

console.log(max1(1, 2));
console.log(max2(5, 8));

// Ejercicio 3

function isEven(aIsEven: number): boolean {
  return aIsEven % 2 === 0;
}

console.log(isEven(22));

// Ejercicio 4
const double1 = (aDouble1: number): number => {
  if (aDouble1 === 1) return 1;

  return aDouble1 * 2;
};

console.log(double1(1));

const double2 = (aDouble2: number): number => (aDouble2 === 1 ? 1 : aDouble2 * 2);
console.log(double2(2));
