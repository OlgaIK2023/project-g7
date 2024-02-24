const modal = document.querySelector('.backdrop');
const closeModalWindow = document.querySelector('.close-modal');
const galleryList = document.querySelector('.gallery-list');

galleryList.addEventListener('click', (event) => {
    const item = event.target.closest('.gallery-list-item');
    if (item) {
        openModal();
    }
});

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


