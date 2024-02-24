/* empty css                      */import{a as l}from"./assets/vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const f=document.querySelector(".category-list"),c=document.querySelector(".gallery-list"),L=document.querySelector("#all-categories"),h=document.querySelector(".category-title");async function S(){return await l.get("https://books-backend.p.goit.global/books/category-list")}async function v(){return await l.get("https://books-backend.p.goit.global/books/top-books")}async function C(e){return await l.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function q(){const e=await S();w(e.data)}async function u(){const e=await v();for(let o=0;o<4;o++)M(e.data[o])}q();u();function w(e){const o=e.map(({list_name:s})=>`
      <li class="category-list-item">
				<h4 class="category-name">${s}</h4>
			</li>
    `).join("");f.innerHTML+=o}function $(e){return e.map(({book_image:s,author:n,title:t})=>`
        <li class="gallery-item">
            <div class="ig-wrapper">
                <img src="${s}" alt="" class="book-cover" />
            </div>
            <h3 class="book-title">${i(t)}</h3>
            <h5 class="book-author">${i(n)}</h5>
        </li>`).join("")}function M(e){h.textContent="Best Sellers Books";const{list_name:o,books:s}=e,n=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${o}</h3>
        <ul class="gallery-list-item">
          ${$(s)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>
  `;c.innerHTML+=n}function T(e){h.textContent=e[0].list_name,console.log(e);const o=e.map(({book_image:s,title:n,author:t})=>`
        <li class="gallery-item">
          <img src="${s}" alt="${n}" class="book-cover" />
          <h3 class="book-title">${i(n)}</h3>
          <h5 class="book-author">${i(t)}</h5>
        </li>`).join("");c.innerHTML=o}async function x(e){if(e.target===e.currentTarget)return;const o=e.target.textContent;try{const s=await C(o);c.innerHTML="",s.data.length!=0?(c.style.cssText="flex-direction: row; flex-wrap: wrap",T(s.data)):u()}catch(s){console.log(s)}}function i(e){return e.length>=16?`${e.slice(0,16)}...`:e}f.addEventListener("click",x);L.addEventListener("click",u);const b=document.querySelector("#theme"),y=document.body,g=document.querySelector("header"),p=[document.querySelector(".icon-menu"),document.querySelector(".icon-logo"),document.querySelector(".nav-shopping"),document.querySelector(".shopping-icon"),document.querySelector(".icon-close")];b.addEventListener("click",E);function E(){b.checked?(p.forEach(e=>e.classList.add("dark-icons")),y.classList.add("dark-mode-body"),g.classList.add("dark-mode")):(p.forEach(e=>e.classList.remove("dark-icons")),y.classList.remove("dark-mode-body"),g.classList.remove("dark-mode"))}const d=document.querySelector(".btn-close"),m=document.querySelector(".btn-menu");m.addEventListener("click",O);const k=document.querySelector(".menu-section");d.addEventListener("click",B);function B(){k.classList.remove("is-open"),m.classList.remove("hidden"),d.classList.add("hidden")}function O(){k.classList.add("is-open"),m.classList.add("hidden"),d.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
