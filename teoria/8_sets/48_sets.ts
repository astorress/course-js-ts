// sets, son listas o arrays, donde al igual que en estos se puede
// añadir, remover, etc.

// La unica diferencia rapica en que no se puede repetir valores dentro del set

const numberListSet: number[] = [1, 2, 3, 3];

const numberSetSet = new Set(numberListSet);
console.log(numberSetSet);

// añadir valores al set
numberSetSet.add(4);
console.log(numberSetSet);

numberSetSet.add(4);
console.log(numberSetSet);

// buscar valor en el set
console.log(numberSetSet.has(4));
console.log(numberSetSet.has(5));

// borrar elementos
const deleteSets = numberSetSet.delete(4);
console.log(numberSetSet, deleteSets);
