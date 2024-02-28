import{s as I,a as M,b as A,i as h,d as H,c as P}from"./assets/support-ua-52d384a1.js";import{a as l}from"./assets/vendor-0cb09735.js";class S{async fetchCategories(){try{return(await l.get("https://books-backend.p.goit.global/books/category-list")).data}catch(t){throw console.error("Error fetching categories:",t),t}}async fetchTopCategories(){try{return(await l.get("https://books-backend.p.goit.global/books/top-books")).data}catch(t){throw console.error("Error fetching top categories:",t),t}}async fetchBooksByCategory(t){try{return(await l.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data}catch(o){throw console.error("Error fetching books by category:",o),o}}async fetchBookById(t){try{return(await l.get(`https://books-backend.p.goit.global/books/${t}`)).data}catch(o){throw console.error("Error fetching book by ID:",o),o}}}const w=document.querySelector(".category-list"),i=document.querySelector(".gallery-list"),O=document.querySelector("#all-categories"),k=document.querySelector(".category-title"),y=document.querySelector(".title-wrapper"),b=document.querySelector(".backdrop-loader"),f=document.querySelector(".loader"),g=new S;async function _(){try{const e=await g.fetchCategories();D(e)}catch(e){console.log("Failed to render show category list:",e)}}_();async function m(){C();try{d(!0);const e=await g.fetchTopCategories();d(!1);for(let o=0;o<4;o++)F(e[o]);document.querySelector(".category-list-item").classList.add("active")}catch(e){console.error("Failed to fetch all categories:",e)}document.querySelectorAll(".see-more-btn").forEach(e=>e.addEventListener("click",E))}m();function D(e){const t=e.map(({list_name:o})=>`
        <li class="category-list-item">
            <h4 class="category-name">${o}</h4>
        </li>`).join("");w.innerHTML+=t}function L(e){return e.map(({_id:o,book_image:s,author:r,title:n})=>`
        <li class="gallery-item" id="${o}">
            <div class="book-image-container">
              <img src="${s}" alt="${n}" class="book-cover" loading="lazy"/>
              <p class="quick-view-info">Quick view</p>
            </div>
            <h3 class="book-title">${v(n)}</h3>
            <h5 class="book-author">${v(r)}</h5>
        </li>`).join("")}function F(e){T("Best Sellers Books"),y.style.display="flex";const{list_name:o,books:s}=e,r=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${o}</h3>
        <ul class="gallery-list-item">
          ${L(s)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>`;i.innerHTML+=r}function N(e){const t=e[0].list_name;T(t);const o=L(e);i.innerHTML=o}async function E(e){const t=e.target.closest("li").children[0].textContent;try{d(!0),i.innerHTML="",y.style.display="none";const o=await g.fetchBooksByCategory(t);o.length!=0?(d(!1),i.style.cssText="flex-direction: row; flex-wrap: wrap",y.style.display="flex",N(o),C()):m(),e.target.closest("li").classList.add("active")}catch(o){console.error("Failed to render page by category:",o)}}function v(e){return e.length>=15?`${e.slice(0,15)}...`:e}function T(e){let t=e.split(" ");const o=t[t.length-1];t=t.slice(0,t.length-1);const s=t.join(" ");k.textContent=`${s}`,k.nextElementSibling.textContent=`${o}`}function C(){document.querySelectorAll(".category-list-item").forEach(e=>e.classList.remove("active"))}function d(e){e?(f.classList.remove("hidden"),b.classList.remove("hidden")):(f.classList.add("hidden"),b.classList.add("hidden"))}w.addEventListener("click",E);O.addEventListener("click",m);const z=new S,x=document.querySelector("body");document.querySelector(".gallery-list").addEventListener("click",async e=>{const t=e.target.closest("li").getAttribute("id"),o=await z.fetchBookById(t);G(o);const s=document.querySelector(".backdrop"),r=document.querySelector(".close-modal");x.style.overflow="hidden",r.addEventListener("click",u),s.addEventListener("click",q),document.addEventListener("keydown",$)});async function G(e){const t=`<div class="backdrop">
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="${I}#icon-x-close"></use>
      </svg>
    </button>

    <div class="desctop">
      <img src="${e.book_image}" alt="${e.title}" class="img-modal" />
      <div class="lauch">
        <div class="tittle-books">
          <h2 class="boock-name">${e.title}</h2>
          <p class="author">${e.author}</p>
        </div>

        <p class="about-book">
         ${e.description}
        </p>

        <ul class="sale-place">
          <li>
            <a href="${e.amazon_product_url}" target="_blank"
              ><img

                class="amazon-link"
                              
                src="${M}"

                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${e.book_uri}" target="_blank"
              ><img

                class="apple-link"
                               
                src="${A}"

                alt="amazon"
                width="33"
                height="32"
            /></a>
          </li>
        </ul>
      </div>
    </div>

    <button class="add-lokalstorage" type="button"></button>
    <p class="congrat"></p>
  </div>
</div>
`;document.querySelector("main").insertAdjacentHTML("beforeend",t);const s=document.querySelector(".add-lokalstorage"),r=document.querySelector(".congrat");function n(){const c=h(e._id),a=c?"REMOVE FROM THE SHOPPING LIST":"ADD TO SHOPPING LIST",B=`Congratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".`;r.textContent=B,c?r.style.display="block":r.style.display="none",s.textContent=a;const p=document.querySelector(".modal");document.querySelector(".desctop"),window.innerWidth<768&&(a==="ADD TO SHOPPING LIST"?(s.style.left="62px",s.style.top="695px"):a==="REMOVE FROM THE SHOPPING LIST"&&(s.style.padding="14px 23px 14px 23px")),window.innerWidth>=769&&(a==="ADD TO SHOPPING LIST"?p.style.height="465px":a==="REMOVE FROM THE SHOPPING LIST"&&(p.style.height="501px"))}n(),s.addEventListener("click",c=>{c.preventDefault();const a=h(e._id);console.log(a),a?H(e._id):P(e),n()})}function u(){R(),document.querySelector(".backdrop").remove()}function R(){const e=document.querySelector(".backdrop"),t=document.querySelector(".close-modal");x.style.overflow="visible",t.removeEventListener("click",u),e.removeEventListener("click",q),document.removeEventListener("keydown",$)}function q(e){const t=document.querySelector(".backdrop");e.target===t&&u()}function $(e){e.key==="Escape"&&u()}
//# sourceMappingURL=commonHelpers.js.map
