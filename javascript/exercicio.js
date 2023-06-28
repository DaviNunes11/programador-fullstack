let nota = parseFloat(prompt(`Digite uma nota valida`));
let notaValida = nota >= 0 && nota <=10;

for (let i = 0; notaValida; i++) {
    alert(`Nota Invalida`);
    nota = parseFloat(prompt(`Digite uma nota valida:`));
    notaInvalida = isNaN(nota) || nota < 0 || nota > 10;
}
alert(`Programa encerrado com a nota ${nota}`);