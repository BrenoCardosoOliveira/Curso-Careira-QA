do {
    alert("Boas-vindas ao jogo do número secreto!");

    // Solicitar o número máximo ao jogador
    let numeroMaximo = Number(prompt("Informe o limete máximo para o jogo (deve ser um número inteiro de até 4 dígitos):"));
    while (isNaN(numeroMaximo) || numeroMaximo <= 0 || numeroMaximo > 9999) {
        numeroMaximo = Number(prompt("Valor inválido. Informe um número inteiro positivo de até 4 dígitos (1 a 9999):"));
    }

    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    console.log(`Dica!\nO número secreto é: ${numeroSecreto}`);
    let chute;
    let tentativa = 1;

    // Enquanto o chute não for igual ao número secreto
    while (chute !== numeroSecreto) {
        chute = Number(prompt(`Escolha um número de 1 a ${numeroMaximo}`));

        if (chute === numeroSecreto) {
            break;
        } else {
            if (chute < numeroSecreto) {
                alert("Você errou! 😢");
                alert(`Dica: O número secreto é maior que ${chute}... 🤯 \nTente novamente! 😅`);
            } else {
                alert("Você errou! 😢");
                alert(`Dica: O número secreto é menor que ${chute}... 🤯 \nTente novamente! 😅`);
            }
            tentativa++;
        }
    }

    // Mensagem de vitória
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}! 😄`);

} while (confirm("Deseja jogar novamente?"));
