# 🎯 Jogo do Número Secreto - Versão 3

Bem-vindo à **Versão 3** do jogo do número secreto! Nesta versão, implementamos um número secreto gerado aleatoriamente e ampliamos o intervalo de possibilidades para desafiar ainda mais os jogadores.

---

## 📚 O que foi implementado?

1. **Número Secreto Aleatório**  
   - Utilizamos `Math.random()` para gerar um número aleatório entre 1 e 100.

2. **Mensagens Interativas e Dicas Melhoradas**  
   - O jogo fornece dicas para ajudar o jogador a descobrir se o número secreto é maior ou menor que o chute.

3. **Laço de Repetição (`while`)**  
   - O jogo continua até que o jogador descubra o número secreto.

4. **Contador de Tentativas**  
   - O jogo rastreia e exibe o número de tentativas realizadas.

---

## 💻 Código Fonte

```javascript
alert("Boas vindas ao jogo do número secreto!");

// Gerar número secreto aleatório
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(`Dica!\nO número secreto é: ${numeroSecreto}`);

// Variáveis de controle
let chute;
let tentativa = 1;

// Loop principal do jogo
while (chute != numeroSecreto) {
    chute = Number(prompt("Escolha um número de 1 a 100"));

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
- **Número Aleatório:**
O número secreto é gerado de forma aleatória entre 1 e 100 a cada rodada.

- **Dicas Personalizadas:**
O jogador recebe feedback sobre se o número secreto é maior ou menor que o chute.

- **Contador de Tentativas:**
O jogo exibe o número de tentativas feitas antes do jogador acertar.

---

## 🌟 O que aprendi!

- **Geração de Números Aleatórios**

Utilizamos `Math.random()` para criar o número secreto de forma dinâmica.

- **Conversão de Strings para Números**

Usamos `Number()` para garantir que os valores fornecidos pelo jogador sejam tratados como números.

- **Laços de Repetição (`while`)**

Mantemos o jogo ativo até que o jogador acerte.

- **Template Strings**

Criamos mensagens interativas com valores dinâmicos usando `${}`.

- **Condicional Ternária**

Usamos o operador ternário para adequar o plural em "tentativa(s)".
