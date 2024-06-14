"use strict";
class MySetEjercicioSet {
    items;
    constructor(items = []) {
        this.items = items;
    }
    add(item) {
        const exists = this.items.some((i) => i === item);
        if (!exists) {
            this.items.push(item);
        }
        return !exists;
    }
    remove(item) {
        const index = this.items.findIndex((i) => i === item);
        if (index === -1)
            return false;
        this.items.splice(index, 1);
        return true;
    }
    has(item) {
        return this.items.some((i) => i === item);
    }
    size() {
        return this.items.length;
    }
    values() {
        return [...this.items];
    }
}
const setEjercicioSet = new MySetEjercicioSet();
console.log(setEjercicioSet.add(1));
console.log();
