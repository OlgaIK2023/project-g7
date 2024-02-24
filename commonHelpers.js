import"./assets/themechange-4542c9a0.js";import{a as l}from"./assets/vendor-0cb09735.js";const g=document.querySelector(".category-list"),r=document.querySelector(".gallery-list"),L=document.querySelector("#all-categories"),y=document.querySelector(".category-title");async function f(){return await l.get("https://books-backend.p.goit.global/books/category-list")}async function v(){return await l.get("https://books-backend.p.goit.global/books/top-books")}async function C(e){return await l.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function w(){const e=await f();S(e.data)}async function u(){const e=await v();for(let t=0;t<4;t++)M(e.data[t])}w();u();function S(e){const t=e.map(({list_name:o})=>`
      <li class="category-list-item">
				<h4 class="category-name">${o}</h4>
			</li>
    `).join("");g.innerHTML+=t}function E(e){return e.map(({book_image:o,author:n,title:i})=>`
        <li class="gallery-item">
            <div class="ig-wrapper">
                <img src="${o}" alt="" class="book-cover" />
            </div>
            <h3 class="book-title">${c(i)}</h3>
            <h5 class="book-author">${c(n)}</h5>
        </li>`).join("")}function M(e){y.textContent="Best Sellers Books";const{list_name:t,books:o}=e,n=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${t}</h3>
        <ul class="gallery-list-item">
          ${E(o)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>
  `;r.innerHTML+=n}function $(e){y.textContent=e[0].list_name,console.log(e);const t=e.map(({book_image:o,title:n,author:i})=>`
        <li class="gallery-item">
          <img src="${o}" alt="${n}" class="book-cover" />
          <h3 class="book-title">${c(n)}</h3>
          <h5 class="book-author">${c(i)}</h5>
        </li>`).join("");r.innerHTML=t}async function q(e){if(e.target===e.currentTarget)return;const t=e.target.textContent;try{const o=await C(t);r.innerHTML="",o.data.length!=0?(r.style.cssText="flex-direction: row; flex-wrap: wrap",$(o.data)):u()}catch(o){console.log(o)}}function c(e){return e.length>=16?`${e.slice(0,16)}...`:e}g.addEventListener("click",q);L.addEventListener("click",u);const s=document.querySelector(".backdrop"),p=document.querySelector(".close-modal");function a(){s.classList.add("close"),x()}function x(){p.removeEventListener("click",a),s.removeEventListener("click",k),document.removeEventListener("keydown",b)}function k(e){e.target===s&&a()}function b(e){e.key==="Escape"&&!s.classList.contains("close")&&a()}p.addEventListener("click",a);s.addEventListener("click",k);document.addEventListener("keydown",b);const d=document.querySelector(".btn-close"),m=document.querySelector(".btn-menu");m.addEventListener("click",B);const h=document.querySelector(".menu-section");d.addEventListener("click",T);function T(){h.classList.remove("is-open"),m.classList.remove("hidden"),d.classList.add("hidden")}function B(){h.classList.add("is-open"),m.classList.add("hidden"),d.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
