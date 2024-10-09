// URL do SheetMonkey (substitua pela URL fornecida)
const scriptURL = 'https://api.sheetmonkey.io/form/iggxmyA8GvxMyRsuzc2qEq';

// Captura o envio do formulário
document.getElementById('welcomeGiftForm').onsubmit = function(event) {
  event.preventDefault(); // Previne o comportamento padrão de envio do formulário

  // Coleta os dados do formulário
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  // Validação simples
  if (!email || !phone) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Dados que serão enviados para o SheetMonkey
  var formData = new FormData();
  formData.append('E-mail', email);
  formData.append('Telefone', phone);
  formData.append('Created', 'x-sheetmonkey-current-date-time'); // Adiciona a data/hora atual

  // Envia os dados via POST para o SheetMonkey
  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // Verifica se a resposta foi bem-sucedida (status HTTP 200-299)
    if (!response.ok) {
      throw new Error("Erro na resposta do servidor: " + response.statusText);
    }
    // Tenta analisar a resposta como JSON
    return response.json().catch(() => {
      // Caso o JSON seja inválido ou ausente, retorna um objeto padrão
      return { success: true };
    });
  })
  .then(response => {
    // Verifica se a resposta foi bem-sucedida
    if (response && response.success !== false) {
      alert('Obrigado! Seus dados foram enviados com sucesso. 🎉\n\n' +
            'Em breve, você receberá seu presente especial no e-mail fornecido.\n\n' +
            'Enquanto isso, aproveite para explorar nossas planilhas automatizadas, ' +
            'desenvolvidas especialmente para facilitar o seu dia a dia. Confira agora ' +
            'e descubra como elas podem otimizar seu trabalho! 🚀');
      closeModal('welcomeGiftModal'); // Fecha o modal após o envio
    } else {
      throw new Error('Resposta de sucesso não confirmada.');
    }
  })
  
  .catch(error => {
    console.error('Erro ao enviar os dados:', error);
    alert('Ocorreu um erro ao enviar seus dados. Tente novamente.');
  });
};

// Função para abrir o modal automaticamente quando a página carrega
window.onload = function() {
    document.getElementById('welcomeGiftModal').style.display = 'flex';
};

// Função para fechar o modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}
