import { getLocalStorage, setLocalStorage } from './utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};      
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);

    // Render product details to the page
    this.renderProductDetails();

    // Add event listener to Add to Cart button
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  addProductToCart() {
    const cartItems = getLocalStorage('so-cart') || [];
    cartItems.push(this.product);
    setLocalStorage('so-cart', cartItems);
    alert(`${this.product.Name} added to cart!`)
  }

  renderProductDetails() {
    document.querySelector('title').textContent = `Sleep Outside | ${this.product.Name}`;

    document.getElementById('brand').textContent = this.product.Brand.Name;
    document.getElementById('name').textContent = this.product.NameWithoutBrand;
    document.getElementById('price').textContent = `$${this.product.FinalPrice}`;
    document.getElementById('color').textContent = this.product.Colors[0].ColorName;
    document.getElementById('description').innerHTML = this.product.DescriptionHtmlSimple;

    const img = document.getElementById('image');
    img.setAttribute('src', `../${this.product.Image}`);
    img.setAttribute('alt', this.product.Name);

    document.getElementById('addToCart').dataset.id = this.product.Id;
  }
}
