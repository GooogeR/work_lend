window.scrollLeftFunc = () => {
  const cardList = document.getElementById('cardList');
  const scrollAmount = cardList.offsetWidth / 4 * 4;
  cardList.scrollLeft -= scrollAmount;
};

window.scrollRightFunc = () => {
  const cardList = document.getElementById('cardList');
  const scrollAmount = cardList.offsetWidth / 4 * 4;
  cardList.scrollLeft += scrollAmount;
};

document.addEventListener('DOMContentLoaded', () => {
  const cardList = document.getElementById('cardList');
  const cardWidth = 0; 
  const numberOfCardsToShow = 4;
  const scrollLeft = cardWidth * numberOfCardsToShow;

  cardList.scrollTo({
    left: scrollLeft,
    behavior: 'auto'
  });
});

const cafeList = document.querySelector('.cafe-list');
const arrowRight = document.querySelector('.arrow-right-img');
const arrowLeft = document.querySelector('.arrow-left-img');
let currentCard = 0;
const cardWidth = 290;
const maxShift = 3;
const totalCards = cafeList.children.length;

arrowLeft.addEventListener('click', () => {
  currentCard = Math.min(currentCard + 1, totalCards - maxShift);
  cafeList.style.transform = `translateX(-${currentCard * cardWidth}px)`;
});

arrowRight.addEventListener('click', () => {
  currentCard = Math.max(currentCard - 1, 0);
  cafeList.style.transform = `translateX(-${currentCard * cardWidth}px)`;
});
