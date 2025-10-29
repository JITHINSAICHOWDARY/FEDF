import { books } from "./data.js";
import { addToCart } from "./cart.js";
import { renderBookList } from "./ui.js";

export function displayBooks() {
  renderBookList(books, addToCart);
}
