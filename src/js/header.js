
const homeLink = document.querySelector('.nav-menu');
 export let currentUrl = window.location.href;
const links = homeLink.getElementsByTagName('a');
function currentPage() {
    
    for (let i = 0; i < links.length; i++) {
        links[0].classList.add('current');
    if (links[i].href === currentUrl) {
        links[0].classList.remove('current');
        links[i].classList.add('current'); 
    }
}
}

currentPage();

