
# 🎯 Jogo do Número Secreto - Versão 1

Bem-vindo à **Versão 1** do jogo do número secreto! Nesta versão, implementamos as funcionalidades básicas para que o usuário possa adivinhar um número secreto com base em uma entrada simples.

---

## 📚 O que foi implementado?

1. **Boas-vindas ao Jogo**
   - Uma mensagem inicial é exibida ao usuário usando `alert()` para introduzir o jogo.

2. **Definição do Número Secreto**
   - Foi atribuído um valor fixo à variável `numeroSecreto` como sendo o número a ser adivinhado .

3. **Entrada do Usuário**
   - Utilizamos o método `prompt()` para permitir que o jogador escolha um número entre 1 e 30.

4. **Estrutura Condicional (if)**
   - Verificamos se o número escolhido pelo jogador (`chute`) é igual ao `numeroSecreto`.
   - Caso o número seja correto, exibimos uma mensagem de sucesso no console.

---

## 💻 Código Fonte

```javascript
// Boas-vindas ao jogo
alert('Boas vindas ao jogo do número secreto');

// Definição do número secreto
let numeroSecreto = 25;

// Solicitação de chute do usuário
let chute = prompt('Escolha um número entre 1 e 30');

// Verificação do chute
if (chute == numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto (25)');
}
```

## 🛠️ Funcionalidades

Exibe uma mensagem de boas-vindas ao iniciar o jogo.
Permite ao usuário inserir um número como chute.
Verifica se o chute é igual ao número secreto.
Exibe uma mensagem de sucesso no console caso o chute esteja correto.

---

## 🌟 O que aprendi!

**Uso do `alert()`

Exibimos mensagens simples para interagir com o jogador.

**Uso do `prompt()`

Recebemos e processamos entradas do usuário diretamente no navegador.

**Estruturas Condicionais

Implementamos um bloco `if` para verificar a condição e responder de forma adequada.

---
💡 **Nota:** Esta versão é uma introdução ao conceito do jogo e serve como base para expansões futuras.
