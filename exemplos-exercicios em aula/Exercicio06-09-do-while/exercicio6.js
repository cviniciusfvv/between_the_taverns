// Função para determinar a estação do ano e o nome do mês com base no mês fornecido
function determinarEstacaoDoAno() {
  var mesNumero = parseInt(document.getElementById("mes").value);
  var resultado = document.getElementById("resultado");

  var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  var estacao;

  switch (mesNumero) {
    case 12:
    case 1:
    case 2:
      estacao = "Verão";
      break;
    case 3:
    case 4:
    case 5:
      estacao = "Outuno";
      break;
    case 6:
    case 7:
    case 8:
      estacao = "Inverno";
      break;
    case 9:
    case 10:
    case 11:
      estacao = "Primavera";
      break;
    default:
      estacao = "Mês inválido";
      break;
  }

  resultado.textContent =
    "Mês: " + meses[mesNumero - 1] + ", Estação do ano: " + estacao;
}
