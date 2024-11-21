alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 25;
console.log(`Dica!\nO numero secreto é: ${numeroSecreto}`);
let chute;
let tentativa = 1;
// enquanto o chute não for igual ao N.S.
while(chute != numeroSecreto){
    chute = prompt("Escolha um número de 1 a 30");
    // se chute for igual ao número secreto
if (chute == numeroSecreto){
    alert(`Prabéns! Você descobriu o número secreto!  ${numeroSecreto} com ${tentativa} tentativas \uD83D\uDE04`);
// se chute for maior ao número secreto
}else{
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