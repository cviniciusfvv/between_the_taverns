// Função para sortear um número aleatório
function sortearNumero() {
  var numeroSorteado = Math.floor(Math.random() * 100) + 1; // Gere um número entre 1 e 100 (você pode ajustar o intervalo conforme necessário)
  var numeroSorteadoSpan = document.getElementById("numeroSorteado");
  numeroSorteadoSpan.textContent = numeroSorteado;
}
