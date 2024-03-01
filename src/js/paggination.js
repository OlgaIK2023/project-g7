import _ from "lodash";
import { renderShopList } from "./shopping-list";

const switchButtons = document.querySelectorAll('.switch-btn'),
    buttonsContainer = document.querySelector('.paggination-btns'),
    pagginationMenu = document.querySelector('.paggination-btns-wrapper');

const getBooksFromLS = JSON.parse(localStorage.getItem('shoppingList'));
const booksCount = getBooksFromLS.length;
const booksOnPage = 3
const allPagesCount = Math.ceil(booksCount / booksOnPage);

const data = _.chunk(getBooksFromLS, booksOnPage);

//рендеримо кнопки пагінації
let currentPage = 0;
if (allPagesCount > 1) {
    pagginationMenu.style.display = 'flex';
    createPagginationMenu();
} else {
    renderShopList(getBooksFromLS);
}

//створили вірну кількість кнопок на сторінці
document.querySelectorAll('.btn').forEach((button, i) => {
    button.addEventListener('click', () => {
        currentPage = i;
        // console.log(currentPage);
        document.querySelector('.currentBtn').classList.remove('currentBtn');
        button.classList.add('currentBtn');
        renderShopList(data[currentPage]);
    })
})
switchButtons.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.getAttribute('id') === 'next') {
            if (currentPage >= 0 && currentPage < allPagesCount - 1) {
                currentPage += 1;
                toggleActiveClass();
                renderShopList(data[currentPage]);
            } else {
                currentPage = 0
                toggleActiveClass();
                renderShopList(data[0]);
            }
        }
        if (button.getAttribute('id') === 'prev') {
            if (currentPage <= allPagesCount - 1 && currentPage > 0) {
                currentPage -= 1;
                toggleActiveClass();
                renderShopList(data[currentPage]);
            } else {
                currentPage = allPagesCount - 1;
                toggleActiveClass();
                renderShopList(data[data.length - 1]);
            }
        }
        if (button.getAttribute('id') === 'start') {
            currentPage = 0;
            toggleActiveClass();
            renderShopList(data[0]);
        }
        if (button.getAttribute('id') === 'end') {
            currentPage = allPagesCount - 1;
            toggleActiveClass();
            renderShopList(data[data.length - 1]);
        }
    })
})

function toggleActiveClass() {
    document.querySelectorAll('.btn').forEach((button, i) => {
        button.classList.toggle('currentBtn', i === currentPage);
    })
}

function createButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('width', '44');
    button.setAttribute('height', '44');
    return button;
}

function createPagginationMenu() {
    for (let i = 0; i < allPagesCount; i++) {
        const button = createButton();
        i === 0 ? button.classList.add('btn', 'currentBtn') : button.classList.add('btn');

        button.textContent = i + 1;
        buttonsContainer.appendChild(button);
        renderShopList(data[0]);
    }
}
