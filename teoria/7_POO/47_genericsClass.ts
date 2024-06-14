class DataStorageGenericClass<T> {
  constructor(private data: T[]) {}

  add(item: T): void {
    this.data.push(item);
  }

  remove(item: T): void {
    this.data = this.data.filter((d) => d !== item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

// Como solo se le pasa un tipo de dato el tipo generico toma por defecto este tipo de dato y lo setea a toda la clase
const textStorageGenericClass = new DataStorageGenericClass(['Hello', 'World']);
textStorageGenericClass.add('!');
textStorageGenericClass.remove('World');

console.log(textStorageGenericClass.getItems());

// Que pasa si se le añade un valor numerico con el metodo add
// textStorageGenericClass.add(1);

// Para que esto no genere error se tiene que asignar a la clase cuando es invocada una union de tipos
// const textStorageGenericClass = new DataStorageGenericClass<string || number>(['Hello', 'World']);
