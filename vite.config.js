import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  base: "/WDD330/", 

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/cart/checkout.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        productListing: resolve(__dirname, "src/product_listing/index.html"),
      },
    },
  },
});
