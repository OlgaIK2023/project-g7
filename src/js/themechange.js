const switcher = document.querySelector('#theme');
const body = document.body;
const header = document.querySelector('header');
const icons = [document.querySelector('.icon-menu'),
    document.querySelector('.icon-logo'),
    document.querySelector('.nav-shopping'),
    document.querySelector('.shopping-icon'),
    document.querySelector('.icon-close')];
switcher.addEventListener('click', changeTheme);
function changeTheme() {
    if (switcher.checked) {
        icons.forEach(icon => icon.classList.add('dark-icons'));
        body.classList.add('dark-mode-body');
        header.classList.add('dark-mode'); 
    } else {
        icons.forEach(icon => icon.classList.remove('dark-icons'));
        body.classList.remove('dark-mode-body');
        header.classList.remove('dark-mode'); 
    }
    
};
