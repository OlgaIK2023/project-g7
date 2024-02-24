import {
  fetchBookById,
  showBookById,
  showCategoryList,
  showAllCategories,
} from './render-functions';

const modal = document.querySelector('.backdrop');
const closeModalWindow = document.querySelector('.close-modal');

Promise.all([showCategoryList(), showAllCategories()]).then(() => {
  let liGalleryItems = document.querySelectorAll('.gallery-item');

  liGalleryItems.forEach(item => {
    item.addEventListener('click', onClickGalleryItem);
  });
});

async function onClickGalleryItem(e) {
  let id = e.target.closest('.gallery-item').id;

  const response = await fetchBookById(id);
  renderModalwindow(response);
  console.log(response);
}

async function renderModalwindow(response) {
  const markup = response
    .map(
      ({
        book_image,
        author,
        description,
        title,
        amazon_product_url,
        book_uri,
      }) => {
        return `<div class="backdrop close">
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="../img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <div class="desctop">
      <img src="${book_image}" alt="${title}" class="img-modal" />
      <div class="lauch">
        <div class="tittle-books">
          <h2 class="boock-name">${title}</h2>
          <p class="author">${author}</p>
        </div>

        <p class="about-book">
         ${description}
        </p>

        <ul class="sale-place">
          <li>
            <a href="${amazon_product_url}" target="_blank"
              ><img
                class="sale-place-links"
                src="../img/amazon.png"
                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${book_uri}" target="_blank"
              ><img
                class="sale-place-links"
                src="../img/apple.png"
                alt="amazon"
                width="33"
                height="32"
            /></a>
          </li>
        </ul>
      </div>
    </div>

    <button class="add-lokalstorage" type="button">add to shopping list</button>
    <button class="remove-lokalstorage hiden" type="button">
      remove from the shopping list
    </button>
    <p class="congrat hiden">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>
  </div>
</div>
`;
      }
    )
    .join('');

  return markup;
}

function closeModal() {
  modal.classList.add('close');
  removeEventListeners();
}

function removeEventListeners() {
  closeModalWindow.removeEventListener('click', closeModal);
  modal.removeEventListener('click', modalClickHandler);
  document.removeEventListener('keydown', keydownHandler);
}

function modalClickHandler(event) {
  if (event.target === modal) {
    closeModal();
  }
}

function keydownHandler(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

closeModalWindow.addEventListener('click', closeModal);
modal.addEventListener('click', modalClickHandler);
document.addEventListener('keydown', keydownHandler);
