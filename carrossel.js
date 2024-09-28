const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;
const scrollPerClick = 300; // Quantidade de pixels por clique

nextBtn.addEventListener('click', () => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  if (scrollAmount < maxScroll) {
    scrollAmount += scrollPerClick;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= scrollPerClick;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  }
});
