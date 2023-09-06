// Função para atualizar a data e hora em tempo real
function atualizarDataHora() {
  var dataHoraAtual = new Date();

  // Elementos HTML para a data e hora
  var elementoData = document.getElementById("data");
  var elementoHora = document.getElementById("hora");

  // Obtendo partes da data e hora
  var data = dataHoraAtual.toLocaleDateString();
  var hora = dataHoraAtual.toLocaleTimeString();

  // Atualizando os elementos HTML
  elementoData.innerHTML = "Data atual: " + data;
  elementoHora.innerHTML = "Hora atual: " + hora;
}

// Chame a função inicialmente
atualizarDataHora();

// Atualize a cada segundo (1000 milissegundos)
setInterval(atualizarDataHora, 1000);
