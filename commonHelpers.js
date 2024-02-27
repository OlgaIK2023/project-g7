import{s as B,a as I,b as M,i as h,d as A,c as H}from"./assets/support-ua-67923f39.js";import{a as i}from"./assets/vendor-0cb09735.js";class S{async fetchCategories(){try{return(await i.get("https://books-backend.p.goit.global/books/category-list")).data}catch(t){throw console.error("Error fetching categories:",t),t}}async fetchTopCategories(){try{return(await i.get("https://books-backend.p.goit.global/books/top-books")).data}catch(t){throw console.error("Error fetching top categories:",t),t}}async fetchBooksByCategory(t){try{return(await i.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data}catch(o){throw console.error("Error fetching books by category:",o),o}}async fetchBookById(t){try{return(await i.get(`https://books-backend.p.goit.global/books/${t}`)).data}catch(o){throw console.error("Error fetching book by ID:",o),o}}}const w=document.querySelector(".category-list"),d=document.querySelector(".gallery-list"),P=document.querySelector("#all-categories"),k=document.querySelector(".category-title"),g=document.querySelector(".title-wrapper"),b=document.querySelector(".backdrop-loader"),f=document.querySelector(".loader"),m=new S;async function O(){try{const e=await m.fetchCategories();_(e)}catch(e){console.log("Failed to render show category list:",e)}}O();async function p(){x();try{u(!0);const e=await m.fetchTopCategories();u(!1);for(let o=0;o<4;o++)D(e[o]);document.querySelector(".category-list-item").classList.add("active")}catch(e){console.error("Failed to fetch all categories:",e)}document.querySelectorAll(".see-more-btn").forEach(e=>e.addEventListener("click",T))}p();function _(e){const t=e.map(({list_name:o})=>`
        <li class="category-list-item">
            <h4 class="category-name">${o}</h4>
        </li>`).join("");w.innerHTML+=t}function L(e){return e.map(({_id:o,book_image:s,author:a,title:n})=>`
        <li class="gallery-item" id="${o}">
            <div class="book-image-container">
              <img src="${s}" alt="${n}" class="book-cover" loading="lazy"/>
              <p class="quick-view-info">Quick view</p>
            </div>
            <h3 class="book-title">${v(n)}</h3>
            <h5 class="book-author">${v(a)}</h5>
        </li>`).join("")}function D(e){E("Best Sellers Books"),g.style.display="flex";const{list_name:o,books:s}=e,a=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${o}</h3>
        <ul class="gallery-list-item">
          ${L(s)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>`;d.innerHTML+=a}function F(e){const t=e[0].list_name;E(t);const o=L(e);d.innerHTML=o}async function T(e){const t=e.target.closest("li").children[0].textContent;try{u(!0),d.innerHTML="",g.style.display="none";const o=await m.fetchBooksByCategory(t);o.length!=0?(u(!1),d.style.cssText="flex-direction: row; flex-wrap: wrap",g.style.display="flex",F(o),x()):p(),e.target.closest("li").classList.add("active")}catch(o){console.error("Failed to render page by category:",o)}}function v(e){return e.length>=15?`${e.slice(0,15)}...`:e}function E(e){let t=e.split(" ");const o=t[t.length-1];t=t.slice(0,t.length-1);const s=t.join(" ");k.textContent=`${s}`,k.nextElementSibling.textContent=`${o}`}function x(){document.querySelectorAll(".category-list-item").forEach(e=>e.classList.remove("active"))}function u(e){e?(f.classList.remove("hidden"),b.classList.remove("hidden")):(f.classList.add("hidden"),b.classList.add("hidden"))}w.addEventListener("click",T);P.addEventListener("click",p);const N=new S;document.querySelector(".gallery-list").addEventListener("click",async e=>{const t=e.target.parentNode.getAttribute("id"),o=await N.fetchBookById(t);W(o);const s=document.querySelector(".backdrop");document.querySelector(".close-modal").addEventListener("click",y),s.addEventListener("click",C),document.addEventListener("keydown",$)});async function W(e){const t=`<div class="backdrop">
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="${B}#icon-x-close"></use>
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
                              
                src="${I}"

                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${e.book_uri}" target="_blank"
              ><img

                class="apple-link"
                               
                src="${M}"

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
`;document.querySelector("main").insertAdjacentHTML("beforeend",t);const s=document.querySelector(".add-lokalstorage"),a=document.querySelector(".congrat");function n(){const c=h(e._id),r=c?"REMOVE FROM THE SHOPPING LIST":"ADD TO SHOPPING LIST",q=c?`Congratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".`:"";s.textContent=r,a.textContent=q;const l=document.querySelector(".modal");document.querySelector(".desctop"),window.innerWidth<768&&(r==="ADD TO SHOPPING LIST"?(s.style.width="211px",s.style.left="62px",s.style.top="695px",l.style.height="762px"):r==="REMOVE FROM THE SHOPPING LIST"&&(s.style.width="279px",s.style.position="absolute",s.style.left="28px",s.style.top="700px",l.style.height="806px")),window.innerWidth>=769&&(r==="ADD TO SHOPPING LIST"?l.style.height="465px":r==="REMOVE FROM THE SHOPPING LIST"&&(l.style.height="501px"))}n(),s.addEventListener("click",c=>{c.preventDefault();const r=h(e._id);console.log(r),r?A(e._id):H(e),n()})}function y(){z(),document.querySelector(".backdrop").remove()}function z(){const e=document.querySelector(".backdrop");document.querySelector(".close-modal").removeEventListener("click",y),e.removeEventListener("click",C),document.removeEventListener("keydown",$)}function C(e){const t=document.querySelector(".backdrop");e.target===t&&y()}function $(e){e.key==="Escape"&&y()}
//# sourceMappingURL=commonHelpers.js.map
