# Meus 3 personagens favoritos

Você recebe uma página com um título e 3 personagens. Tudo sem cor.
No fim, cada personagem está num card amarelo, e os cards não encostam um no outro.

## O que tem no HTML

Cada personagem está dentro de uma **caixa**: a tag `<div>`. E toda caixa tem um **apelido**, o `class`:

```html
<div class="card">
  <h2>Mario</h2>
  <p>Pula em tudo e salva a princesa.</p>
</div>
```

Os 3 personagens têm o **mesmo apelido**: `card`.

## O apelido no CSS

No CSS, você chama a caixa pelo apelido, com um **ponto** na frente:

```css
.card {
  background-color: #FEF3C7;
}
```

Uma regra só, e ela vale pra **todas** as caixas com esse apelido.

## O que você vai usar hoje

| Propriedade | O que faz | Exemplo |
|---|---|---|
| `background-color` | pinta o **fundo** | `background-color: #FEF3C7;` |
| `color` | pinta a **letra** | `color: #FFFFFF;` |
| `padding` | espaço **dentro** da caixa (já viu na aula 01) | `padding: 20px;` |
| `margin-bottom` | espaço **fora** da caixa, embaixo dela | `margin-bottom: 20px;` |

## Faça

1. **Abra** o `index.html` no VS Code e no navegador.
   **Teste:** um título e 3 personagens, tudo preto e branco.

2. **O título, igual à aula 01** — escreva no `<style>`:
   ```css
   h1 {
     background-color: #2563EB;
     color: #FFFFFF;
     padding: 20px;
   }
   ```
   **Teste:** o título numa faixa azul, com a letra descolada da borda.

3. **Pinte os cards pelo apelido** — escreva:
   ```css
   .card {
     background-color: #FEF3C7;
   }
   ```
   **Teste:** os **3** personagens ficaram amarelos, e você escreveu a regra **uma vez só**.

4. **Padding no card** — dentro do `.card { }`, acrescente `padding: 20px;`
   **Teste:** o texto descolou da borda. Repare: agora os 3 cards estão **grudados** um no outro.

5. **Margin: separe os cards** — dentro do `.card { }`, acrescente `margin-bottom: 20px;`
   **Teste:** apareceu um espaço branco entre os cards. Troque pra `60px` e veja.
   O amarelo não cresceu: o margin fica **fora** da caixa.

   ✅ **Pronto o principal.**

## Desafio

1. Troque os 3 pelos **seus** personagens favoritos (nome e frase).
2. Troque a cor do card por uma cor sua.
3. Deixe os cards **mais longe** um do outro e o texto **mais longe** da borda. Qual dos dois é o `padding` e qual é o `margin`?

## Check

- [ ] Os 3 cards estão pintados com uma regra só.
- [ ] Os cards não encostam um no outro.
- [ ] Você sabe dizer: `padding` é dentro ou fora? E `margin`?

## Travou?

| Você vê | Faça |
|---|---|
| salvei e não mudou nada | Ctrl+S no VS Code e F5 no navegador |
| o `.card` não pinta nada | tem o **ponto** antes? É `.card`, não `card` |
| só um card ficou pintado | os 3 têm `class="card"` igualzinho? |
| parou de funcionar do nada | falta `;` no fim de uma linha, ou falta o `}` |
