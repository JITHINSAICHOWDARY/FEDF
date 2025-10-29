import { renderCart } from "./ui.js";

let cart = [];

export function addToCart(title, price, link) {
  cart.push({ title, price, link });
  renderCart(cart);
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart(cart);
}

export function getCart() {
  return cart;
}
