// Seleciona os elementos do DOM
let carousel = document.querySelector('.carousel');
let prevButton = document.querySelector('#prevBtn');
let nextButton = document.querySelector('#nextBtn');

let scrollAmount = 0;
const scrollStep = 400; // Quantidade de pixels a mover por clique
const autoScrollInterval = 3000; // Intervalo de tempo para scroll automático (3 segundos)

// Define o máximo de scroll possível com base no tamanho do carrossel
let maxScroll = carousel.scrollWidth - carousel.clientWidth;

// Função para mover o carrossel para a próxima posição
function scrollNext() {
  maxScroll = carousel.scrollWidth - carousel.clientWidth; // Atualiza o valor máximo para scroll dinâmico
  if (scrollAmount < maxScroll) {
    scrollAmount += scrollStep;
  } else {
    scrollAmount = 0; // Volta ao início se chegar ao final
  }
  carousel.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Função para mover o carrossel para a posição anterior
function scrollPrev() {
  if (scrollAmount > 0) {
    scrollAmount -= scrollStep;
  } else {
    scrollAmount = maxScroll; // Volta ao final se estiver no início
  }
  carousel.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Adiciona eventos de clique nos botões de navegação
nextButton.addEventListener('click', scrollNext);
prevButton.addEventListener('click', scrollPrev);
