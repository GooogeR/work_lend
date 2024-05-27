// слайдер меню 
const cardList = document.querySelector('#cardList');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentCards = 0;
const cardWidths = 300;
const totalCardss = cardList.children.length;
const visibleCards = 4;

let startX, currentX;

cardList.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  currentX = startX;
});

cardList.addEventListener('touchmove', (e) => {
  currentX = e.touches[0].clientX;
});

cardList.addEventListener('touchend', (e) => {
  if (e.changedTouches.length > 0) {
    const deltaX = Math.abs(currentX - startX);
    if (deltaX > 100) { // threshold value
      if (currentX < startX) {
        currentCards = Math.min(currentCards + 1, totalCardss - visibleCards + 3);
      } else {
        currentCards = Math.max(currentCards - 1, 0);
      }
      const translateX = -currentCards * cardWidths;
      cardList.style.transition = 'transform 0.3s ease-out';
      cardList.style.transform = `translateX(${translateX}px)`;
    }
  }
});

rightArrow.addEventListener('click', () => {
  currentCards = Math.min(currentCards + 1, totalCardss - visibleCards + 3);
  cardList.style.transform = `translateX(-${currentCards * cardWidths}px)`;
});

leftArrow.addEventListener('click', () => {
  currentCards = Math.max(currentCards - 1, 0);
  cardList.style.transform = `translateX(-${currentCards * cardWidths}px)`;
});








// Слайдер кафе с поддержкой свайпов на тач устройствах

const cafeList = document.querySelector('.cafe-list');
const arrowRight = document.querySelector('.arrow-right-img');
const arrowLeft = document.querySelector('.arrow-left-img');
let currentCard = 0;
const cardWidth = 290;
const maxShift = 3;
const totalCards = cafeList.children.length;

let startTouchX, currentTouchX;

cafeList.addEventListener('touchstart', (e) => {
  startTouchX = e.touches[0].clientX;
  currentTouchX = startTouchX;
});

cafeList.addEventListener('touchmove', (e) => {
  currentTouchX = e.touches[0].clientX;
});

cafeList.addEventListener('touchend', (e) => {
  if (e.changedTouches.length > 0) {
    const deltaTouchX = Math.abs(currentTouchX - startTouchX);
    if (deltaTouchX > 100) { // порог свайпа
      if (currentTouchX < startTouchX) {
        currentCard = Math.min(currentCard + 1, totalCards - maxShift + 2);
      } else {
        currentCard = Math.max(currentCard - 1, 0);
      }
      const translateX = -currentCard * (cardWidth + 40);
      cafeList.style.transition = 'transform 0.3s ease-out';
      cafeList.style.transform = `translateX(${translateX}px)`;
    }
  }
});

cafeList.addEventListener('touchcancel', (e) => {
  if (e.changedTouches.length > 0) {
    const deltaTouchX = Math.abs(currentTouchX - startTouchX);
    if (deltaTouchX > 100) { // порог свайпа
      if (currentTouchX < startTouchX) {
        currentCard = Math.min(currentCard + 1, totalCards - maxShift + 2);
      } else {
        currentCard = Math.max(currentCard - 1, 0);
      }
      const translateX = -currentCard * (cardWidth + 40);
      cafeList.style.transition = 'transform 0.3s ease-out';
      cafeList.style.transform = `translateX(${translateX}px)`;
    }
  }
});

arrowLeft.addEventListener('click', () => {
  currentCard = Math.min(currentCard + 1, totalCards - maxShift);
  cafeList.style.transform = `translateX(-${currentCard * cardWidth}px)`;
});

arrowRight.addEventListener('click', () => {
  currentCard = Math.max(currentCard - 1, 0);
  cafeList.style.transform = `translateX(-${currentCard * cardWidth}px)`;
});

// слайдер блог 

const blogSlider = document.querySelector('.blog-list');
const blogArrowRight = document.querySelector('.arrow-wrap .arrow-right-blog');
const blogArrowLeft = document.querySelector('.arrow-wrap .arrow-left-blog');
let currentBlog = 0;
const maxBlogsVisible = 0;
const totalBlogs = blogSlider.children.length;

let blogWidth;
if (window.matchMedia("(max-width: 768px)").matches) { // для тач-устройств
  blogWidth = 300;
} else {
  blogWidth = 650; // для десктопа
}

let startTouchXX, currentTouchXX;

