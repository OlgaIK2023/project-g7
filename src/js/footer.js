const key = 'feedback-form-state';
const form = document.querySelector('.form');

form.addEventListener('input', () => {
    const data = {
        email: form.elements.email.value.trim(),
    };
    localStorage.setItem(key,JSON.stringify(data)); 
});

form.addEventListener('submit', (e) => {
 e.preventDefault();
    const data = {
        email: form.elements.email.value.trim(),
    };
    localStorage.removeItem(key);
    form.reset();
 })

function loadFromLocalStorage(key) { 
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch (error) {
        return data;
    }
};

function restoreData() {
    const {email,message} = loadFromLocalStorage(key) || {};
    form.elements.email.value=email || '';
}
restoreData();