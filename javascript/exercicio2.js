//Faça um programa que valide as informações:
//Nome: Maior que 3 caracteres
// Idade: Entre 0 e 150
// Salário: maior que zero
// Sexo: F ou M
// Estado Civil: s, c, v, d

let nome = prompt('Digite seu nome:');
while(nome.length <= 3) {
    alert (`Digite mais que 3 caracteres`)
   nome = prompt(`Digite o nome novamente`);
}
    
let idade = parseInt(prompt('Digite sua idade:'));
    while (isNaN(idade) || idade < 0 || idade > 150) {
        alert(`Digite uma idade maior do que 0 e menor 150`);
        idade = prompt(`Digite a idade novamente:`);
}

let salario = parseFloat(prompt('Digite um salário:'));
    while(isNaN(salario) || salario <=0) {
        alert(`Dgite um valor maior que 0`);
        salario = prompt(`Digite o salario novamente`);
}

let sexo = prompt(`Digite um sexo(f ou m):`). toLowerCase();
    while (sexo !== 'f' && sexo !== 'm') {
        alert('O sexo deve ser f ou m');
        sexo = prompt('Digite o sexo novamente');
    }

let estadoCivil = prompt('Digite um estado civil (s, c, v, d):'). toLowerCase();
    while(estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd') {
    estadoCivil = prompt(`Digite o Estado Civil novamente`);
}
alert(`Nome : ${nome}\nIdade: ${idade}\nSalario: ${salario}\nSexo: ${sexo}\nEstadoCivil: ${estadoCivil}`);
    