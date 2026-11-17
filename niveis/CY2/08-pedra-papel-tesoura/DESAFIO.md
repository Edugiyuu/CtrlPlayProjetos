# Pedra, Papel e Tesoura ✊✋✌️

Você recebe a tela do jogo pronta: Player 1, Bot, 3 botões e o resultado. Só que **nada funciona**.
Hoje você escreve o **JavaScript**: o arquivo que decide o que acontece quando alguém clica.

## A pasta

| Arquivo | Trabalho | Hoje |
|---|---|---|
| `index.html` | a tela | ✅ pronto |
| `style.css` | a cara | ✅ pronto |
| `script.js` | a ação | ✏️ você escreve |

Os 3 ficam **na mesma pasta**. No fim do HTML já tem a linha que chama o JS:

```html
<script src="script.js"></script>
```

## Faça

1. **Abra** a pasta no VS Code e o `index.html` no navegador. Clique nos botões.
   **Teste:** a tela aparece, mas clicar não faz nada.

2. **Ache os nomes.** No `index.html`, procure os 3 `id`: `escolha1`, `escolha2` e `resultado`.
   E veja o que cada botão chama: `onclick="jogar('pedra')"`.

3. **O clique.** No `script.js`, escreva:

   ```js
   function jogar(escolha) {
     document.getElementById("escolha1").innerText = escolha;
   }
   ```

   **Teste:** clique nos 3 botões. O `?` do Player 1 vira `pedra`, `papel`, `tesoura`.

4. **O bot sorteia.** **Dentro** da função, embaixo da linha do passo 3:

   ```js
   let opcoes = ["pedra", "papel", "tesoura"];
   let sorteio = Math.floor(Math.random() * 3);
   let bot = opcoes[sorteio];
   document.getElementById("escolha2").innerText = bot;
   ```

   **Teste:** clique várias vezes no mesmo botão. O Bot muda sozinho.

5. **Quem ganha?** Ainda **dentro** da função, no final:

   ```js
   let texto;
   if (escolha === bot) {
     texto = "Empate!";
   } else if (escolha === "pedra" && bot === "tesoura") {
     texto = "Você ganhou!";
   } else if (escolha === "papel" && bot === "pedra") {
     texto = "Você ganhou!";
   } else if (escolha === "tesoura" && bot === "papel") {
     texto = "Você ganhou!";
   } else {
     texto = "O bot ganhou!";
   }
   document.getElementById("resultado").innerText = texto;
   ```

   **Teste:** jogue até ver as 3 mensagens: `Empate!`, `Você ganhou!` e `O bot ganhou!`.

   ✅ **Pronto o principal.** Você fez um jogo de verdade.

## Desafio

1. **O placar.** No `index.html`, embaixo do resultado, crie `<p id="placar">Você 0 x 0 Bot</p>`.
   No **topo** do `script.js`, **fora** da função, crie `let vitorias1 = 0;` e `let vitorias2 = 0;`.
   Dentro da função, depois do `if`, some 1 em quem ganhou e mostre o placar:

   ```js
   if (texto === "Você ganhou!") { vitorias1 = vitorias1 + 1; }
   if (texto === "O bot ganhou!") { ________ = ________ + 1; }
   document.getElementById("placar").innerText = "Você " + vitorias1 + " x " + ________ + " Bot";
   ```

   **Teste:** o número sobe a cada vitória. Agora mude o `let vitorias1 = 0;` pra **dentro** da função. O que acontece? Por quê? Depois devolva.

2. **Primeiro a 3 vence.** Quando alguém chegar a 3 vitórias, o resultado mostra `FIM DE JOGO: você venceu!` (ou `o bot venceu!`).
   **Teste:** jogue até alguém fazer 3. Pra jogar de novo, aperte F5.

3. **Bônus: cor.** O texto do resultado fica verde quando você ganha e vermelho quando perde.
   Dica: `document.getElementById("resultado").style.color = "#22C55E";`

## Check

- [ ] Os 3 botões funcionam e o Bot escolhe sozinho.
- [ ] Aparecem as 3 mensagens: empate, ganhou e perdeu.
- [ ] Você sabe dizer: pra que serve o `id`? E por que `===` e não `=`?

## Travou?

Aperte **F12** e abra a aba **Console**: o erro diz a linha.

| Você vê | Faça |
|---|---|
| clica e nada acontece | falta `}` no fim da função, ou uma aspa sem fechar |
| `jogar is not defined` | o nome da função é igual ao do `onclick`? `jogar`, tudo minúsculo |
| `Cannot set properties of null` | o id no `getElementById` está escrito igual ao do HTML? |
| o Bot nunca muda | tem o `Math.floor(Math.random() * 3)`? |
| sempre "O bot ganhou!" | as palavras estão minúsculas (`"pedra"`)? Tem `===` (três iguais)? |
| o placar volta pra 0 | o `let vitorias1 = 0;` tem que ficar **fora** da função |
