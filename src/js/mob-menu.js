const buttonClose = document.querySelector('.btn-close');
const buttonMenu = document.querySelector('.btn-menu');
console.log(buttonClose);
console.log(buttonMenu);
buttonMenu.addEventListener('click', openModalMenu);
const modalMenu = document.querySelector('.menu-section');

function openModalMenu() {
    modalMenu.classList.add('is-open');
    buttonMenu.classList.add('hidden');
    buttonClose.classList.remove('hidden');
}

buttonClose.addEventListener('click', closeModalMenu);
function closeModalMenu(){
    modalMenu.classList.remove('is-open');
  buttonMenu.classList.remove('hidden');
   buttonClose.classList.add('hidden');
}