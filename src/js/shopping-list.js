import { deleteFromLS, loadFromLS } from "./local-storage";
const shoppingList = document.querySelector('.shopping-list');
const books = loadFromLS();


function renderShopList(data) {
    shoppingList.innerHTML = '';
    const defaultMarkup = '';
    const markup = data
        .map(({ book_image, title, author, _id, description, list_name, amazon_product_url, book_uri }) => {
        return `<li class="one-book">
            <img
                class="img-book"
                src="${book_image}"
                alt="Book"
            />
            <div class="discription">
                <div class="up-part">
                <h2 class="book-name">${title}</h2>

                <button data-id="${_id}" class="basket" type="button">
                    <svg class="trash" width="16" height="16">
                    <use href="./img/icons.svg#icon-trash-031"></use>
                    </svg>
                </button>
                </div>
                <h3 class="type-name">${list_name}</h3>
                <p class="text-discription">
                ${description}
                </p>

                <div class="book-app">
                <h3 class="name-author">${author}</h3>
                <a href="${amazon_product_url}" target="_blank"><img class="amazon" src="./img/amazon.png" alt="amazon" /></a>
                <a href="${book_uri}" target="_blank"><img class="apple" src="./img/apple.png" alt="apple" /></a>
                </div>
            </div>
            </li>`;
        })
            .join('');
    
    shoppingList.innerHTML = markup;
    
    const booksItems = document.querySelectorAll('.shopping-list .basket');

    booksItems.forEach(item => {
        const bookId = item.getAttribute('data-id');
        item.addEventListener('click', () => { 
            deleteFromLS(bookId);
            const updatedBooks = loadFromLS();
            renderShopList(updatedBooks);
        })
    });
}

renderShopList(books)
