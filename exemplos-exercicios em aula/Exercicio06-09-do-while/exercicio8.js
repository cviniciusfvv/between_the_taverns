var listaNumeros = document.getElementById("numeros");

function exibirNumero(numero) {
  var itemLista = document.createElement("li");
  itemLista.textContent = numero;

  // Verifica se o número é par ou ímpar e exibe ao lado
  var parImpar = document.createElement("span");
  parImpar.textContent = numero % 2 === 0 ? " (Par)" : " (Ímpar)";
  if (numero % 2 === 0) {
    itemLista.classList.add("par");
  } else {
    itemLista.classList.add("impar");
  }

  itemLista.appendChild(parImpar);
  listaNumeros.appendChild(itemLista);
}

function contarComAnimacao() {
  var contador = 1;
  while (contador <= 10) {
    exibirNumero(contador);
    contador++;
  }
}

contarComAnimacao();
