"use strict";
// Ejercicio 1
const shoppingCartrraysAndObjects = {
    cart: [],
    totalPrice: 0,
    addToCart(product) {
        this.cart.push(product);
        this.totalPrice += product.price;
    },
    removeLastItem() {
        const removido = this.cart.pop();
        this.totalPrice -= removido?.price ?? 0;
    },
};
const productArraysAndObjects1 = { name: "laptop", price: 1000 };
const productArraysAndObjects2 = { name: "desktop", price: 1500 };
shoppingCartrraysAndObjects.addToCart(productArraysAndObjects1);
console.log(shoppingCartrraysAndObjects.cart, shoppingCartrraysAndObjects.totalPrice);
shoppingCartrraysAndObjects.addToCart(productArraysAndObjects2);
console.log(shoppingCartrraysAndObjects.cart, shoppingCartrraysAndObjects.totalPrice);
shoppingCartrraysAndObjects.removeLastItem();
console.log(shoppingCartrraysAndObjects.cart, shoppingCartrraysAndObjects.totalPrice);
shoppingCartrraysAndObjects.removeLastItem();
console.log(shoppingCartrraysAndObjects.cart, shoppingCartrraysAndObjects.totalPrice);
shoppingCartrraysAndObjects.removeLastItem();
console.log(shoppingCartrraysAndObjects.cart, shoppingCartrraysAndObjects.totalPrice);
