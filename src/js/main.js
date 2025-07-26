import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

// Create the data source for tents
const dataSource = new ProductData('tents');

// Get the element where the list will be displayed
const listElement = document.querySelector('.product-list');

// Create an instance of ProductList and initialize it
const productList = new ProductList('tents', dataSource, listElement);
productList.init();
