# Gerador de Herói 🦸

Na tela já tem 3 cards: **🧑 Nome**, **🛡️ Classe** e **⚔️ Arma**, todos com `?`.
Hoje cada clique em **🎲 Criar herói** vai sortear um herói novo, cada pedaço no seu card.

| Card | id |
|---|---|
| 🧑 Nome | `caixaNome` |
| 🛡️ Classe | `caixaClasse` |
| ⚔️ Arma | `caixaArma` |

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

3. **Um card pra cada.** Ainda dentro da função:

   ```js
   document.getElementById("caixaNome").innerText = nome;
   document.getElementById("caixaClasse").innerText = classe;
   document.getElementById("caixaArma").innerText = arma;
   ```

   Com aspas (`"caixaNome"`) é o nome do card. Sem aspas (`nome`) é o que foi sorteado.
   **Teste:** clique várias vezes. Os 3 cards mudam juntos.

   ✅ **Pronto o principal.**

## Desafio

1. **Cada classe com o seu emoji.** Crie `let emojis = ["🧙", "⚔️", "🏹", "🥷"];` na mesma ordem das classes.
   Sorteie o número **uma vez só** e use nas duas listas. O emoji vai no lugar do 🦸 lá em cima (`id="emoji"`):

   ```js
   let n = Math.floor(Math.random() * 4);
   let classe = classes[n];
   let emoji = emojis[___];
   ```

   **Teste:** o Ninja sempre aparece com 🥷.
2. **Um 4º card: 💪 Força.** Copie um card no HTML, troque o título e o id (`caixaForca`).
   Sorteie `Math.floor(Math.random() * 100) + 1` e mostre nele.
3. **Um 5º nome.** Coloque mais um nome na lista. Ele aparece alguma vez? O que precisa mudar?
4. **Bônus: a frase.** Embaixo do botão, um `<h2 id="frase"></h2>` mostrando `Kira é Ninja e usa Cajado do Trovão!`.
   Dica: junte os pedaços com `+`, e não esqueça os espaços: `nome + " é " + classe`.

## Check

- [ ] Cada clique muda os 3 cards.
- [ ] Você sabe dizer: por que `* 4`?
- [ ] Você sabe dizer: qual a diferença entre `"caixaNome"` e `nome`?

## Travou?

| Você vê | Faça |
|---|---|
| nada acontece | F12 → Console. Faltou vírgula na lista ou uma aspa? |
| `Cannot set properties of null` | o id está escrito igual ao do HTML? `caixaNome`, com N maiúsculo |
| `undefined` num card | o número do `*` é igual ao tamanho da lista? O nome da lista está certo (`nomes`, com s)? |
| aparece a palavra `nome` no card | variável vai **sem** aspas: `nome`, não `"nome"` |
