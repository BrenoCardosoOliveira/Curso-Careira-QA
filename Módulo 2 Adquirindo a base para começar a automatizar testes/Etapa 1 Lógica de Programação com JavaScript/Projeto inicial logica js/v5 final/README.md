# 🎯 Jogo do Número Secreto - Versão 5

Bem-vindo à **Versão Final** do jogo do número secreto! Nesta versão, o jogador pode personalizar o intervalo máximo para o número secreto, tornando o jogo mais dinâmico e interativo. Além disso, adicionamos a possibilidade de jogar novamente ao final de cada partida!

---

## 📚 O que foi implementado?

1. **Intervalo Personalizável pelo Jogador**  
   - O jogador define o intervalo máximo do número secreto no início do jogo. 

2. **Validação de Entrada do Intervalo**  
   - Apenas números inteiros positivos de até 4 dígitos (1 a 9999) são aceitos.

3. **Laço de Repetição para Tentar Novamente**  
   - Após descobrir o número secreto, o jogador pode optar por reiniciar o jogo.

4. **Mensagens Interativas e Dicas Dinâmicas**  
   - As mensagens continuam adaptadas para informar se o número secreto é maior ou menor que o chute.

---

## 💻 Código Fonte

```javascript
do {
    alert("Boas-vindas ao jogo do número secreto!");

    // Solicitar o número máximo ao jogador
    let numeroMaximo = Number(prompt("Informe o número máximo para o jogo (deve ser um número inteiro de até 4 dígitos):"));
    while (isNaN(numeroMaximo) || numeroMaximo <= 0 || numeroMaximo > 9999) {
        numeroMaximo = Number(prompt("Valor inválido. Informe um número inteiro positivo de até 4 dígitos (1 a 9999):"));
    }

    // Gerar número secreto aleatório
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    console.log(`Dica!\nO número secreto é: ${numeroSecreto}`);

    let chute;
    let tentativa = 1;

    // Loop principal do jogo
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
```
---

## 🛠️ Funcionalidades

- **Personalização do Intervalo do Número Secreto:**

   O jogador define o intervalo máximo entre 1 e 9999.

- **Validação Robusta de Entrada:**

   O jogo só prossegue se o jogador fornecer um número inteiro positivo válido.

- **Reinício Automático:**

   Após cada partida, o jogador pode optar por tentar novamente ou encerrar.

- **Mensagens Dinâmicas com Dicas:**

   Indicam se o número secreto é maior ou menor que o chute.

---
## 🌟 O que aprendi

1. **Validação de Entrada com isNaN e Condições Lógicas:**

   - Garantimos que o jogador insira valores válidos.

2. **Uso de Loops Aninhados:**

   - Mantemos o jogo em execução até que o número secreto seja descoberto ou o jogador decida parar.

3. **Personalização de Experiência:**

   - Adicionamos opções para personalizar o intervalo máximo e repetir o jogo.

4. **Controle de Fluxo com do...while:**

   - Permitimos que o jogador continue jogando sem reiniciar manualmente.

5. **Mensagens Interativas:**

   - Criamos mensagens dinâmicas que adaptam o feedback para melhorar a experiência do jogador.
