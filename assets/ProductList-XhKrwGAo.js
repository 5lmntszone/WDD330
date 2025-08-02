import{r as s}from"./utils-D6Usc3I_.js";function i(a){return`<li class="product-card">
    <a href="../product_pages/index.html?product=${a.Id}">
      <img src="${a.Images.PrimaryMedium}" alt="Image of ${a.Name}">
      <h2 class="card__brand">${a.Brand.Name}</h2>
      <h3 class="card__name">${a.NameWithoutBrand}</h3>
      <p class="product-card__price">$${a.FinalPrice}</p>
    </a>
  </li>`}class n{constructor(t,e,r){this.category=t,this.dataSource=e,this.listElement=r}async init(){const t=await this.dataSource.getData(this.category);this.renderList(t)}renderList(t){s(i,this.listElement,t,"afterbegin",!0)}}export{n as P};
