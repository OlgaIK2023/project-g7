 export const buttonClose = document.querySelector('.btn-close');
 export const buttonMenu = document.querySelector('.btn-menu');
const modalMenu = document.querySelector('.menu-section');
import { currentUrl } from "./header";
const shoppingListPage = document.querySelector('.nav-shopping');
const homeListPage = document.querySelector('.nav-link');
// console.log(shoppingListPage);
buttonMenu.addEventListener('click', openModalMenu);
buttonClose.addEventListener('click', closeModalMenu);

function closeModalMenu() {
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

// mob-menu current page//
function mobMenuOnCurrentPage() {
   if (shoppingListPage.href===currentUrl || homeListPage.href===currentUrl) {
      buttonClose.classList.add('hidden');
      modalMenu.classList.add('hidden');
      buttonMenu.classList.remove('hidden');
    };  
}
mobMenuOnCurrentPage()


const mobMenu = document.querySelector('.nav-menu-mob');
const links = mobMenu.getElementsByTagName('a');
function currentPageMob() {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('current');
    if (links[i].href === currentUrl) {
        links[i].classList.add('current');
    }
}
}

currentPageMob();