// while loop
let iWhile = 0;

while (iWhile < 10) {
  console.log("Hola, mundo");

  iWhile += 1;
}

// break: para el loop
iWhile = 0;
while (iWhile < 10) {
  if (iWhile == 5) break;
  console.log("i", iWhile);
  iWhile++;
}

// continue: salta porcion del codigo
iWhile = 0;
while (iWhile < 10) {
  iWhile++;
  if (iWhile == 5) continue;
  console.log("i", iWhile);
}
