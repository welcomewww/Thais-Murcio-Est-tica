const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// Iniciar com o carrossel ajustado
window.addEventListener('load', updateCarousel);

function toggleMenu() {
  const menu = document.querySelector('.links');
  menu.classList.toggle('show');
}