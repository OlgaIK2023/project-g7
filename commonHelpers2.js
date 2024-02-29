import{l as n,s as k,a as b,b as g,d as u}from"./assets/support-ua-7b0b263d.js";const $="/project-g7/assets/IMG_9606 1-0439e3af.png",e=document.querySelector(".shopping-list"),v=n();function c(t){e.innerHTML="";const i=`<p class="empty">This page is empty, add some books and proceed to order.</p>
        <img
        class="no-book"
        src="${$}"
        alt="Book"
        />`,r=t.map(({book_image:s,title:o,author:a,_id:l,description:p,list_name:d,amazon_product_url:m,book_uri:h})=>`<li class="one-book">
            <img
                class="img-book"
                src="${s}"
                alt="Book"
            />
            <div class="discription">
                <div class="up-part">
                <h2 class="book-name">${o}</h2>

                <button data-id="${l}" class="basket" type="button">
                    <svg class="trash" width="16" height="16">
                    <use href="${k}#icon-trash-031"></use>
                    </svg>
                </button>
                </div>
                <h3 class="type-name">${d}</h3>
                <p class="text-discription">
                ${p}
                </p>

                <div class="book-app">
                <h3 class="name-author">${a}</h3>
                <a href="${m}" target="_blank"><img class="amazon" src="${b}" alt="amazon" /></a>
                <a href="${h}" target="_blank"><img class="apple" src="${g}" alt="apple" /></a>
                </div>
            </div>
            </li>`).join("");e.innerHTML=t.length>0?r:i,document.querySelectorAll(".shopping-list .basket").forEach(s=>{const o=s.getAttribute("data-id");s.addEventListener("click",()=>{u(o);const a=n();c(a)})})}c(v);
//# sourceMappingURL=commonHelpers2.js.map
