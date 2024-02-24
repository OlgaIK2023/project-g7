import{a as u}from"./vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const L=document.querySelector(".category-list"),a=document.querySelector(".gallery-list"),E=document.querySelector("#all-categories"),b=document.querySelector(".category-title");async function M(){return await u.get("https://books-backend.p.goit.global/books/category-list")}async function $(){return await u.get("https://books-backend.p.goit.global/books/top-books")}async function T(e){return await u.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function x(){const e=await M();B(e.data)}async function m(){const e=await $();for(let t=0;t<4;t++)O(e.data[t])}x();m();function B(e){const t=e.map(({list_name:s})=>`
      <li class="category-list-item">
				<h4 class="category-name">${s}</h4>
			</li>
    `).join("");L.innerHTML+=t}function H(e){return e.map(({book_image:s,author:r,title:o})=>`
        <li class="gallery-item">
            <div class="ig-wrapper">
                <img src="${s}" alt="" class="book-cover" />
            </div>
            <h3 class="book-title">${i(o)}</h3>
            <h5 class="book-author">${i(r)}</h5>
        </li>`).join("")}function O(e){b.textContent="Best Sellers Books";const{list_name:t,books:s}=e,r=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${t}</h3>
        <ul class="gallery-list-item">
          ${H(s)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>
  `;a.innerHTML+=r}function N(e){b.textContent=e[0].list_name,console.log(e);const t=e.map(({book_image:s,title:r,author:o})=>`
        <li class="gallery-item">
          <img src="${s}" alt="${r}" class="book-cover" />
          <h3 class="book-title">${i(r)}</h3>
          <h5 class="book-author">${i(o)}</h5>
        </li>`).join("");a.innerHTML=t}async function P(e){if(e.target===e.currentTarget)return;const t=e.target.textContent;try{const s=await T(t);a.innerHTML="",s.data.length!=0?(a.style.cssText="flex-direction: row; flex-wrap: wrap",N(s.data)):m()}catch(s){console.log(s)}}function i(e){return e.length>=16?`${e.slice(0,16)}...`:e}L.addEventListener("click",P);E.addEventListener("click",m);const v=document.querySelector("#theme"),p=document.body,f=document.querySelector(".homepage");document.querySelectorAll(".see-more-btn");const h=document.querySelector("header"),k=[document.querySelector(".icon-menu"),document.querySelector(".icon-logo"),document.querySelector(".nav-shopping"),document.querySelector(".shopping-icon"),document.querySelector(".icon-close")];v.addEventListener("click",j);function j(){v.checked?(k.forEach(e=>e.classList.add("dark-icons")),f.classList.add("dark-mode-body"),p.classList.add("dark-mode-body"),h.classList.add("dark-mode-header")):(k.forEach(e=>e.classList.remove("dark-icons")),p.classList.remove("dark-mode-body"),h.classList.remove("dark-mode-header"),f.classList.remove("dark-mode-body"))}const c=document.querySelector(".backdrop"),S=document.querySelector(".close-modal");function l(){c.classList.add("close"),A()}function A(){S.removeEventListener("click",l),c.removeEventListener("click",q),document.removeEventListener("keydown",C)}function q(e){e.target===c&&l()}function C(e){e.key==="Escape"&&!c.classList.contains("close")&&l()}S.addEventListener("click",l);c.addEventListener("click",q);document.addEventListener("keydown",C);const y=document.querySelector(".btn-close"),g=document.querySelector(".btn-menu");g.addEventListener("click",F);const w=document.querySelector(".menu-section");y.addEventListener("click",_);function _(){w.classList.remove("is-open"),g.classList.remove("hidden"),y.classList.add("hidden")}function F(){w.classList.add("is-open"),g.classList.add("hidden"),y.classList.remove("hidden")}
//# sourceMappingURL=main-6dd5bb66.js.map
