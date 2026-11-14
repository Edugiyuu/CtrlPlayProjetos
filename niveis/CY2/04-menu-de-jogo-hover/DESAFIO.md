# O menu do jogo

Você recebe o menu de um jogo: um título e 3 botões (Jogar, Opções, Sair). Tudo sem cor.
No fim, cada botão **reage ao mouse** de um jeito diferente, e devagar, como num jogo de verdade.

## O que tem no HTML

Cada botão tem **dois apelidos**, igual às cartas de monstro:

```html
<div class="botao jogar">Jogar</div>
```

| Apelido | Pra que serve |
|---|---|
| `botao` | o visual **igual** nos 3 botões |
| `jogar`, `opcoes`, `sair` | o que cada botão faz **quando o mouse passa** |

## As duas ideias de hoje

**1. `:hover`** — uma regra que só vale **enquanto o mouse está em cima**. Tirou o mouse, ela some:

```css
.jogar:hover {
  background-color: #22C55E;
}
```

O `:hover` vai **colado** no apelido, sem espaço.

**2. `transition`** — faz a mudança acontecer **devagar**, em vez de pular. Fica na regra **normal**:

```css
.botao {
  transition: 0.3s;
}
```

`0.3s` quer dizer 0,3 segundo. Quanto maior o número, mais devagar.

## Faça

1. **Abra** o `index.html` no VS Code e no navegador.
   **Teste:** um título e 3 palavras soltas, preto no branco.

2. **Monte o menu, sozinho** — com o que você já sabe:
   - `body`: fundo `#0F172A`
   - `h1`: letra `#FFFFFF`, `padding: 20px;`
   - `.botao`: fundo `#334155`, letra `#FFFFFF`, `padding: 20px;`, `margin-bottom: 16px;`,
     `border: 4px solid #FFFFFF;` e `border-radius: 12px;`

   **Teste:** um menu escuro com 3 botões de borda branca, separados.

3. **O primeiro hover** — escreva a regra `.jogar:hover` com `background-color: #22C55E;`
   **Teste:** passe o mouse no "Jogar": ele fica verde **de uma vez**. Tire o mouse: volta. Os outros não mudam.

4. **Devagar** — no `.botao { }` (o normal!), acrescente `transition: 0.3s;`
   **Teste:** o verde agora aparece **aos poucos**. Troque pra `2s` e veja bem devagar. Depois `0.1s`. Volte pra `0.3s`.

5. **Opções desliza** — regra `.opcoes:hover` com `margin-left: 40px;`
   **Teste:** o botão anda pra direita com o mouse e volta quando você tira.

6. **Sair muda duas coisas** — regra `.sair:hover` com **duas** linhas:
   `background-color: #EF4444;` e `border-radius: 40px;`
   **Teste:** o botão fica vermelho **e** vira pílula ao mesmo tempo, os dois devagar.

   ✅ **Pronto o principal.**

## Desafio

1. **Um botão novo, do zero.** Embaixo do "Sair", escreva você o HTML de um 4º botão, **Loja**,
   com os dois apelidos (`botao` e `loja`). Depois invente o `.loja:hover` com **pelo menos 2 mudanças**
   (cor, padding, margin, borda, canto... você escolhe).
   **Teste:** a Loja já nasce com o visual dos outros e anima devagar **sem você escrever `transition` de novo**. Por quê?
2. **O teste do lugar errado.** Tire o `transition` do `.botao` e ponha só dentro do `.jogar:hover`.
   Passe o mouse e tire. O que acontece na **volta**? Depois devolva pro lugar certo.

## Check

- [ ] Os 4 botões reagem ao mouse, cada um de um jeito.
- [ ] Todas as mudanças acontecem devagar, na ida e na volta.
- [ ] Você sabe dizer: o `transition` vai na regra normal ou na do hover?

## Travou?

| Você vê | Faça |
|---|---|
| o hover não faz nada | `:hover` colado no apelido: `.jogar:hover`, sem espaço |
| muda de uma vez, sem animar | o `transition` está no `.botao`? Tem o `s` no fim (`0.3s`)? |
| anima na ida e pula na volta | o `transition` foi pro `:hover`; ele mora na regra **normal** |
| o botão novo ficou sem visual | ele tem o apelido `botao`? Precisa dos dois: `class="botao loja"` |
| parou de funcionar do nada | falta `;` no fim de uma linha, ou falta o `}` |
