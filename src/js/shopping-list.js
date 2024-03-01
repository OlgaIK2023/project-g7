import { deleteFromLS, loadFromLS } from "./local-storage";

import amazonIcon from '../img/amazon.png';
import appleIcon from '../img/apple.png';
import sprite from '../img/icons.svg';
import booksIcon from '../img/IMG_9606 1.png';

const shoppingList = document.querySelector('.shopping-list');
const books = loadFromLS();


export function renderShopList(data) {
    shoppingList.innerHTML = '';
    const defaultMarkup = `<div class="empty-wrapper">
    <p class="empty">This page is empty, add some books and proceed to order.</p>
        <img
        class="no-book"
        src="${booksIcon}"
        alt="Book"
        />
    </div>`
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
                    <h2 class="book-name">${isCorrectNameLength(title)}</h2>

                    <button data-id="${_id}" class="basket" type="button">
                        <svg class="trash" width="16" height="16">
                        <use href="${sprite}#icon-trash-031"></use>
                        </svg>
                    </button>
                    <h3 class="type-name">${isCorrectNameLength(list_name)}</h3>
                    <p class="text-discription">
                    ${description ? isCorrectTextLength(description) : 'no description'}
                    </p>
                </div>
                <div class="book-app">
                    <h3 class="name-author">${isCorrectNameLength(author)}</h3>
                    <div class="books-wrapper">
                        <a href="${amazon_product_url}" target="_blank"><img class="amazon" src="${amazonIcon}" alt="amazon" /></a>
                        <a href="${book_uri}" target="_blank"><img class="apple" src="${appleIcon}" alt="apple" /></a>
                </div>
                </div>
            </div>
            </li>`;
        })
        .join('');

    shoppingList.innerHTML = data.length > 0 ? markup : defaultMarkup;

    const booksItems = document.querySelectorAll('.shopping-list .basket');

    booksItems.forEach(item => {
        const bookId = item.getAttribute('data-id');
        item.addEventListener('click', () => {
            window.location.reload();
            deleteFromLS(bookId);
            const updatedBooks = loadFromLS();
            renderShopList(updatedBooks);
        })
    });
}

// renderShopList(books)

function isCorrectNameLength(text) {
    if (window.innerWidth < 768) {
        const maximumSymbolsCount = 14;
        return (text.length >= maximumSymbolsCount) ? `${text.slice(0, maximumSymbolsCount)}...` : text;
    } else {
        return text;
    }
}

function isCorrectTextLength(text) {
    if (window.innerWidth < 768) {
        const maximumSymbolsCount = 80;
        return (text.length >= maximumSymbolsCount) ? `${text.slice(0, maximumSymbolsCount)}...` : text;
    } else {
        return text;
    }
}