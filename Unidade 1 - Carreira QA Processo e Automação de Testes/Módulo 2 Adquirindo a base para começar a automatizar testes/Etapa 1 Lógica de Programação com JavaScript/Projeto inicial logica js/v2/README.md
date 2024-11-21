# 🎯 Jogo do Número Secreto - Versão 2

Bem-vindo à **Versão 2** do jogo do número secreto! Nesta versão, aprimoramos a lógica do jogo para incluir tentativas múltiplas, dicas interativas e contagem de tentativas, tornando a experiência mais dinâmica e desafiadora.

---

## 📚 O que foi implementado?

1. **Mensagem de Boas-vindas**  
   - Uma introdução ao jogo com `alert()` para envolver o jogador.

2. **Dica Inicial**
   - O número secreto é exibido no console para facilitar a depuração durante o desenvolvimento.

3. **Laço de Repetição (`while`)**
   - Permite que o jogador continue tentando até acertar o número secreto.

4. **Dicas Interativas**
   - Feedback ao jogador se o chute foi maior ou menor que o número secreto.

5. **Contador de Tentativas**
   - O número de tentativas é exibido ao jogador quando ele acerta o número secreto.

---

## 💻 Código Fonte

```javascript
// Boas-vindas ao jogo
alert("Boas vindas ao jogo do número secreto!");

// Definição do número secreto
let numeroSecreto = 25;
console.log(`Dica!\nO número secreto é: ${numeroSecreto}`);

// Variáveis de controle
let chute;
let tentativa = 1;

// Loop principal do jogo
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número de 1 a 30");

    // Se o chute for correto
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas! 😄`);
    } else {
        // Se o chute for menor que o número secreto
        if (chute < numeroSecreto) {
            alert("Você errou! 😢");
            alert(`Dica: O número secreto é maior que ${chute}... 🤫 \nTente novamente! 🤭`);
        } 
        // Se o chute for maior que o número secreto
        else {
            alert("Você errou! 😢");
            alert(`Dica: O número secreto é menor que ${chute}... 🤫 \nTente novamente! 🤭`);
        }
        tentativa++;
    }
}
```
---

## 🛠️ Funcionalidades

- **Interatividade Melhorada:**

Agora, o jogador pode fazer várias tentativas até acertar o número secreto.

- **Feedback Instantâneo:**

Dicas interativas ajudam o jogador a entender se o número secreto é maior ou menor que o chute.

- **Contador de Tentativas:**
O jogo exibe o número de tentativas feitas até acertar o número secreto.

---

## 🌟 O que aprendir!

- **Laços de Repetição (`while`)**

Utilizamos o while para manter o jogo em execução enquanto o jogador não acerta.

- **Uso de Variáveis de Controle**

Criamos a variável `tentativa` para rastrear o número de tentativas realizadas.

- **Mensagens Dinâmicas**

Usamos template strings para construir mensagens personalizadas com emojis e informações interativas.

- **Estruturas Condicionais**

Aprimoramos a lógica do jogo para fornecer dicas úteis dependendo do chute do jogador.
