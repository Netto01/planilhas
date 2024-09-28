// Selecionar elementos da página
const helpIcon = document.getElementById("helpIcon"); // Ícone de ajuda
const helpModal = document.getElementById("helpModal"); // Modal de ajuda
const closeModalBtn = document.querySelector(".close-modal"); // Botão de fechar dentro do modal
const sendEmailBtn = document.getElementById("sendEmailBtn"); // Botão para enviar o e-mail
const userNameInput = document.getElementById("userName"); // Campo do nome do usuário
const productNameInput = document.getElementById("productName"); // Campo do nome do produto
const userMessageTextarea = document.getElementById("userMessage"); // Campo da mensagem

// Função para exibir o modal de ajuda ao clicar no ícone
helpIcon.addEventListener("click", () => {
    helpModal.style.display = "flex"; // Exibe o modal como flexbox
});

// Função para fechar o modal ao clicar no botão de fechar
closeModalBtn.addEventListener("click", () => {
    helpModal.style.display = "none"; // Fecha o modal
});

// Função para fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
    if (event.target === helpModal) {
        helpModal.style.display = "none"; // Fecha o modal
    }
});

// Função para enviar o e-mail quando o botão é clicado
sendEmailBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Previne o comportamento padrão do botão

    const userName = userNameInput.value.trim(); // Obtém o nome do usuário
    const productName = productNameInput.value.trim(); // Obtém o nome do produto
    const userMessage = userMessageTextarea.value.trim(); // Obtém a mensagem do usuário

    // Verifica se todos os campos estão preenchidos
    if (userName && productName && userMessage) {
        // Cria o link mailto com o assunto e corpo preenchidos
        const subject = `${userName} - ${productName}`;
        const body = encodeURIComponent(userMessage);
        const mailtoLink = `mailto:netoarlindo389@gmail.com?subject=${subject}&body=${body}`;

        // Redireciona para o mailto, abrindo o cliente de e-mail padrão
        window.location.href = mailtoLink;
    } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
    }
});
