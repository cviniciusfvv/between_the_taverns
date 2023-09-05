function contar() {
    let saida = document.getElementById('saida');
    let cont = 1;

    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`;
        exibirMensagem(); // Exibe mensagem pop-up, se aplicável
        cont++;
        setTimeout(exibirMensagem, 1000 * cont); // Aguarda 1 segundo antes de continuar a contagem
    }

    saida.innerHTML += ` &#x1F3C1;`;


    function exibirMensagem() {
        if (cont === 5) {
            alert("Chegamos ao número 5!");
        } else if (cont === 10) {
            alert("Chegamos ao número 10!");
        }
    }

   
}

document.getElementById("iniciarContagem").addEventListener("click", contar);