blogSlider.addEventListener('touchstart', (e) => {
  startTouchXX = e.touches[0].clientX;
  currentTouchXX = startTouchXX;
});

blogSlider.addEventListener('touchmove', (e) => {
  currentTouchXX = e.touches[0].clientX;
});

blogSlider.addEventListener('touchend', (e) => {
  if (e.changedTouches.length > 0) {
    const deltaTouchX = Math.abs(currentTouchXX - startTouchXX);
    if (deltaTouchX > 300) { // порог свайпа
      if (currentTouchXX > startTouchXX) {
        currentBlog = Math.max(currentBlog - 1, 0);
      } else {
        currentBlog = Math.min(currentBlog + 1, totalBlogs - (maxBlogsVisible + 1));
      }
      const translateX = -currentBlog * blogWidth;
      blogSlider.style.transition = 'transform 0.3s ease-out';
      blogSlider.style.transform = `translateX(${translateX}px)`;
    }
  }
});

blogSlider.addEventListener('touchcancel', (e) => {
  if (e.changedTouches.length > 0) {
    const deltaTouchX = Math.abs(currentTouchXX - startTouchXX);
    if (deltaTouchX > 300) { // порог свайпа
      if (currentTouchXX > startTouchXX) {
        currentBlog = Math.max(currentBlog - 1, 0);
      } else {
        currentBlog = Math.min(currentBlog + 1, totalBlogs - (maxBlogsVisible + 1));
      }
      const translateX = -currentBlog * blogWidth;
      blogSlider.style.transition = 'transform 0.3s ease-out';
      blogSlider.style.transform = `translateX(${translateX}px)`;
    }
  }
});

blogArrowLeft.addEventListener('click', () => {
  currentBlog = Math.min(currentBlog + 1, totalBlogs - (maxBlogsVisible + 1));
  blogSlider.style.transform = `translateX(-${currentBlog * blogWidth}px)`;
});

blogArrowRight.addEventListener('click', () => {
  currentBlog = Math.max(currentBlog - 1, 0);
  blogSlider.style.transform = `translateX(-${currentBlog * blogWidth}px)`;
});




// Popup
const openModalBtns = document.querySelectorAll('.open-modal');
const popup = document.querySelector('#popup');
const overlay = document.createElement('div');
overlay.className = 'popup-overlay';
document.body.appendChild(overlay);

openModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
  });
});

const popupClose = document.querySelector('.popup-close');

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

document.addEventListener('click', (e) => {
  if (e.target === popup || e.target === overlay) {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }
});




const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');

    // Add your custom logic here based on the selected value
    console.log(`Selected value: ${i + 1}`);
  });
}



//form
const form = document.querySelector('.work-form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', (e) => {
  let isValid = true;

  inputs.forEach(input => {
    
    if (input.type === 'radio') {
      const radios = form.querySelectorAll(`input[name="${input.name}"]`);
      let isChecked = false;
      radios.forEach(radio => {
        if (radio.checked) {
          isChecked = true;
        }
      });
      if (!isChecked) {
        input.parentNode.parentNode.querySelector('.__select__title').classList.add('error');
        input.parentNode.parentNode.querySelector('.error-message').textContent = 'Это поле обязательно для заполнения';
        isValid = false;
      } else {
        input.parentNode.parentNode.querySelector('.__select__title').classList.remove('error');
        input.parentNode.parentNode.querySelector('.error-message').textContent = '';
      }
    } else {
      if (input.value === '') {
        input.classList.add('error');
        input.nextElementSibling.textContent = 'Это поле обязательно для заполнения';
        isValid = false;
      } else {
        input.classList.remove('error');
        input.nextElementSibling.textContent = '';
      }
    }
  });

  if (!isValid) {
    e.preventDefault();
  }
});






// burger-menu
const overlayMenu = document.querySelector('#overlay-menu');
const burgerMenu = document.querySelector('#burger-menu');
const navbar = document.querySelector('#navbar');
const spans = document.querySelectorAll('#burger-menu span');


let isMenuOpen = false;

burgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  overlayMenu.style.display = navbar.classList.contains('active') ? 'block' : 'none';


  isMenuOpen = !isMenuOpen;


  if (isMenuOpen) {
    spans[0].style.transform = 'rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-16px) rotate(-45deg)';
  } else {
    spans[0].style.transform = 'rotate(0deg)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'rotate(0deg)';
  }
});



