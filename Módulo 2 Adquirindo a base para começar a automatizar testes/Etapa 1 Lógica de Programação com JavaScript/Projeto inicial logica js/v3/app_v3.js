alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(`Dica!\nO numero secreto é: ${numeroSecreto}`);
let chute;
let tentativa = 1;

// enquanto o chute não for igual ao N.S.
while(chute != numeroSecreto){
    chute = Number(prompt("Escolha um número de 1 a 100"));
    // se chute for igual ao número secreto
if (chute == numeroSecreto){
    break;
    
}else{
// se chute for maior ao número secreto
    if(chute < numeroSecreto){
        alert("Você errrou! \uD83D\uDE22 ");
        alert(`Dica: O número secreto é maior que ${chute}...\uD83E\uDD2B \n Tente novamente!\uD83E\uDD2D`);
// se chute for menor ao número secreto
    }else{
        alert("Você errrou! \uD83D\uDE22");
        alert(`Dica: O número secreto é menor que ${chute}...\uD83E\uDD2B\n Tente novamente!\uD83E\uDD2D`);
    }
    tentativa++
   }
   
}

// Operador ternário
let palavaTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Prabéns! Você descobriu o número secreto!  ${numeroSecreto} com ${tentativa} ${palavaTentativa} \uD83D\uDE04`);

//if(tentativa > 1){
//      alert(`Prabéns! Você descobriu o número secreto!  ${numeroSecreto} com ${tentativa} tentativas \uD83D\uDE04`);
//}else{
//  alert(`Prabéns! Você descobriu o número secreto!  ${numeroSecreto} com ${tentativa} tentativa \uD83D\uDE04`);
//}
