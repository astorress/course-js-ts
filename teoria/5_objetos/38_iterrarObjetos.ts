// for ... in
type ObjIterarObject = {
  [key: string]: number;
};

const objIterarObject: ObjIterarObject = {
  a: 1,
  b: 2,
};

for (const key in objIterarObject) {
  console.log(key);
  console.log(objIterarObject[key]);
}

// entries toma un object y lo tranforma en un array de arrays
console.log(Object.entries(objIterarObject));

// keys retorna un array con las claves del object
const keysIterarObject = Object.keys(objIterarObject);
console.log(keysIterarObject);

// values retorn un array con los valores del object
const valuesIterarObject = Object.values(objIterarObject);
console.log(valuesIterarObject);
