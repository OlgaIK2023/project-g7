import axios from "axios";
const modal = document.querySelector('.backdrop');
const closeModalWindow = document.querySelector('.close-modal');
const galleryList = document.querySelector('.gallery-list');

async function fetchBookById(bookId) {
    const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
    return response.data;
}

/*galleryList.addEventListener('click', async(event) => {
  if (event.target === event.currentTarget) {
    return
  }  
  if (event.target.closest('.gallery-list-item')) {
        openModal();
  }

  const bookId = event.target.parentNode.parentNode.getAttribute("id");
  const response = await fetchBookById(bookId);
  showModal(response);
  
  //console.log(response)
});*/


galleryList.addEventListener('click', async (event) => {
  event.preventDefault();
  const galleryItem = event.target.closest('.gallery-item');
  if (!galleryItem) {
    return;
  }

  openModal();

  const bookId = galleryItem.getAttribute("id");
  const response = await fetchBookById(bookId);
  showModal(response);
});




function showModal(obj) {
  
  const { _id, author, book_image, title, description, buy_links } = obj;
    const amazonUrl = buy_links[0].url;
    const appleUrl = buy_links[1].url;
  const modalContainer = document.querySelector('.backdrop'); 
  
  const markup = `
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="../img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <div class="desctop">
      <img src=${book_image} alt="book image" class="img-modal" />
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
            <a href=${amazonUrl} target="_blank"
              ><img
                class="sale-place-links"
                src="../img/amazon.png"
                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${appleUrl}" target="_blank"
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
  
  modalContainer.innerHTML = markup; 
  openModal();
  const body = document.querySelector("body")
  body.style.overflow = "hidden";

  const closeModalButton = document.querySelector('.close-modal');
    closeModalButton.addEventListener('click', closeModal)

    }




function openModal() {
    modal.classList.remove('close');
    addEventListeners();
}

function addEventListeners() {
    closeModalWindow.addEventListener('click', closeModal);
    modal.addEventListener('click', modalClickHandler);
    document.addEventListener('keydown', keydownHandler);
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
    if (event.key === 'Escape' && !modal.classList.contains('close')) {
        closeModal();
    }
}

closeModalWindow.addEventListener('click', closeModal);
