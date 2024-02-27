import BookAPI from "./api";

export const categoryList = document.querySelector('.category-list'),
  galleryList = document.querySelector('.gallery-list'),
  allCategories = document.querySelector('#all-categories'),
  categoryName = document.querySelector('.category-title'),
  galleryMainTitle = document.querySelector('.title-wrapper'),
  backdropLoader = document.querySelector('.backdrop-loader'),
  loader = document.querySelector('.loader');


const bookAPI = new BookAPI();

async function showCategoryList() {
  try {
    const response = await bookAPI.fetchCategories();
    renderCategory(response);
  } catch (error) {
    console.log("Failed to render show category list:", error);
  }
}

showCategoryList();

async function showAllCategories() {
  clearListFromActiveStatus();
  try {
    showSpinner(true);
    const response = await bookAPI.fetchTopCategories();
    showSpinner(false);
    for (let i = 0; i < 4; i++) {
      renderListGroup(response[i]);
    }
    const highlightCategory = document.querySelector('.category-list-item');
    highlightCategory.classList.add('active'); //highlight choosen category

  } catch (error) {
    console.error("Failed to fetch all categories:", error);
  }
  document.querySelectorAll('.see-more-btn').forEach(
    item => item.addEventListener('click', renderPageByCategory)
  );
}

showAllCategories();

function renderCategory(data) {
  const markup = data.map(({ list_name }) => {
    return `
        <li class="category-list-item">
            <h4 class="category-name">${list_name}</h4>
        </li>`;
  }).join('');
  categoryList.innerHTML += markup;
}

function renderBooks(data) {
  const markup = data.map(({ _id, book_image, author, title }) => {
    return `
        <li class="gallery-item" id="${_id}">
            <div class="book-image-container">
              <img src="${book_image}" alt="${title}" class="book-cover" loading="lazy"/>
              <p class="quick-view-info">Quick view</p>
            </div>
            <h3 class="book-title">${isCorrectTextLength(title)}</h3>
            <h5 class="book-author">${isCorrectTextLength(author)}</h5>
        </li>`
  }).join('');
  return markup;
}

function renderListGroup(data) {
  const categoryTitle = 'Best Sellers Books';
  renderCategoryTitleByColors(categoryTitle);
  galleryMainTitle.style.display = 'flex';

  const { list_name, books } = data;
  const markup = `
    <li class="gallery-list-group">
      <h3 class="list-group-name">${list_name}</h3>
        <ul class="gallery-list-item">
          ${renderBooks(books)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>`;
  galleryList.innerHTML += markup;
}

function renderListByCategory(data) {
  const categoryTitle = data[0].list_name; //беремо назву категорії у першого елемента
  renderCategoryTitleByColors(categoryTitle);
  const markup = renderBooks(data);
  galleryList.innerHTML = markup;
}

async function renderPageByCategory(e) {
  const categoryName = e.target.closest('li').children[0].textContent;

  try {
    showSpinner(true);
    galleryList.innerHTML = '';
    galleryMainTitle.style.display = 'none';
    const response = await bookAPI.fetchBooksByCategory(categoryName);

    if (response.length != 0) {
      showSpinner(false);
      galleryList.style.cssText = 'flex-direction: row; flex-wrap: wrap';
      galleryMainTitle.style.display = 'flex';
      renderListByCategory(response);
      clearListFromActiveStatus();
    } else {
      showAllCategories();
    }
    e.target.closest('li').classList.add('active'); //highlight category name
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

function clearListFromActiveStatus() {
  document.querySelectorAll('.category-list-item').forEach(item => item.classList.remove('active'));
}

function showSpinner(show) {
  if (show) {
    loader.classList.remove('hidden');
    backdropLoader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
    backdropLoader.classList.add('hidden');
  }
}

//додаємо обробники подій
categoryList.addEventListener('click', renderPageByCategory);
allCategories.addEventListener('click', showAllCategories);


// document.querySelector('.gallery-list').addEventListener('click', async e => {
//   const bookId = e.target.closest('li').getAttribute('id');
//   const book = await bookAPI.fetchBookById(bookId);
//   console.log(book)
// })