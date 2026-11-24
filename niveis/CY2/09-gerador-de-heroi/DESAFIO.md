# Gerador de Herói 🦸

A carta do herói já está pronta, mas o botão **🎲 Criar herói** não faz nada.
Hoje cada clique vai sortear um herói novo: um **nome**, uma **classe** e uma **arma**.

## Faça

Tudo no `script.js`, dentro de uma função só:

```js
function gerar() {

}
```

1. **As três listas.** Dentro do `gerar()`:

   ```js
   let nomes = ["Kira", "Brann", "Lyra", "Tobi"];
   let classes = ["Mago", "Guerreiro", "Arqueiro", "Ninja"];
   let armas = ["Espada de Gelo", "Arco de Fogo", "Cajado do Trovão", "Martelo de Pedra"];
   ```

   **Teste:** clique no botão e aperte F12 → Console. Nenhum erro vermelho.

2. **Sorteie um de cada.** Embaixo das listas:

   ```js
   let nome = nomes[Math.floor(Math.random() * 4)];
   let classe = classes[Math.floor(Math.random() * 4)];
   let arma = armas[Math.floor(Math.random() * 4)];
   ```

   `* 4` porque cada lista tem 4 coisas. Sai 0, 1, 2 ou 3.

3. **Junte tudo numa frase.** Ainda dentro da função:

   ```js
   document.getElementById("heroi").innerText = nome + " é " + classe + " e usa " + arma;
   document.getElementById("emoji").innerText = "🦸";
   ```

   Olhe os **espaços dentro das aspas**: `" é "` e `" e usa "`.
   **Teste:** clique várias vezes. Cada clique é um herói diferente.

   ✅ **Pronto o principal.**

## Desafio

1. **Cada classe com o seu emoji.** Crie `let emojis = ["🧙", "⚔️", "🏹", "🥷"];` na mesma ordem das classes.
   Sorteie o número **uma vez só** e use nas duas listas:

   ```js
   let n = Math.floor(Math.random() * 4);
   let classe = classes[n];
   let emoji = emojis[___];
   ```

   **Teste:** o Ninja sempre aparece com 🥷.
2. **Força de 1 a 100 💪.** Sorteie `Math.floor(Math.random() * 100) + 1` e mostre na frase: `Kira é Ninja e usa Cajado do Trovão. Força: 73`.
3. **Um 5º nome.** Coloque mais um nome na lista. Ele aparece alguma vez? O que precisa mudar?

## Check

- [ ] Cada clique sorteia nome, classe e arma.
- [ ] A frase tem espaço entre todas as palavras.
- [ ] Você sabe dizer: por que `* 4`?

## Travou?

| Você vê | Faça |
|---|---|
| nada acontece | F12 → Console. Faltou vírgula na lista ou uma aspa? |
| `undefined` na frase | o número do `*` é igual ao tamanho da lista? O nome da lista está certo (`nomes`, com s)? |
| `KiraéNinja` | põe espaço dentro das aspas: `" é "` |
| aparece a palavra `nome` na tela | variável vai **sem** aspas: `nome`, não `"nome"` |
