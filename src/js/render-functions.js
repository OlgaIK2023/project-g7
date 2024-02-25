import axios from "axios";

export const categoryList = document.querySelector('.category-list'),
    galleryList = document.querySelector('.gallery-list'),
    allCategories = document.querySelector('#all-categories'),
    categoryName = document.querySelector('.category-title');

async function fetchCategories() {
    const response = await axios.get(`https://books-backend.p.goit.global/books/category-list`);
    return response;
}
async function fetchTopCategories() {
    const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
    return response;
}
async function fetchBooksByCategory(selectedCategory) {
    const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`);
    return response;
}
async function fetchBookById(bookId) {
    const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
    return response.data;
}

async function showCategoryList() {
    const response = await fetchCategories();
    renderCategory(response.data);
    allCategories.classList.toggle('active');
}

//додаємо обробники подій
categoryList.addEventListener('click', renderPageByCategory);
allCategories.addEventListener('click', showAllCategories);

async function showAllCategories() {
    document.querySelectorAll('.category-list-item').forEach(item => item.classList.remove('active'));
    try {
        const response = await fetchTopCategories();
        for (let i = 0; i < 4; i++) {
            renderListGroup(response.data[i]);
        }
        document.querySelector('.category-list-item').classList.add('active'); //highlight all categories category item
    } catch (error) {
        console.error("Failed to fetch top categories:", error);
    }

    // const seeMoreBtn = document.querySelectorAll('.see-more-btn');
    // seeMoreBtn.forEach(button => {
    //     button.addEventListener('click', (e) => {
    //         console.log(e.target.parentNode.firstChild);
    //         console.log('asasas');
    //     })
    // })
}

showAllCategories();
showCategoryList();

function renderCategory(data) {
    const markup = data.map(({ list_name }) => {
        return `
        <li class="category-list-item">
            <h4 class="category-name">${list_name}</h4>
        </li>`;
    }).join('');
    categoryList.innerHTML += markup;
}
function renderTopCategoriesBooks(data) {
    const markup = data.map(({ _id, book_image, author, title }) => {
        return `
        <li class="gallery-item" id="${_id}">
            <img src="${book_image}" alt="" class="book-cover" />
            <h3 class="book-title">${isCorrectTextLength(title)}</h3>
            <h5 class="book-author">${isCorrectTextLength(author)}</h5>
        </li>`
    }).join('');
    return markup;
}

function renderListGroup(data) {
    const categoryTitle = 'Best Sellers Books';
    renderCategoryTitleByColors(categoryTitle);

    const { _id, list_name, books } = data;

    const markup = `
    <li class="gallery-list-group">
      <h3 class="list-group-name">${list_name}</h3>
        <ul class="gallery-list-item">
          ${renderTopCategoriesBooks(books)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>
  `;
    galleryList.innerHTML += markup;
}
function renderListByCategory(data) {

    const categoryTitle = data[0].list_name; //беремо назву категорії у першого елемента
    renderCategoryTitleByColors(categoryTitle);
    const markup = data.map(({ _id, book_image, title, author }) => {
        return `
        <li class="gallery-item" id="${_id}">
          <img src="${book_image}" alt="${title}" class="book-cover" />
          <h3 class="book-title">${isCorrectTextLength(title)}</h3>
          <h5 class="book-author">${isCorrectTextLength(author)}</h5>
        </li>`
    }).join('');
    galleryList.innerHTML = markup;
}

async function renderPageByCategory(e) {
    if (e.target === e.currentTarget) return;
    const categoryName = e.target.textContent;

    try {
        const response = await fetchBooksByCategory(categoryName);
        galleryList.innerHTML = '';
        if (response.data.length != 0) {
            galleryList.style.cssText = 'flex-direction: row; flex-wrap: wrap';
            renderListByCategory(response.data);
            document.querySelectorAll('.category-list-item').forEach(item => item.classList.remove('active'));
        } else {
            showAllCategories();
        }
        e.target.parentNode.classList.add('active')
    } catch (error) {
        console.error("Failed to render page by category:", error);
    }
}

function isCorrectTextLength(text) {
    const maximumSymbolsCount = 15;
    return (text.length >= maximumSymbolsCount) ? `${text.slice(0, maximumSymbolsCount)}...` : text;
}

function renderCategoryTitleByColors(categoryTitle) {
    let arrayFromBlackWords = categoryTitle.split(' ');
    const blueWord = arrayFromBlackWords[arrayFromBlackWords.length - 1];
    arrayFromBlackWords = arrayFromBlackWords.slice(0, arrayFromBlackWords.length - 1);
    const blackWords = arrayFromBlackWords.join(' ');

    categoryName.textContent = `${blackWords}`;
    categoryName.nextElementSibling.textContent = `${blueWord}`;
}
