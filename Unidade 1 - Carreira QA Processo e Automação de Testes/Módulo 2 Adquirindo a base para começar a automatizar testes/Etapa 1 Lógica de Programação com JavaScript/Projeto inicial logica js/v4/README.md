# 🎯 Jogo do Número Secreto - Versão 4

Bem-vindo à **Versão 4** do jogo do número secreto! Nesta versão, tornamos o jogo ainda mais desafiador ao permitir um intervalo personalizável de números. Isso aumenta a dificuldade e a diversão!

---

## 📚 O que foi implementado?

1. **Intervalo Personalizado do Número Secreto**  
   - O número secreto agora é gerado entre 1 e um valor máximo definido pelo programador. Por padrão, o valor máximo é **5000**.

2. **Mensagens Interativas e Dicas Personalizadas**  
   - As dicas são ajustadas para informar se o número secreto é maior ou menor que o chute.

3. **Laço de Repetição (`while`)**  
   - O jogo continua até que o jogador acerte o número secreto.

4. **Contador de Tentativas**  
   - O jogo rastreia o número de tentativas feitas pelo jogador.

---

## 💻 Código Fonte

```javascript
alert("Boas vindas ao jogo do número secreto!");

// Definir o intervalo máximo
let numeroMaximo = 5000;

// Gerar número secreto aleatório
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`Dica!\nO número secreto é: ${numeroSecreto}`);

// Variáveis de controle
let chute;
let tentativa = 1;

// Loop principal do jogo
while (chute != numeroSecreto) {
    chute = Number(prompt(`Escolha um número de 1 a ${numeroMaximo}`));

    // Se o chute for correto
    if (chute == numeroSecreto) {
        break;
    } else {
        // Se o chute for menor que o número secreto
        if (chute < numeroSecreto) {
            alert("Você errou! 😢");
            alert(`Dica: O número secreto é maior que ${chute}... 🤫 \nTente novamente! 🤭`);
        } else {
            // Se o chute for maior que o número secreto
            alert("Você errou! 😢");
            alert(`Dica: O número secreto é menor que ${chute}... 🤫 \nTente novamente! 🤭`);
        }
        tentativa++;
    }
}

// Operador ternário para pluralizar 'tentativa'
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}! 😄`);
```
---

## 🛠️ Funcionalidades
-**Número Aleatório com Intervalo Personalizado:**
O jogador deve descobrir um número secreto gerado aleatoriamente entre 1 e 5000.

-**Dicas Personalizadas:**
Mensagens interativas ajudam o jogador a descobrir se o número secreto é maior ou menor que o chute.

-**Contador de Tentativas:**
O número de tentativas realizadas é exibido ao final do jogo.

---

## 🌟 O que aprendi!

1. Intervalo Personalizado no `Math.random()`

-Expandimos o intervalo do número secreto para até 5000.

2. Conversão de Strings para Números

-Garantimos que as entradas do jogador sejam tratadas como números.

3. Laços de Repetição com Condições

-Mantemos o jogo em execução até que o jogador acerte.

4. Template Strings para Mensagens Dinâmicas

-Mensagens interativas criadas com `${} `para exibir valores dinâmicos.

5. Condicional Ternária

-Adicionamos pluralização para exibir "tentativa(s)" corretamente.
