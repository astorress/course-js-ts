// el tipo de dato es map es una generalización de los objects, donde se pueden realizar operaciones mas facilimente que en estos,
// incluyendo las operaciones de objects (dict), set o list en un solo objeto
// es tambien una estructura de clave - valor

const fruitsMap = {
  apple: 0.99,
  banana: 1.99,
  orange: 2.99,
};

const mapMap = new Map<string, number>();

mapMap.set('apple', 0.99);
mapMap.set('banana', 1.99);
mapMap.set('orange', 2.99);

console.log(mapMap);
console.log(mapMap.get('apple'));

const mapMap1 = new Map<string, number>([
  ['apple', 0.99],
  ['banana', 1.99],
  ['orange', 2.99],
]);

console.log(mapMap1);
