let resposta = prompt(`Eu sou bonito?`).toLowerCase().trim();
// let respostaNaoSatisfatoria = resposta != `sim` && resposta != `s`;

while(resposta != `sim` && resposta != `s`) {
    alert(`Resposta errada! Tente novamente.`);
    resposta = prompt(`Eu sou bonito?`).toLowerCase(). trim();
   // respostaNaoSatisfatoria = resposta != `sim`&& resposta != `s`;
}

alert(`Parabéns! Você acertou!`);
