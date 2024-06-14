type ProductIterArrays = {
  name: string;
  price: number;
};

type ShoppingCartIterArrays = {
  id: string;
  cart: ProductIterArrays[];
  addToCart: (product: ProductIterArrays) => void;
  calculateTotalPrice: () => number;
};

// for loop
const shoppingCartIterArraysForLoop: ShoppingCartIterArrays = {
  id: "123",
  cart: [],
  addToCart(product: ProductIterArrays) {
    this.cart.push(product);
  },
  calculateTotalPrice() {
    let sum = 0;

    for (let i = 0; i < this.cart.length; i++) {
      const product = this.cart[i];
      sum += product.price;
    }

    return sum;
  },
};

shoppingCartIterArraysForLoop.addToCart({
  name: "laptop",
  price: 1000,
});

shoppingCartIterArraysForLoop.addToCart({
  name: "computer",
  price: 1000,
});

console.log(shoppingCartIterArraysForLoop.cart);
console.log(shoppingCartIterArraysForLoop.calculateTotalPrice());

// for of (este for es el similiar al de python)
const shoppingCartIterArraysForOf: ShoppingCartIterArrays = {
  id: "123",
  cart: [],
  addToCart(product: ProductIterArrays) {
    this.cart.push(product);
  },
  calculateTotalPrice() {
    let sum = 0;

    for (const product of this.cart) {
      sum += product.price;
    }

    return sum;
  },
};

shoppingCartIterArraysForOf.addToCart({
  name: "laptop",
  price: 1000,
});

shoppingCartIterArraysForOf.addToCart({
  name: "computer",
  price: 1000,
});

console.log(shoppingCartIterArraysForOf.cart);
console.log(shoppingCartIterArraysForOf.calculateTotalPrice());
