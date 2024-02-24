const buttonClose = document.querySelector('.btn-close');
const buttonMenu = document.querySelector('.btn-menu');
buttonMenu.addEventListener('click', openModalMenu);
const modalMenu = document.querySelector('.menu-section');

buttonClose.addEventListener('click', closeModalMenu);
function closeModalMenu(){
    modalMenu.classList.remove('is-open');
    modalMenu.classList.add('hidden');
    buttonMenu.classList.remove('hidden');
    buttonClose.classList.add('hidden');
}

function openModalMenu() {
    modalMenu.classList.add('is-open');
    modalMenu.classList.remove('hidden');
    buttonMenu.classList.add('hidden');
    buttonClose.classList.remove('hidden');
}

