"use strict";
// el forEach lo que hace es que itera sobre los elementos del arrays de forma natural
const arrForEach = [1, 2, 3];
for (const number of arrForEach) {
    console.log(number);
}
arrForEach.forEach((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
});
const studentsForEach = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },
    { name: "Bob", age: 23 },
];
for (const student of studentsForEach) {
    console.log(student);
}
studentsForEach.forEach((student) => console.log(student.name));
