const supportArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveTheChildren,
    img2x: saveTheChildren2x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHope,
    img2x: projectHope2x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: internationalMedicalCorps,
    img2x: internationalMedicalCorps2x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
    img2x: razom2x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionAgainstHunger,
    img2x: actionAgainstHunger2x,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: serhiyPrytulaCharityFoundation,
    img2x: serhiyPrytulaCharityFoundation2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
    img2x: united2x,
  },
  {
    title: 'Medecins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medecinsSansFrontieres,
    img2x: medecinsSansFrontieres2x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
    img2x: worldVision2x,
  },
];

import saveTheChildren from '../img/support-ua/save-the-children.png';
import projectHope from '../img/support-ua/projectHope.png';
import internationalMedicalCorps from '../img/support-ua/internationalMedicalCorps.png';
import razom from '../img/support-ua/razom.png';
import actionAgainstHunger from '../img/support-ua/actionAgainstHunger.png';
import serhiyPrytulaCharityFoundation from '../img/support-ua/serhiyPrytulaCharityFoundation.png';
import united from '../img/support-ua/united.png';
import medecinsSansFrontieres from '../img/support-ua/medecinsSansFrontieres.png';
import worldVision from '../img/support-ua/worldVision.png';
import saveTheChildren2x from '../img/support-ua/saveTheChildren2x.png';
import projectHope2x from '../img/support-ua/projectHope2x.png';
import internationalMedicalCorps2x from '../img/support-ua/internationalMedicalCorps2x.png';
import razom2x from '../img/support-ua/razom2x.png';
import actionAgainstHunger2x from '../img/support-ua/actionAgainstHunger2x.png';
import serhiyPrytulaCharityFoundation2x from '../img/support-ua/serhiyPrytulaCharityFoundation2x.png';
import united2x from '../img/support-ua/united2x.png';
import medecinsSansFrontieres2x from '../img/support-ua/medecinsSansFrontieres2x.png';
import worldVision2x from '../img/support-ua/worldVision2x.png';

const supportList = document.querySelector('.js-support');
const markup = createImageCardMarkup(supportArray);

supportList.insertAdjacentHTML('beforeend', markup);
supportList.addEventListener('click', onClick);

function createImageCardMarkup(supportArray) {

  return supportArray
    .map(({ title, url, img , img2x}, ind) => {
      let num = String(ind + 1).padStart(2, '0');
      return `<li class="support-link js-support">
        <a class="js-target" href="${url}" target="_blank">
          <span class="support-number">${num}
          <img class="support-img" srcset="${img} 1x, ${img2x} 2x"
          src="${img}" alt="${title}"/></span>
        </a>
      </li>`;
    })
    .join('');
}

function onClick(evt) {
  if (!evt.target.classList.contains('js-support')) {
    return;
  }
}
let position = 0;
let slidesToShow = 6;
let slidesToScroll = 1;

const container = document.querySelector('.slider-container');
const list = document.querySelector('.support-list');
const sliderButton = document.querySelector('.slider-button');
const itemsSupport = document.querySelectorAll('.support-link');
let itemsCount = itemsSupport.length;
const sliderItemHeight = 32;
const movePosition = slidesToScroll * sliderItemHeight;

itemsSupport.forEach((item) => {
  item.style.minHeight = `${sliderItemHeight}px`;
});

sliderButton.addEventListener('click', () => {
  const itemsBottom = getItemsBottom();

  if (itemsBottom >= slidesToScroll) {
    position -= movePosition;
  } else {
    position = 0;
  }

  list.style.transition = 'transform 0.3s ease-out';
  setPosition();

  setTimeout(() => {
    list.style.transition = '';
  }, 300);
});

window.addEventListener('resize', () => {
  itemsCount = itemsSupport.length;
  setPosition();
});

const setPosition = () => {
  list.style.transform = `translateY(${position}px)`;
};

function getItemsBottom() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1440) {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 39;
  } else if (windowWidth >= 768) {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 40;
  } else {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 55;
  }
}
