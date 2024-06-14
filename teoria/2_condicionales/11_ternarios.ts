// (expresioin) ? (if true ejecute esta parte) : (else o else if () ejecute esta parte)

// if
let xTernario: string | undefined;

if (5 > 3) {
  xTernario = "5 es mayor a 3";
} else {
  xTernario = "5 no es mayor a 3";
}

let yTernario: string = 5 > 3 ? "5 es mayor a 3" : "5 no es mayor a 3";
console.log(yTernario);
