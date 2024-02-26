const scrollBtn = document.querySelector('.js-scroll-btn');
scrollBtn.addEventListener('click', onScrollTopClick);
window.addEventListener('scroll', onScrollTop);

function onScrollTop() {
  if (scrollY > 100) {
    scrollBtn.classList.remove('visually-hidden-scroll');
  } else {
    scrollBtn.classList.add('visually-hidden-scroll');
  }
}
function onScrollTopClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
