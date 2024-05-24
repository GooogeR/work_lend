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
  const cardWidth = 180; // ширина одной карточки
  const numberOfCardsToShow = 4;
  const scrollLeft = cardWidth * numberOfCardsToShow;

  cardList.scrollTo({
    left: scrollLeft,
    behavior: 'auto'
  });
});
