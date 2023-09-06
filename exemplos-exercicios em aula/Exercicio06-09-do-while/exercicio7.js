var listaNumeros = document.getElementById("numeros");

function exibirNumero(numero) {
    var itemLista = document.createElement("li");
    itemLista.textContent = numero;
    listaNumeros.appendChild(itemLista);
}

function contarComAnimacao() {
    var contador = 1;
    
    function proximoNumero() {
        if (contador <= 10) {
            exibirNumero(contador);
            contador++;
            setTimeout(proximoNumero, 500); // 500ms de atraso entre os números
        }
    }

    proximoNumero();
}

contarComAnimacao();