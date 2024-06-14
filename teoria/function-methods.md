### `.forEach`

El método `.forEach()` se utiliza para ejecutar una función en cada elemento de un array.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].forEach((fruta) => console.log(fruta)) -> 🍐, 🍎, 🍐, 🍎, 🍎
```

### `.map()`

El método `.map()` se utiliza para crear un nuevo array con los resultados de llamar a una función en cada elemento del array original.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].map((fruta) => fruta + "🍉") -> ["🍐🍉", "🍎🍉", "🍐🍉", "🍎🍉", "🍎🍉"]
```

### `.filter()`

El método `.filter()` se utiliza para crear un nuevo array con todos los elementos que cumplan la condición implementada por la función.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].filter((fruta) => fruta === "🍎") -> ["🍎", "🍎", "🍎"]
```

### `.every()`

El método `.every()` se utiliza para comprobar si todos los elementos del array cumplen con la condición implementada por la función.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].every((fruta) => fruta === "🍎") -> false
```

### `.some()`

El método `.some()` se utiliza para comprobar si al menos un elemento del array cumple con la condición implementada por la función.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].some((fruta) => fruta === "🍎") -> true
```

### `.find()`

El método `.find()` se utiliza para devolver el primer elemento del array que cumpla con la condición implementada por la función.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].find((fruta) => fruta === "🍎") -> 🍎
```

### `.findIndex()`

El método `.findIndex()` se utiliza para devolver el índice del primer elemento del array que cumpla con la condición implementada por la función.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].findIndex((fruta) => fruta === "🍎") -> 1
```

Por ejemplo, se puede utilizar para modificar un elemento del array.

```js
const frutas = ["🍐", "🍎", "🍐", "🍎", "🍎"]
const index = frutas.findIndex((fruta) => fruta === "🍎")
frutas[index] = "🍉"
frutas -> ["🍐", "🍉", "🍐", "🍎", "🍎"]
```

### `.reduce()`

El método `.reduce()` se utiliza para ejecutar una función reductora sobre cada elemento del array, devolviendo como resultado un único valor.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].reduce((acumulador, fruta) => acumulador + fruta) -> "🍐🍎🍐🍎🍎"
```

Es importante tener en cuenta que `.reduce()` requiere un valor inicial para el acumulador, el cual se puede especificar como segundo argumento.

```js
["🍐", "🍎", "🍐", "🍎", "🍎"].reduce((acumulador, fruta) => acumulador + fruta, "🍉") -> "🍉🍐🍎🍐🍎🍎"
```
