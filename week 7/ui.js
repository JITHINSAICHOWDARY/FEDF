import { removeFromCart } from "./cart.js";

const bookListDiv = document.getElementById("bookList");
const cartItemsDiv = document.getElementById("cartItems");
const cartTotalDiv = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

export function renderBookList(books, addFunction){
  bookListDiv.innerHTML = "";
  books.forEach(book=>{
    const div = document.createElement("div");
    div.className = "book-card";
    div.innerHTML = `
      <a href="${book.link}" target="_blank">
        <img src="${book.image}" alt="${book.title}">
      </a>
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-price">₹${book.price}</div>
        <button>Add to Cart</button>
      </div>
    `;
    div.querySelector("button").addEventListener("click", ()=> addFunction(book.title, book.price, book.link));
    bookListDiv.appendChild(div);
  });
}

export function renderCart(cart){
  cartItemsDiv.innerHTML = "";
  let total = 0;
  cart.forEach((item,index)=>{
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>
      <span>₹${item.price}</span>
      <button>Remove</button>`;
    div.querySelector("button").addEventListener("click",()=>removeFromCart(index));
    cartItemsDiv.appendChild(div);
  });
  cartTotalDiv.textContent = "Total: ₹"+total;
  cartCount.textContent = cart.length;
}
