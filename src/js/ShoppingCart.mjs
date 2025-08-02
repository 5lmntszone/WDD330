import { getLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
  constructor(key, listElement) {
    this.key = key;
    this.listElement = listElement;
  }

  init() {
    const cartItems = getLocalStorage(this.key) || [];
    this.renderCart(cartItems);
  }

  renderCart(cartItems) {
    const template = document.getElementById("cart-item-template");
    this.listElement.innerHTML = ""; 

    cartItems.forEach((item) => {
      const clone = template.content.cloneNode(true);

      clone.querySelector(".cart-card__image").href = `../product_pages/index.html?product=${item.Id}`;
      clone.querySelector("img").src = item.Images.PrimaryMedium;
      clone.querySelector("img").alt = item.Name;

      clone.querySelector("a + a").href = `../product_pages/index.html?product=${item.Id}`;
      clone.querySelector(".card__name").textContent = item.Name;

      clone.querySelector(".cart-card__color").textContent = item.Colors[0].ColorName;
      clone.querySelector(".cart-card__quantity").textContent = `qty: 1`;
      clone.querySelector(".cart-card__price").textContent = `$${item.FinalPrice}`;

      this.listElement.appendChild(clone);
    });
  }
}
