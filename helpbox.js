// Selecionando os elementos
const helpToggle = document.getElementById('helpToggle');
const helpContent = document.getElementById('helpContent');
const helpBox = document.querySelector('.help-box');

// Alterna a visibilidade da caixa de ajuda
helpToggle.addEventListener('click', () => {
  if (helpContent.style.display === 'none' || helpContent.style.display === '') {
    helpContent.style.display = 'block';  // Mostra a caixa de ajuda
    helpBox.style.transform = 'translateX(0)';  // Mostra a caixa lateral
  } else {
    helpContent.style.display = 'none';  // Oculta a caixa de ajuda
    helpBox.style.transform = 'translateX(100%)';  // Volta a caixa lateral para fora da tela
  }
});
document.addEventListener('click', (event) => {
    if (!helpBox.contains(event.target) && !helpToggle.contains(event.target)) {
      helpContent.style.display = 'none';  // Oculta a caixa de ajuda
      helpBox.style.transform = 'translateX(100%)';  // Volta a caixa lateral para fora da tela
    }
  });