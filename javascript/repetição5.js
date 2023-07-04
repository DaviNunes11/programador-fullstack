// Criar algoritmo que verifique a senha digitada e
// Bloqueie o acesso na quarta tentativa. Senha:12345
const senha = `12345`;
let feedback

for (let tentativa = 0; tentativa < 4; tentativa++) {
   let senhaDigitada = prompt(`Digite a sua senha:`);
        if(senhaDigitada == senha) {
        feedback = `Autorizado`
        break;
        
    }
    alert(`Senha inválida! Tentativa ${tentativa + 1} de 4`);
}

alert (`feedback`);
