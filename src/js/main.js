import { loadHeaderFooter } from "./utils.mjs";
import Alert from "./Alert.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter();

  const alerts = new Alert('./json/alerts.json');
  alerts.init();
});
