class MyMapEjercicioMap<K, V> {
  constructor(private map: [K, V][] = []) {}

  has(key: K): boolean {
    return this.map.some(([k]) => k === key);
  }

  set(key: K, value: V): void {
    if (this.has(key)) {
      this.map = this.map.map(([k, v]) => (k === key ? [key, value] : [k, v]));
    } else {
      this.map.push([key, value]);
    }
  }

  get(key: K): V | undefined {
    return this.map.find(([k]) => k === key)?.[1];
  }

  clear(): void {
    this.map = [];
  }

  size(): number {
    return this.map.length;
  }

  keys(): K[] {
    return this.map.map(([k]) => k);
  }

  values(): V[] {
    return this.map.map(([_, v]) => v);
  }

  entries(): [K, V][] {
    return [...this.map];
  }
}

const mapEjercicioMap = new MyMapEjercicioMap<string, number>();

mapEjercicioMap.set('banana', 5);
console.log(mapEjercicioMap.get('banana'));
