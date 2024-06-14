// every retorna tru si todos los elementos cumplen la condion
const numberEvery: number[] = [1, 2, 45, 22];

const numberEvery2 = numberEvery.every((number) => number >= 18);

console.log(numberEvery2);

// some retorna tru si al menos un elemento cumple la condicion
const numberSome: number[] = [1, 2, 45, 22];

const numberSome2 = numberSome.some((number) => number >= 18);

console.log(numberSome2);
