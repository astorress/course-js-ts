type ProductRemoveArrays = {
  id: number;
  name: string;
  price: number;
};

type ShoppingCartRemoveArrays = {
  id: string;
  cart: ProductRemoveArrays[];
  addToCart: (product: ProductRemoveArrays) => void;
  calculateTotalPrice: () => number;
  removeFromCart: (id: number) => void;
};

// for loop
const shoppingCartRemoveArrays: ShoppingCartRemoveArrays = {
  id: "123",
  cart: [],
  addToCart(product: ProductRemoveArrays) {
    this.cart.push(product);
  },
  calculateTotalPrice() {
    let sum = 0;

    for (const product of this.cart) {
      sum += product.price;
    }

    return sum;
  },
  removeFromCart(id: number) {
    const newCart = [];

    for (const product of this.cart) {
      if (product.id !== id) {
        newCart.push(product);
      }
    }
    this.cart = newCart;
  },
};

shoppingCartRemoveArrays.addToCart({
  id: 1,
  name: "laptop",
  price: 1000,
});

shoppingCartRemoveArrays.addToCart({
  id: 2,
  name: "computer",
  price: 1000,
});

console.log(shoppingCartRemoveArrays.cart);
console.log(shoppingCartRemoveArrays.calculateTotalPrice());

shoppingCartRemoveArrays.removeFromCart(1);
console.log(shoppingCartRemoveArrays.cart);
