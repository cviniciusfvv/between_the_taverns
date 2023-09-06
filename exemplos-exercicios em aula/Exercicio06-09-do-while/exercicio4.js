var numeroSecreto;
var tentativas = 0;

// Função para iniciar o jogo e gerar um número aleatório
function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 5) + 1;
  tentativas = 0;
}

// Função para verificar o palpite do usuário
function verificarPalpite() {
  var palpite = parseInt(document.getElementById("palpite").value);
  var dica = document.getElementById("dica");
  var mensagem = document.getElementById("mensagem");

  switch (true) {
    case palpite === numeroSecreto:
      dica.textContent = "Parabéns! Você acertou!";
      mensagem.textContent = "Número de tentativas: " + (tentativas + 1);
      dica.style.color = "green";
      mensagem.style.color = "green";
      document.getElementById("palpite").disabled = true;
      break;
    case palpite < numeroSecreto:
      dica.textContent = "Tente um número maior.";
      tentativas++;
      break;
    case palpite > numeroSecreto:
      dica.textContent = "Tente um número menor.";
      tentativas++;
      break;
  }

  document.getElementById("palpite").value = "";
  document.getElementById("palpite").focus();
}

// Inicie o jogo quando a página carregar
window.onload = function () {
  iniciarJogo();
};
