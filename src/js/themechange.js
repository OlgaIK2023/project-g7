
let localStorageTheme = localStorage.getItem('theme');
const switcher = document.querySelector('#theme');
document.documentElement.getAttribute('theme');
console.log(document.documentElement.getAttribute('theme'));
switcher.addEventListener('click', () => {
    switcher.checked ? setDarkTheme() : setLightTheme();
});

function setThemeColor(){
    localStorageTheme === 'dark' ? setDarkTheme() : setLightTheme();
};


function setDarkTheme() {
    switcher.checked = true;
    localStorage.setItem('theme', 'dark');
   document.documentElement.setAttribute('theme','dark');
};

function setLightTheme() {
    switcher.checked = false;
    localStorage.setItem('theme', 'light');
document.documentElement.setAttribute('theme','ligth');
}

setThemeColor();