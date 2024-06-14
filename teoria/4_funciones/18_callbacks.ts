// Pasando funciones como parametros
function operacionCallback(
  aCallback: number,
  bCallback: number,
  callback: (aCallback: number, bCallback: number) => number
): boolean {
  if (callback(aCallback, bCallback) > 10) return true;
  return false;
}

function sumaCallback(aSumaCallback: number, bSumaCallback: number): number {
  return aSumaCallback + bSumaCallback;
}

function restaCallback(aRestaCallback: number, bRestaCallback: number): number {
  return aRestaCallback + bRestaCallback;
}

function multiCallback(aMultiCallback: number, bMultiCallback: number): number {
  return aMultiCallback + bMultiCallback;
}

const resultadoCallback = operacionCallback(10, 20, sumaCallback);

console.log(resultadoCallback);
