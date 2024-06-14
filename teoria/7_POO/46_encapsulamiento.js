"use strict";
//encapsulmiento
/*
La encapsulación es la característica de un lenguaje POO que permite que todo lo referente
a un objeto quede aislado dentro de éste. Es decir, que todos los datos referentes a un objeto
queden "encerrados" dentro de éste y sólo se puede acceder a ellos a través de los miembros que
la clase proporcione (propiedades y métodos)

Por ejemplo, en el caso de las personas que estábamos viendo, toda la información sobre éstas
(nombre, apellidos, edad... y cualquier otro dato interno que se utilice y que no necesariamente
    se ve desde el exterior del objeto) está circunscrito al ámbito de dicha persona.
*/
class _DataStorageEncapsulamiento {
    data;
    constructor(data) {
        this.data = data;
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return this.data;
    }
}
const textStorageEncapsulamiento = new _DataStorageEncapsulamiento(["a", "b", "c"]);
const textEncapsulamiento = textStorageEncapsulamiento.getItems();
