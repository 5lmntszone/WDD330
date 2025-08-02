import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter();

  const listElement = document.querySelector(".product-list");
  const cart = new ShoppingCart("so-cart", listElement);
  cart.init();
});
