let contador = 0;

do {
    contador++;
    var resposta = prompt(`Eu sou bonito?`).toLowerCase().trim();
    if (resposta != `sim` && resposta != `s`) {
    alert(`Resposta errada! Tentativa ${contador}.`);
    }

} while (resposta != `sim` && resposta != `s`);

alert(`Parabéns! Você acertou!`);