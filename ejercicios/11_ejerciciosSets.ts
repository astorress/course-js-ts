class MySetEjercicioSet<T> {
  constructor(private items: T[] = []) {}

  add(item: T): boolean {
    const exists = this.items.some((i) => i === item);

    if (!exists) {
      this.items.push(item);
    }

    return !exists;
  }

  remove(item: T): boolean {
    const index = this.items.findIndex((i) => i === item);

    if (index === -1) return false;

    this.items.splice(index, 1);

    return true;
  }

  has(item: T): boolean {
    return this.items.some((i) => i === item);
  }

  size(): number {
    return this.items.length;
  }

  values(): T[] {
    return [...this.items];
  }
}

const setEjercicioSet = new MySetEjercicioSet<number>();

console.log(setEjercicioSet.add(1));
console.log();
