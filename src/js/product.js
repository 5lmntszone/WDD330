import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

// Get product id from URL
const productId = getParam("product");

// Create data source instance
const dataSource = new ProductData("tents");

// Create product details instance and initialize
const product = new ProductDetails(productId, dataSource);
product.init();
