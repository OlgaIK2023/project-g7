
const homeLink = document.querySelector('.nav-menu');
let currentUrl = window.location.href;
const links = homeLink.getElementsByTagName('a');

function currentPage() {
    for (let i = 0; i < links.length; i++) {
    if (links[i].href === currentUrl) {
        links[i].classList.add('current');
    }
}
}

currentPage();

