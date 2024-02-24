import { categoryName } from "./render-functions";
const switcher = document.querySelector('#theme');
const body = document.body;
const section = document.querySelector('.homepage');
const list = document.querySelector('.category-name');
// const buttonSeeMore = document.querySelectorAll('.see-more-btn');
// console.log(buttonSeeMore);
const header = document.querySelector('header');
const icons = [document.querySelector('.icon-menu'),
    document.querySelector('.icon-logo'),
    document.querySelector('.nav-shopping'),
    document.querySelector('.shopping-icon'),
    document.querySelector('.icon-close')];
let localStorageTheme = localStorage.getItem('theme');

switcher.addEventListener('click', () => {
    switcher.checked ? setDarkTheme() : setLightTheme();
});

function setThemeColor(){
    localStorageTheme === 'dark' ? setDarkTheme() : setLightTheme();
}

function setDarkTheme() {
    switcher.checked = true;
    localStorage.setItem('theme', 'dark');
    icons.forEach(icon => icon.classList.add('dark-icons'));
    //  list.style.color = 'rgba(255, 255, 255, 0.6)';
        // section.classList.add('dark-mode-body');
        body.classList.add('dark-mode-body');
        header.classList.add('dark-mode-header'); 
        // categoryName.classList.add('dark-color-list');
        // buttonSeeMore.classList.add( );
};

function setLightTheme() {
    switcher.checked = false;
    localStorage.setItem('theme', 'light');
    // list.style.color = 'rgba(17, 17, 17, 0.6)';
    icons.forEach(icon => icon.classList.remove('dark-icons'));
        body.classList.remove('dark-mode-body');
        header.classList.remove('dark-mode-header'); 
        // section.classList.remove('dark-mode-body');
}

setThemeColor();