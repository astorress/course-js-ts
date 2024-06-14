// tuples arrays de longitud fija
const arraysTuples: number[] = [1, 2, 4];

const tuplesTuples: [number, number] = [2, 4];

const tuplesTuples2: [boolean, string, number, number] = [true, "hello", 1, 2];

type TuplesTuples = [string, () => string];

const [primerValorTuples, segundoValor]: TuplesTuples = ["Hello", () => "world"];
