import{a as u}from"./vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const v=document.querySelector(".category-list"),i=document.querySelector(".gallery-list"),m=document.querySelector("#all-categories"),f=document.querySelector(".category-title");async function T(){return await u.get("https://books-backend.p.goit.global/books/category-list")}async function M(){return await u.get("https://books-backend.p.goit.global/books/top-books")}async function x(e){return await u.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function B(){const e=await T();H(e.data)}async function y(){const e=await M();for(let t=0;t<4;t++)N(e.data[t])}m.classList.add("all");y();B();function H(e){const t=e.map(({list_name:n})=>`
        <li class="category-list-item">
            <h4 class="category-name">${n}</h4>
        </li>`).join("");v.innerHTML+=t}function O(e){return e.map(({_id:n,book_image:r,author:o,title:s})=>`
        <li class="gallery-item" id="${n}">
            <div class="ig-wrapper">
                <img src="${r}" alt="" class="book-cover" />
            </div>
            <h3 class="book-title">${l(s)}</h3>
            <h5 class="book-author">${l(o)}</h5>
        </li>`).join("")}function N(e){m.classList.add("all"),S("Best Sellers Books");const{_id:n,list_name:r,books:o}=e,s=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${r}</h3>
        <ul class="gallery-list-item">
          ${O(o)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>
  `;i.innerHTML+=s}function P(e){const t=e[0].list_name;S(t);const n=e.map(({_id:r,book_image:o,title:s,author:c})=>`
        <li class="gallery-item" id="${r}">
          <img src="${o}" alt="${s}" class="book-cover" />
          <h3 class="book-title">${l(s)}</h3>
          <h5 class="book-author">${l(c)}</h5>
        </li>`).join("");i.innerHTML=n}async function j(e){if(e.target===e.currentTarget)return;const t=e.target.textContent;try{const n=await x(t);i.innerHTML="",n.data.length!=0?(i.style.cssText="flex-direction: row; flex-wrap: wrap",P(n.data)):y()}catch(n){console.log(n)}}function l(e){return e.length>=15?`${e.slice(0,15)}...`:e}function S(e){let t=e.split(" ");const n=t[t.length-1];t=t.slice(0,t.length-1);const r=t.join(" ");f.textContent=`${r}`,f.nextElementSibling.textContent=`${n}`}v.addEventListener("click",j);m.addEventListener("click",y);const C=document.querySelector("#theme"),h=document.body,k=document.querySelector(".homepage");document.querySelectorAll(".see-more-btn");const L=document.querySelector("header"),b=[document.querySelector(".icon-menu"),document.querySelector(".icon-logo"),document.querySelector(".nav-shopping"),document.querySelector(".shopping-icon"),document.querySelector(".icon-close")];C.addEventListener("click",W);function W(){C.checked?(b.forEach(e=>e.classList.add("dark-icons")),k.classList.add("dark-mode-body"),h.classList.add("dark-mode-body"),L.classList.add("dark-mode-header")):(b.forEach(e=>e.classList.remove("dark-icons")),h.classList.remove("dark-mode-body"),L.classList.remove("dark-mode-header"),k.classList.remove("dark-mode-body"))}const a=document.querySelector(".backdrop"),q=document.querySelector(".close-modal");function d(){a.classList.add("close"),A()}function A(){q.removeEventListener("click",d),a.removeEventListener("click",w),document.removeEventListener("keydown",E)}function w(e){e.target===a&&d()}function E(e){e.key==="Escape"&&!a.classList.contains("close")&&d()}q.addEventListener("click",d);a.addEventListener("click",w);document.addEventListener("keydown",E);const g=document.querySelector(".btn-close"),p=document.querySelector(".btn-menu");p.addEventListener("click",F);const $=document.querySelector(".menu-section");g.addEventListener("click",_);function _(){$.classList.remove("is-open"),p.classList.remove("hidden"),g.classList.add("hidden")}function F(){$.classList.add("is-open"),p.classList.add("hidden"),g.classList.remove("hidden")}
//# sourceMappingURL=main-6c43569a.js.map
