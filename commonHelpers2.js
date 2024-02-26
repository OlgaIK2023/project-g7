import{l as i,d as h}from"./assets/main-f89527ea.js";const e=document.querySelector(".shopping-list"),k=i();function n(t){e.innerHTML="";const c=`<p>This page is empty, add some books and proceed to order.</p>
        <img
        class="no-book"
        src="../img/IMG_9606 1.png"
        alt="Book"
        />`,l=t.map(({book_image:s,title:o,author:a,_id:r,description:p,list_name:d,amazon_product_url:m,book_uri:g})=>`<li class="one-book">
            <img
                class="img-book"
                src="${s}"
                alt="Book"
            />
            <div class="discription">
                <div class="up-part">
                <h2 class="book-name">${o}</h2>

                <button data-id="${r}" class="basket" type="button">
                    <svg class="trash" width="16" height="16">
                    <use href="./img/icons.svg#icon-trash-031"></use>
                    </svg>
                </button>
                </div>
                <h3 class="type-name">${d}</h3>
                <p class="text-discription">
                ${p}
                </p>

                <div class="book-app">
                <h3 class="name-author">${a}</h3>
                <a href="${m}" target="_blank"><img class="amazon" src="./img/amazon.png" alt="amazon" /></a>
                <a href="${g}" target="_blank"><img class="apple" src="./img/apple.png" alt="apple" /></a>
                </div>
            </div>
            </li>`).join("");e.innerHTML=t.length>0?l:c,document.querySelectorAll(".shopping-list .basket").forEach(s=>{const o=s.getAttribute("data-id");s.addEventListener("click",()=>{h(o);const a=i();n(a)})})}n(k);
//# sourceMappingURL=commonHelpers2.js.map
