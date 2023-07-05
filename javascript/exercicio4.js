let populacaoA = parseInt( prompt(`Digite a população A:` ));
let populacaoB = parseInt( prompt(`Digite a população B:` ));
let taxaCrescimentoA = parseFloat(prompt(`Digite a taxa de crescimento da população A:`));
let taxaCrescimentoB = parseFloat(prompt(`Digite a taxa de crescimento da população B:`));
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA /100;
    populacaoB += populacaoB * taxaCrescimentoB / 100;
    anos++;
}

alert(`a quantidade de anos necesssario para a PopulaçãoA ultrapassar a População B é: ${anos}`)