# Minhas cartas de monstro

Você recebe 3 cartas de monstro sem cor: um de fogo, um de água e um de planta.
No fim, cada carta tem borda, canto redondo, a **cor do tipo dela**, e desliza quando o mouse passa. E você cria um monstro novo do zero.

## O que tem no HTML

Agora cada caixa tem **dois apelidos**, separados por espaço:

```html
<div class="card fogo">
  <h2>Brasa</h2>
  <p>Tipo fogo. Solta faísca quando espirra.</p>
</div>
```

| Apelido | Quem tem | Pra que serve |
|---|---|---|
| `card` | as 3 cartas | o que é **igual** em todas: borda, canto, espaço |
| `fogo`, `agua`, `planta` | só uma carta cada | o que é **diferente**: a cor |

## O que você vai usar hoje

| Propriedade | O que faz | Exemplo |
|---|---|---|
| `padding` | espaço **dentro** (aula 01) | `padding: 20px;` |
| `margin-bottom` | espaço **fora**, embaixo (aula 02) | `margin-bottom: 20px;` |
| `background-color` | pinta o **fundo** | `background-color: #FECACA;` |
| `border` | o contorno: **grossura, tipo, cor**, nessa ordem | `border: 4px solid #1E293B;` |
| `border-radius` | arredonda o canto | `border-radius: 16px;` |
| `:hover` | regra que só vale com o mouse em cima | `.card:hover { }` |
| `transition` | faz a mudança acontecer devagar | `transition: 0.3s;` |

## Faça

1. **Abra** o `index.html` no VS Code e no navegador.
   **Teste:** um título e 3 monstros, tudo preto e branco.

2. **O título e os cards, igual à aula 02** — sozinho, sem copiar:
   - `h1`: fundo `#1E293B`, letra `#FFFFFF`, `padding: 20px;`
   - `.card`: `padding: 20px;` e `margin-bottom: 20px;`

   **Teste:** título escuro, e os 3 monstros separados um do outro (ainda sem cor).

3. **A borda** — dentro do `.card { }`, acrescente:
   ```css
   border: 4px solid #1E293B;
   ```
   **Teste:** as 3 cartas ganharam um contorno escuro. Troque `4px` por `10px` e veja.

4. **O canto redondo** — no `.card { }`, acrescente `border-radius: 16px;`
   **Teste:** os 4 cantos de cada carta ficaram redondos.

5. **A cor do tipo** — agora o **segundo** apelido. Escreva uma regra nova:
   ```css
   .fogo {
     background-color: #FECACA;
   }
   ```
   **Teste:** **só** o Brasa ficou vermelho. Os outros continuam sem cor.

6. **Água e planta** — faça você as regras `.agua` (`#BFDBFE`) e `.planta` (`#BBF7D0`).
   **Teste:** cada monstro com a cor do tipo dele, e os 3 com a mesma borda.

   ✅ **Pronto o principal.**

7. **A carta se mexe** — `:hover` é uma regra que só vale **enquanto o mouse está em cima**. Escreva:
   ```css
   .card:hover {
     margin-left: 20px;
   }
   ```
   **Teste:** passe o mouse numa carta: ela pula pra direita. Tire o mouse: ela volta.
   Agora, dentro do `.card { }` (o normal, não o hover), acrescente `transition: 0.3s;`
   **Teste:** a carta agora **desliza** devagar, em vez de pular.

## Desafio

1. **Um monstro novo, do zero.** Embaixo do Broto, escreva você mesmo o HTML de um 4º monstro,
   do tipo **elétrico**: a caixa com os dois apelidos, o nome no `<h2>` e uma frase no `<p>`.
   Depois faça a regra `.eletrico` com um fundo amarelo (`#FEF08A`).
   **Teste:** a carta nova tem a mesma borda das outras **sem você escrever borda nenhuma**. Por quê?
2. **Um tipo seu.** Invente um 5º monstro de um tipo que não existe ainda (gelo, fantasma, pedra...)
   e escolha a cor dele.

## Check

- [ ] As 4 cartas têm a mesma borda e o mesmo canto redondo.
- [ ] Cada carta tem a cor do tipo dela.
- [ ] Você sabe dizer: o que vai no `.card` e o que vai no `.fogo`?

## Travou?

| Você vê | Faça |
|---|---|
| a carta nova ficou sem borda | ela tem o apelido `card`? Precisa ter os dois: `class="card eletrico"` |
| a carta nova ficou sem cor | o nome na regra é igual ao apelido? (`.eletrico` e `eletrico`) |
| a borda não aparece | a ordem é grossura, tipo, cor: `4px solid #1E293B` |
| a carta não se mexe com o mouse | `:hover` colado no nome, sem espaço: `.card:hover` |
| todas ficaram da mesma cor | você pôs o `background-color` no `.card` em vez do `.fogo` |
| parou de funcionar do nada | falta `;` no fim de uma linha, ou falta o `}` |
