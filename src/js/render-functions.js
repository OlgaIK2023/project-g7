import axios from 'axios';
import { showBoockDetails } from './modalwindow';

const categoryList = document.querySelector('.category-list'),
  galleryList = document.querySelector('.gallery-list'),
  allCategories = document.querySelector('#all-categories'),
  categoryName = document.querySelector('.category-title');

async function fetchCategories() {
  const response = await axios.get(
    `https://books-backend.p.goit.global/books/category-list`
  );
  return response;
}
async function fetchTopCategories() {
  const response = await axios.get(
    'https://books-backend.p.goit.global/books/top-books'
  );
  return response;
}
async function fetchBooksByCategory(selectedCategory) {
  const response = await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
  );
  return response;
}
export const fetchBookById = async bookId => {
  const response = await axios.get(
    `https://books-backend.p.goit.global/books/${bookId}`
  );
  return response.data;
};

export const showBookById = async e => {
  let id = e.target.closest('.gallery-item').id;

  const response = await fetchBookById(id);
};

export const showCategoryList = async () => {
  const response = await fetchCategories();
  renderCategory(response.data);
};

export const showAllCategories = async () => {
  const response = await fetchTopCategories();
  for (let i = 0; i < 4; i++) {
    renderListGroup(response.data[i]);
  }
};

// const seeMoreBtn = document.querySelectorAll('.see-more-btn');
// seeMoreBtn.forEach(button => {
//     button.addEventListener('click', (e) => {
//         console.log(e.target.parentNode.firstChild);
//         console.log('asasas');
//     })
// })

function renderCategory(data) {
  const markup = data
    .map(({ list_name }) => {
      return `
      <li class="category-list-item">
				<h4 class="category-name">${list_name}</h4>
			</li>
    `;
    })
    .join('');
  categoryList.innerHTML += markup;
}
function renderTopCategoriesBooks(data) {
  const markup = data
    .map(({ book_image, author, title, _id }) => {
      return `
        <li class="gallery-item" id="${_id}">
            <div class="ig-wrapper">
                <img src="${book_image}" alt="" class="book-cover" />
            </div>
            <h3 class="book-title">${isCorrectTextLength(title)}</h3>
            <h5 class="book-author">${isCorrectTextLength(author)}</h5>
        </li>`;
    })
    .join('');
  return markup;
}
function renderListGroup(data) {
  categoryName.textContent = 'Best Sellers Books';
  const { list_name, books } = data;
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
  categoryName.textContent = data[0].list_name; //беремо назву категорії у першого елемента
  console.log(data);
  const markup = data
    .map(({ book_image, title, author, _id }) => {
      return `
        <li class="gallery-item" id="${_id}">
          <img src="${book_image}" alt="${title}" class="book-cover" />
          <h3 class="book-title">${isCorrectTextLength(title)}</h3>
          <h5 class="book-author">${isCorrectTextLength(author)}</h5>
        </li>`;
    })
    .join('');
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
    } else {
      showAllCategories();
    }
  } catch (error) {
    console.log(error);
  }
}

function isCorrectTextLength(text) {
  const maximumSymbolsCount = 16;
  return text.length >= maximumSymbolsCount
    ? `${text.slice(0, maximumSymbolsCount)}...`
    : text;
}

//додаємо обробники подій
categoryList.addEventListener('click', onClickCategory);
allCategories.addEventListener('click', onClickAllCategory);

async function onClickCategory(e) {
  await renderPageByCategory(e);
  addEventListeners();
}

async function onClickAllCategory(e) {
  await showAllCategories(e);
  addEventListeners();
}

export const addEventListeners = () => {
  let liGalleryItems = document.querySelectorAll('.gallery-item');

  liGalleryItems.forEach(item => {
    item.addEventListener('click', onCklickBoock);
  });
};

Promise.all([showCategoryList(), showAllCategories()]).then(() => {
  addEventListeners();
});

async function onCklickBoock(e) {
  let id = e.target.closest('.gallery-item').id;

  const response = await fetchBookById(id);
  showBoockDetails(response);
}
