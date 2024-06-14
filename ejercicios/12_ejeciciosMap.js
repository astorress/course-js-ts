"use strict";
class MyMapEjercicioMap {
    map;
    constructor(map = []) {
        this.map = map;
    }
    has(key) {
        return this.map.some(([k]) => k === key);
    }
    set(key, value) {
        if (this.has(key)) {
            this.map = this.map.map(([k, v]) => (k === key ? [key, value] : [k, v]));
        }
        else {
            this.map.push([key, value]);
        }
    }
    get(key) {
        return this.map.find(([k]) => k === key)?.[1];
    }
    clear() {
        this.map = [];
    }
    size() {
        return this.map.length;
    }
    keys() {
        return this.map.map(([k]) => k);
    }
    values() {
        return this.map.map(([_, v]) => v);
    }
    entries() {
        return [...this.map];
    }
}
const mapEjercicioMap = new MyMapEjercicioMap();
mapEjercicioMap.set('banana', 5);
console.log(mapEjercicioMap.get('banana'));
