document.getElementById('meuForm').addEventListener('submit', function(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var reclamacao = document.getElementById('reclamacao').value;

    if (!nome || !email || !cpf) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      event.preventDefault();
    } else {
      alert('Formulário enviado com sucesso!\nReclamação: ' + reclamacao);
    }
  });