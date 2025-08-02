import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import Alert from './Alert.js';
import { loadHeaderFooter } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter();

  const dataSource = new ProductData('tents');
  const listElement = document.querySelector('.product-list');
  const productList = new ProductList('tents', dataSource, listElement);
  const alerts = new Alert('./json/alerts.json');

  alerts.init();
  productList.init();
});
