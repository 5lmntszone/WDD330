import{r as c,l as o,a as n}from"./utils-CLGUA250.js";import{P as d}from"./ProductData-41W_5H-H.js";function l(t){return`<li class="product-card">
    <a href="../product_pages/index.html?product=${t.Id}">
      <img src="${t.Images.PrimaryMedium}" alt="Image of ${t.Name}">
      <h2 class="card__brand">${t.Brand.Name}</h2>
      <h3 class="card__name">${t.NameWithoutBrand}</h3>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class m{constructor(e,s,i){this.category=e,this.dataSource=s,this.listElement=i}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e)}renderList(e){c(l,this.listElement,e,"afterbegin",!0)}}o();const r=n("category")||"tents",u=new d,h=document.querySelector(".product-list"),g=new m(r,u,h);g.init();const a=document.querySelector("h2");a&&(a.textContent=`Top Products: ${r}`);
