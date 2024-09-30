function searchTest() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.carousel-item');
  let hasResults = false;

  items.forEach(item => {
    const title = item.querySelector('h3').innerText.toLowerCase();
    if (title.includes(input)) {
      item.style.display = 'block';
      hasResults = true;
    } else {
      item.style.display = 'none';
    }
  });

  // Exibir a mensagem "sem resultados" caso nenhum item corresponda à pesquisa
  const noResultsMessage = document.getElementById('noResultsMessage');
  if (hasResults) {
    noResultsMessage.style.display = 'none';
  } else {
    noResultsMessage.style.display = 'block';
  }
}