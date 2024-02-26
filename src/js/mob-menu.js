const buttonClose = document.querySelector('.btn-close');
const buttonMenu = document.querySelector('.btn-menu');
const modalMenu = document.querySelector('.menu-section');

buttonMenu.addEventListener('click', openModalMenu);
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



// const homePage=

// if (currentPage===) {
    
// } else {
    
// }


//  document.querySelector('.home-page').addEventListener('click', function() {
//             this.classList.add('current');
//         });

// document.querySelector('shopping-list-page').addEventListener('click', function () {
//     this.classList.add('current');

// });