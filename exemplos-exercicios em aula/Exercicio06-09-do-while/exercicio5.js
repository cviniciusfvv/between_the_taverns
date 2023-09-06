// Função para calcular a operação escolhida pelo usuário
function calcularOperacao() {
  var operacaoSelecionada = document.getElementById("operacao").value;
  var numero1 = parseFloat(document.getElementById("numero1").value);
  var numero2 = parseFloat(document.getElementById("numero2").value);
  var resultado = 0;

  switch (operacaoSelecionada) {
    case "1":
      resultado = numero1 + numero2;
      break;
    case "2":
      resultado = numero1 - numero2;
      break;
    case "3":
      resultado = numero1 * numero2;
      break;
    case "4":
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
      } else {
        alert("Não é possível dividir por zero.");
        return;
      }
      break;
  }

  var resultadoTexto = "Resultado: " + resultado;
  document.getElementById("resultado").textContent = resultadoTexto;
}

// Limpar o resultado quando os números ou a operação forem alterados
document.getElementById("numero1").addEventListener("input", function () {
  document.getElementById("resultado").textContent = "";
});

document.getElementById("numero2").addEventListener("input", function () {
  document.getElementById("resultado").textContent = "";
});

document.getElementById("operacao").addEventListener("change", function () {
  document.getElementById("resultado").textContent = "";
});
