// Função para abrir o modal
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show'); // Adiciona a classe 'show' para exibir o modal
    }
}

// Função para fechar o modal
function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show'); // Remove a classe 'show' para esconder o modal
    }
}

// Abre o modal automaticamente quando o site carregar
window.onload = function () {
    abrirModal('modal-combo');
};
