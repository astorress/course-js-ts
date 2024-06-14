// desafio 1 (while)
let iFizzBuzz: number = 0;

while (iFizzBuzz <= 100) {
  if (iFizzBuzz % 3 == 0 && iFizzBuzz % 5 == 0) {
    console.log("fizzbuzz");
  } else if (iFizzBuzz % 3 == 0) {
    console.log("fizz");
  } else if (iFizzBuzz % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(iFizzBuzz);
  }
  iFizzBuzz++;
}

console.log("\n");

// desafio 2 (for)
for (iFizzBuzz = 0; iFizzBuzz <= 100; iFizzBuzz++) {
  if (iFizzBuzz % 3 == 0 && iFizzBuzz % 5 == 0) {
    console.log("fizzbuzz");
  } else if (iFizzBuzz % 3 == 0) {
    console.log("fizz");
  } else if (iFizzBuzz % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(iFizzBuzz);
  }
}

// desafio 3 (for y ternario)
let FizzBuzz: string;

for (iFizzBuzz = 0; iFizzBuzz <= 100; iFizzBuzz++) {
  iFizzBuzz % 3 == 0 && iFizzBuzz % 5 == 0
    ? console.log("fizzbuzz")
    : iFizzBuzz % 3 == 0
    ? console.log("fizz")
    : iFizzBuzz % 5 == 0
    ? console.log("buzz")
    : console.log(iFizzBuzz);
}
