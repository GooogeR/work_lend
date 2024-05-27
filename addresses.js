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




const citySelectors = document.querySelectorAll('.city-selector');

citySelectors.forEach(citySelector => {
  const selectedElement = citySelector.querySelector('.city-selector-selected');
  const inputs = citySelector.querySelectorAll('.city-selector-input');

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      selectedElement.textContent = input.nextElementSibling.textContent;
      citySelector.dataset.state = 'inactive'; // добавляем это строку
    });
  });

  citySelector.addEventListener('click', () => {
    citySelector.dataset.state = citySelector.dataset.state === 'active' ? 'inactive' : 'active';
  });
});
