import{a as l}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const k=document.querySelector(".category-list"),c=document.querySelector(".gallery-list"),v=document.querySelector("#all-categories"),b=document.querySelector(".category-title");async function C(){return await l.get("https://books-backend.p.goit.global/books/category-list")}async function S(){return await l.get("https://books-backend.p.goit.global/books/top-books")}async function w(e){return await l.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function q(){const e=await C();$(e.data)}async function u(){const e=await S();for(let t=0;t<4;t++)x(e.data[t])}q();u();function $(e){const t=e.map(({list_name:s})=>`
      <li class="category-list-item">
				<h4 class="category-name">${s}</h4>
			</li>
    `).join("");k.innerHTML+=t}function T(e){return e.map(({book_image:s,author:n,title:o})=>`
        <li class="gallery-item">
            <div class="ig-wrapper">
                <img src="${s}" alt="" class="book-cover" />
            </div>
            <h3 class="book-title">${a(o)}</h3>
            <h5 class="book-author">${a(n)}</h5>
        </li>`).join("")}function x(e){b.textContent="Best Sellers Books";const{list_name:t,books:s}=e,n=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${t}</h3>
        <ul class="gallery-list-item">
          ${T(s)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>
  `;c.innerHTML+=n}function B(e){b.textContent=e[0].list_name,console.log(e);const t=e.map(({book_image:s,title:n,author:o})=>`
        <li class="gallery-item">
          <img src="${s}" alt="${n}" class="book-cover" />
          <h3 class="book-title">${a(n)}</h3>
          <h5 class="book-author">${a(o)}</h5>
        </li>`).join("");c.innerHTML=t}async function O(e){if(e.target===e.currentTarget)return;const t=e.target.textContent;try{const s=await w(t);c.innerHTML="",s.data.length!=0?(c.style.cssText="flex-direction: row; flex-wrap: wrap",B(s.data)):u()}catch(s){console.log(s)}}function a(e){return e.length>=16?`${e.slice(0,16)}...`:e}k.addEventListener("click",O);v.addEventListener("click",u);const L=document.querySelector("#theme"),d=document.querySelector(".icon-menu"),m=document.querySelector(".icon-logo"),g=document.querySelector(".nav-shopping"),y=document.querySelector(".shopping-icon"),p=document.body,f=document.querySelector("header"),h=document.querySelector(".icon-close");L.addEventListener("click",M);function M(){L.checked?(y.classList.add("dark-icons"),g.classList.add("dark-icons"),h.classList.add("dark-icons"),m.classList.add("dark-icons"),d.classList.add("dark-menu"),p.classList.add("dark-mode-body"),f.classList.add("dark-mode")):(y.classList.remove("dark-icons"),g.classList.remove("dark-icons"),h.classList.remove("dark-icons"),m.classList.remove("dark-icons"),d.classList.remove("dark-menu"),p.classList.remove("dark-mode-body"),f.classList.remove("dark-mode"))}
//# sourceMappingURL=commonHelpers.js.map
