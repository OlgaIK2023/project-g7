export const showBoockDetails = response => {
  renderModalwindow(response);

  const modal = document.querySelector('.backdrop');
  const closeModalWindow = document.querySelector('.close-modal');

  closeModalWindow.addEventListener('click', closeModal);
  modal.addEventListener('click', modalClickHandler);
  document.addEventListener('keydown', keydownHandler);
};

async function renderModalwindow(response) {
  const markup = `<div class="backdrop">
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="../img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <div class="desctop">
      <img src="${response.book_image}" alt="${response.title}" class="img-modal" />
      <div class="lauch">
        <div class="tittle-books">
          <h2 class="boock-name">${response.title}</h2>
          <p class="author">${response.author}</p>
        </div>

        <p class="about-book">
         ${response.description}
        </p>

        <ul class="sale-place">
          <li>
            <a href="${response.amazon_product_url}" target="_blank"
              ><img
                class="sale-place-links"
                src="../img/amazon.png"
                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${response.book_uri}" target="_blank"
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

  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforeend', markup);
}

function closeModal() {
  removeEventListeners();
  const modal = document.querySelector('.backdrop');
  modal.remove();
}

function removeEventListeners() {
  const modal = document.querySelector('.backdrop');
  const closeModalWindow = document.querySelector('.close-modal');
  closeModalWindow.removeEventListener('click', closeModal);
  modal.removeEventListener('click', modalClickHandler);
  document.removeEventListener('keydown', keydownHandler);
}

function modalClickHandler(event) {
  const modal = document.querySelector('.backdrop');
  if (event.target === modal) {
    closeModal();
  }
}

function keydownHandler(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
