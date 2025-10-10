'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true)); // to add a copy of the element

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie') // selecting the button inside the message
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); // old way
  });

///////////////////////////////////////
// Styles, Attributes and Classes

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // only works for inline styles
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// CSS custom properties (variables)
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.getAttribute('alt'));

logo.alt = 'Beautiful minimalist logo';

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

// Non-standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas

logo.setAttribute('designer', 'Jonas');
console.log(logo.getAttribute('designer'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
console.log(logo.classList.contains('c')); // not includes()

// Don't use
// logo.className = 'jonas'; // this will overwrite all existing classes

//scroll behaviour
const btnScrollTo = document.querySelector('.btn--scroll-to');
const scrollSection = document.querySelector('#section--1');
console.log(scrollSection.getBoundingClientRect()); // cordinate of section

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  scrollSection.scrollIntoView({ behavior: 'smooth' });
});

//bind and unbind the event

const h1element = document.querySelector('h1');
console.log(h1element);
const alertMsg = () => {
  alert('hi there....');
  h1element.removeEventListener('mouseover', alertMsg);
};
h1element.addEventListener('mouseover', alertMsg);

console.log(h1element.firstElementChild);

// page navigation

// document.querySelectorAll('.nav__links').forEach(e1 => {
//   e1.addEventListener('click', e => {
//     e.preventDefault();
//     const hrefId = e.target.getAttribute('href');
//     document.querySelector(hrefId).scrollIntoView({ target: 'smooth' });
//   });
// });

// 2nd:  parent event bind : Recommended

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ target: 'smooth' });
  }
});
console.log('\n Tabbled component\n');
// Tabbed component
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  //guard clause
  if (!clicked) return;

  //remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //activate tab
  clicked.classList.add('operations__tab--active');

  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const nav = document.querySelector('.nav');
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation: Intersection Observer API
console.log('\n----Sticky navigation: Intersection Observer API--------\n');

// const section1 = document.querySelector('#section--1');

// const callback = function (entries, observer) {
//   console.log(entries);
// };
// const observerOption = {
//   root: null,
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(callback, observerOption);
// observer.observe(section1);

const hederObserver = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
//Track previous scroll position
const useCallback = function (entries, observe) {
  const [entity] = entries;
  // console.log(prevScrollPos, currentPostiion);
  if (!entity.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const hederOptions = {
  root: null,
  rootMargin: `-${navHeight}px`,
  thresholds: 0,
};
const observer = new IntersectionObserver(useCallback, hederOptions);
observer.observe(hederObserver);

// Reveal sections when scroll
const sectionOptions = {
  root: null,
  thresholds: 0.15,
};

const sectionCallback = function (entities, observer) {
  // const [entity] = entities;
  // console.log(entity);
  entities.forEach(entity => {
    if (!entity.isIntersecting) return;

    entity.target.classList.remove('section--hidden');
    observer.unobserve(entity.target);
  });
};

const sectionObserver = new IntersectionObserver(
  sectionCallback,
  sectionOptions
);
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading of images
const lazyCallback = function (entities, observer) {
  const [entity] = entities;
  // console.log(entity);
  entity.target.src = entity.target.dataset.src;
  entity.target.addEventListener('load', () => {
    entity.target.classList.remove('lazy-img');
  });
  observer.unobserve(entity.target);
};
const lazyOptions = {
  root: null,
  thresholds: 0,
  rootMargin: '200px',
};

const imgObserver = new IntersectionObserver(lazyCallback, lazyOptions);
const images = document.querySelectorAll('img[data-src]');
images.forEach(img => imgObserver.observe(img));

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

// Functions
const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

// Event handlers
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

// Lifecycle DOM events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
