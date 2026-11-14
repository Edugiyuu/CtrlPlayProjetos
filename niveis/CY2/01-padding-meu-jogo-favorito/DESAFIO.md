# Meu jogo favorito

Você recebe uma página com 3 coisas: um título, um texto e um botão. Tudo sem cor.
No fim, cada uma está numa caixa colorida, com o texto **descolado da borda**.

## O que tem no HTML

Cada coisa da página é uma **tag**. Ela abre, tem o conteúdo, e fecha com `/`:

```html
<h1>Meu jogo favorito</h1>
```

| Tag | O que é |
|---|---|
| `<h1>` | o título |
| `<p>` | o texto |
| `<button>` | o botão |

## A regra do CSS

O CSS fica dentro do `<style>`, lá em cima. Toda regra tem o mesmo formato:

```css
h1 {
  color: #FFFFFF;
}
```

**quem** (`h1`) `{` **o que** (`color`) `:` **valor** (`#FFFFFF`) `;` `}`

## As 3 propriedades de hoje

| Propriedade | O que faz | Exemplo |
|---|---|---|
| `color` | pinta a **letra** | `color: #FFFFFF;` |
| `background-color` | pinta o **fundo** | `background-color: #2563EB;` |
| `padding` | espaço **dentro** da caixa, entre a borda e o texto | `padding: 20px;` |

## Faça

1. **Abra** o `index.html` no VS Code e no navegador.
   **Teste:** um título, um texto e um botãozinho cinza. Tudo preto e branco.

2. **Pinte o título** — escreva no `<style>`:
   ```css
   h1 {
     background-color: #2563EB;
     color: #FFFFFF;
   }
   ```
   **Teste:** faixa azul com letra branca. Repare: a letra está **grudada** na borda da faixa.

3. **Padding no título** — dentro do `h1 { }`, acrescente `padding: 20px;`
   **Teste:** a letra descolou e a faixa azul ficou **mais alta**.
   Troque pra `60px` e veja. Depois `0px`. Depois volte pra `20px`.

4. **Pinte o botão** — faça uma regra `button { }` com `background-color: #22C55E;` e `color: #FFFFFF;`
   **Teste:** o botão ficou verde, mas pequeno e apertado.

5. **Padding no botão** — no `button { }`, acrescente `padding: 20px;`
   **Teste:** o botão ficou **grande**, com cara de botão de jogo.

   ✅ **Pronto o principal.**

6. **O texto numa caixa** — faça uma regra `p { }` com `background-color: #FEF3C7;` e `padding: 16px;`
   **Teste:** o texto está dentro de uma caixa amarela, sem encostar na borda.

## Desafio

Troque a página pro **seu** jogo favorito:

1. Mude o nome do jogo e a frase no HTML.
2. Troque as 3 cores de fundo por cores suas.
3. Deixe o botão **maior que o título**, mexendo só no `padding`.

## Check

- [ ] O título, o texto e o botão têm fundo colorido.
- [ ] Nada está grudado na borda da caixa.
- [ ] Você sabe dizer o que acontece com o fundo quando o `padding` aumenta.

## Travou?

| Você vê | Faça |
|---|---|
| salvei e não mudou nada | Ctrl+S no VS Code e F5 no navegador |
| a regra não pinta nada | o nome antes do `{` é igual à tag? (`h1`, `p`, `button`, sem `<` `>`) |
| parou de funcionar do nada | falta `;` no fim de uma linha, ou falta o `}` |
| a cor não aparece | tem o `#` antes do número da cor? |
