# Bichinho Virtual 🐣

Seu bichinho tem 3 barras: **🍗 comida**, **⚽ alegria** e **⚡ energia**. Todas começam em 50.
Os botões já estão na tela, mas ainda não fazem nada. Hoje você dá vida a ele.

| Botão | Muda |
|---|---|
| 🍗 Alimentar | comida **+20** |
| ⚽ Brincar | alegria **+20**, energia **−15** |
| 💤 Dormir | energia **+30**, comida **−10** |

## Faça

1. **Os números que o jogo lembra.** No **topo** do `script.js`, **fora** de qualquer função:

   ```js
   let comida = 50;
   let alegria = 50;
   let energia = 50;
   ```

2. **O primeiro botão.**

   ```js
   function alimentar() {
     comida = comida + 20;
     atualizar();
   }
   ```

3. **Número vira barra.** A função que redesenha a tela:

   ```js
   function atualizar() {
     document.getElementById("barraComida").style.width = comida + "%";
     document.getElementById("barraAlegria").style.width = alegria + "%";
     document.getElementById("barraEnergia").style.width = energia + "%";
   }
   ```

   **Teste:** clique em Alimentar. A barra laranja cresce.

4. **Os outros dois botões, sozinho.** Escreva `brincar()` e `dormir()` do mesmo jeito que o `alimentar()`, usando a tabela lá de cima.
   Não esqueça do `atualizar();` no fim de cada um.
   **Teste:** as 3 barras mexem. Brincar faz a azul diminuir.

5. **O rosto muda.** No **fim** do `atualizar()`:

   ```js
   let rosto = "🙂";
   if (comida < 30) { rosto = "😫"; }
   if (alegria < 30) { rosto = "😢"; }
   if (energia < 30) { rosto = "😴"; }
   document.getElementById("bicho").innerText = rosto;
   ```

   `<` quer dizer **menor que**.
   **Teste:** clique em Brincar 2 vezes. O bichinho fica com sono 😴. Clique em Dormir e ele acorda.

   ✅ **Pronto o principal.**

## Desafio

1. **A barra fugiu! 😱** Clique em Dormir várias vezes. A barra passa do fim! Conserte: no **começo** do `atualizar()`, não deixe nenhum número passar de 100.

   ```js
   if (energia > 100) { energia = ___; }
   ```

   Faça o mesmo pra comida e alegria. E se ficar **menor que 0**?
2. **🌙 Passar um dia.** Crie um 4º botão no HTML e a função `passarDia()`: as 3 barras caem 20.
3. **⏰ Bônus: o dia passa sozinho.** No fim do `script.js`, fora das funções: `setInterval(passarDia, 5000);` (5000 = 5 segundos).

## Check

- [ ] Os 3 botões mexem nas barras certas.
- [ ] O rosto muda quando uma barra fica baixa.
- [ ] Você sabe dizer: por que os `let` ficam fora das funções?

## Travou?

| Você vê | Faça |
|---|---|
| nada acontece | F12 → Console: o erro diz a linha. Faltou `}` ou `;`? |
| o número muda mas a barra não | tem `atualizar();` no fim do botão? Tem `+ "%"`? |
| `Cannot read properties of null` | o id está escrito igual ao do HTML? `barraComida`, com C maiúsculo |
| o rosto nunca muda | é `<` (menor), não `>` |
| a barra passa do fim | é o desafio 1! |
