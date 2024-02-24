import"./assets/themechange-85841449.js";import{a as c}from"./assets/vendor-0cb09735.js";const g=document.querySelector(".category-list"),n=document.querySelector(".gallery-list"),y=document.querySelector("#all-categories"),m=document.querySelector(".category-title");async function p(){return await c.get("https://books-backend.p.goit.global/books/category-list")}async function b(){return await c.get("https://books-backend.p.goit.global/books/top-books")}async function h(e){return await c.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function k(){const e=await p();f(e.data)}async function i(){const e=await b();for(let t=0;t<4;t++)C(e.data[t])}k();i();function f(e){const t=e.map(({list_name:o})=>`
      <li class="category-list-item">
				<h4 class="category-name">${o}</h4>
			</li>
    `).join("");g.innerHTML+=t}function L(e){return e.map(({book_image:o,author:s,title:a})=>`
        <li class="gallery-item">
            <div class="ig-wrapper">
                <img src="${o}" alt="" class="book-cover" />
            </div>
            <h3 class="book-title">${r(a)}</h3>
            <h5 class="book-author">${r(s)}</h5>
        </li>`).join("")}function C(e){m.textContent="Best Sellers Books";const{list_name:t,books:o}=e,s=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${t}</h3>
        <ul class="gallery-list-item">
          ${L(o)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>
  `;n.innerHTML+=s}function w(e){m.textContent=e[0].list_name,console.log(e);const t=e.map(({book_image:o,title:s,author:a})=>`
        <li class="gallery-item">
          <img src="${o}" alt="${s}" class="book-cover" />
          <h3 class="book-title">${r(s)}</h3>
          <h5 class="book-author">${r(a)}</h5>
        </li>`).join("");n.innerHTML=t}async function S(e){if(e.target===e.currentTarget)return;const t=e.target.textContent;try{const o=await h(t);n.innerHTML="",o.data.length!=0?(n.style.cssText="flex-direction: row; flex-wrap: wrap",w(o.data)):i()}catch(o){console.log(o)}}function r(e){return e.length>=16?`${e.slice(0,16)}...`:e}g.addEventListener("click",S);y.addEventListener("click",i);const l=document.querySelector(".btn-close"),u=document.querySelector(".btn-menu");u.addEventListener("click",v);const d=document.querySelector(".menu-section");l.addEventListener("click",$);function $(){d.classList.remove("is-open"),u.classList.remove("hidden"),l.classList.add("hidden")}function v(){d.classList.add("is-open"),u.classList.add("hidden"),l.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
