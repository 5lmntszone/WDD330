export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;  
  const urlParams = new URLSearchParams(queryString);  
  return urlParams.get(param);                     
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  if (clear) {
    parentElement.innerHTML = "";
  }

  const htmlStrings = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}

export async function loadTemplate(path) {
  const response = await fetch(path);
  const template = await response.text();
  return template;
}

export async function loadHeaderFooter() {
  const base = window.location.pathname.includes("cart") ||
               window.location.pathname.includes("product_pages") ||
               window.location.pathname.includes("product_listing")
    ? "../"
    : "./";

    const headerTemplate = await loadTemplate(`${base}partials/header.html`);
    const headerElement = document.querySelector("#main-header");
    const adjustedHeader = headerTemplate
      .replace(/src="\.\//g, `src="${base}`)
      .replace(/href="\.\//g, `href="${base}`);
    renderWithTemplate(adjustedHeader, headerElement);
  
    const footerTemplate = await loadTemplate(`${base}partials/footer.html`);
    const footerElement = document.querySelector("#main-footer");
    renderWithTemplate(footerTemplate, footerElement);
  }

export function bumpCartIcon() {
    const icon = document.querySelector('#cart-icon');
    if (!icon) return;
    icon.classList.remove('bump');
    void icon.offsetWidth; 
    icon.classList.add('bump');
    icon.addEventListener('animationend', () => {
      icon.classList.remove('bump');
    }, { once: true });
}  