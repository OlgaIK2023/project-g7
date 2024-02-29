 export const buttonClose = document.querySelector('.btn-close');
 export const buttonMenu = document.querySelector('.btn-menu');
 export const modalMenu = document.querySelector('.menu-section');
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
  document.body.classList.remove('no-scroll');
}

function openModalMenu() { 
    modalMenu.classList.add('is-open');
    modalMenu.classList.remove('hidden');
    buttonMenu.classList.add('hidden');
  buttonClose.classList.remove('hidden');
  document.body.classList.add('no-scroll');
}

// mob-menu current page//
function mobMenuOnCurrentPage() {
   if (shoppingListPage.href===currentUrl || homeListPage.href===currentUrl) {
      buttonClose.classList.add('hidden');
      modalMenu.classList.add('hidden');
     buttonMenu.classList.remove('hidden');
     document.body.classList.remove('no-scroll');
    };  
}
mobMenuOnCurrentPage()


const mobMenu = document.querySelector('.nav-menu-mob');
const links = mobMenu.getElementsByTagName('a');
function currentPageMob() {
    for (let i = 0; i < links.length; i++) {
        links[0].classList.add('current');
      if (links[i].href === currentUrl) {
        links[0].classList.remove('current');
        links[i].classList.add('current');
    }
}
}

currentPageMob();