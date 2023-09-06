// Função para calcular a idade com base no dia, mês e ano de nascimento
function calcularIdade() {
  var diaNascimento = parseInt(document.getElementById("diaNascimento").value);
  var mesNascimento =
    parseInt(document.getElementById("mesNascimento").value) - 1; // O mês começa em 0 (janeiro) no objeto Date
  var anoNascimento = parseInt(document.getElementById("anoNascimento").value);

  var dataNascimento = new Date(anoNascimento, mesNascimento, diaNascimento);
  var dataAtual = new Date();

  var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

  // Verifica se o aniversário já ocorreu este ano
  if (
    dataAtual.getMonth() < mesNascimento ||
    (dataAtual.getMonth() === mesNascimento &&
      dataAtual.getDate() < diaNascimento)
  ) {
    idade--;
  }

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Sua idade é: " + idade + " anos.";
}
