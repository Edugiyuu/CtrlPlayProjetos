# Monte o seu Time de Heróis

> Arquivos de hoje: **`ficha.html`** (a página) e **`estilos.css`** (onde você escreve o CSS).

Na aula passada você fez um cartão. Hoje o cartão é de **personagem de jogo**: foto
redonda, nome, nível e uma barra de HP. Você recebe a página sem nenhuma cor, com
**um** cartão. No fim ela tem um título e **três** cartões, um do lado do outro.

## As propriedades novas de hoje

| Propriedade | O que faz | Exemplo |
|---|---|---|
| `width` / `height` | largura e altura da caixa | `width: 160px;` |
| `margin: 0 auto` | centraliza a **caixa** na tela (só funciona com `width`) | `margin: 0 auto;` |
| `text-align` | centraliza o que está **dentro** da caixa | `text-align: center;` |
| `font-size` | tamanho da letra | `font-size: 32px;` |
| `display: inline-block` | a caixa ocupa só a largura dela, então cabem várias na mesma fileira | `display: inline-block;` |

Você já sabe `color`, `background-color`, `padding`, `margin`, `border` e
`border-radius`. Elas voltam hoje.

## Onde escrever o CSS

Hoje o CSS fica num **arquivo separado**: `estilos.css`. O HTML já tem a linha
que liga os dois, dentro do `<head>`:

```html
<link rel="stylesheet" href="estilos.css">
```

Abra o `.css` no VS Code e escreva lá. Nada de CSS dentro do `.html`.
Cada regra é **quem** `{` **o que** `:` **valor** `;` `}`.
Salvou o `.css`? Dê F5 na página.

## O apelido da caixa (`class`)

No HTML, cada caixa tem um **apelido**: `<div class="ficha">`. No CSS, pra falar com
a caixa que tem esse apelido, você escreve **ponto + apelido**: `.ficha { ... }`.

```html
<div class="ficha">      ← apelido "ficha"
```
```css
.ficha {                 ← o ponto + o mesmo apelido
  padding: 28px;
}
```

Os apelidos já vêm escritos no HTML. Você só precisa escrever o mesmo no CSS, com o ponto.

| Apelido no CSS | Pinta... |
|---|---|
| `.titulo` | "Time de Heróis" |
| `.ficha` | o cartão inteiro |
| `.foto` | a imagem do personagem |
| `.nome` | o nome |
| `.nivel` | a pílula do nível |
| `.rotulo` | o texto "HP 70 / 100" |
| `.barra-fundo` | a barra cinza |
| `.barra-hp` | a barra vermelha |
| `.tipo` | "Classe: Maga · Reino de Aurora" |

## Faça

1. **Abra a pasta** `inicial/` no VS Code e abra o `ficha.html` no navegador e o `estilos.css` no VS Code.
   **Teste:** você vê um título, uma foto enorme e o texto embaixo, tudo sem cor.

2. **Pinte a página e o cartão** — `body` com fundo escuro (`#0F172A`). Na `.ficha`:
   `background-color: #1E293B;`, `padding: 24px;`, `border: 3px solid #22D3EE;`
   e `border-radius: 20px;`.
   **Teste:** aparece um cartão escuro com borda ciano, mas ele está esticado e colado na esquerda.

3. **Centralize o cartão** — na `.ficha`, `width: 300px;` e `margin: 40px auto;`.
   Depois `text-align: center;`.
   **Teste:** o cartão ficou estreito, no **meio** da tela, e o texto também está no meio.
   Tire o `width` e veja o que acontece com o `margin: auto`.

4. **Arrume a foto** — na `.foto`: `width: 160px;`, `height: 160px;`,
   `border: 4px solid #22D3EE;` e `border-radius: 80px;`.
   **Teste:** a foto encolheu e virou um **círculo**. Troque o radius por `20px` e olhe de novo.

5. **Nome e nível** — no `.nome`: `color: #FFFFFF;` e `font-size: 32px;`. No `.nivel`:
   `width: 120px;`, `margin: 0 auto;`, `padding: 8px;`, `background-color: #22D3EE;`,
   `color: #1E293B;`, `font-weight: bold;` e `border-radius: 20px;`.
   Os textos pequenos também: `.rotulo` e `.tipo` com `color: #CBD5E1;`.
   **Teste:** o nome ficou grande, o "Nível 12" virou uma pílula ciano no meio e dá pra ler todo o texto.

6. **A barra de HP** — são duas caixas, uma dentro da outra:
   - `.barra-fundo`: `width: 300px;`, `height: 20px;`, `margin: 0 auto;`,
     `background-color: #475569;` e `border-radius: 10px;`
   - `.barra-hp`: `height: 20px;`, `background-color: #EF4444;` e `border-radius: 10px;`

   - `.hp-70`: `width: 210px;`

   A barra vermelha tem **dois apelidos** na mesma tag, separados por espaço:
   `class="barra-hp hp-70"`. O `.barra-hp` dá a cor e a altura; o `.hp-70` dá a largura.
   **Teste:** uma barra vermelha cobre 70% da cinza. Mude o `210px` pra `90px` e o
   personagem está quase morto.

   ✅ **Seu primeiro cartão está pronto.** Os outros dois são cópia.

7. **O título** — no `.titulo`: `color: #FFFFFF;`, `text-align: center;`,
   `font-size: 40px;` e `margin-top: 40px;`.
   **Teste:** "Time de Heróis" grande e no meio, em cima do cartão.

8. **Faça 3 cartões** — selecione do `<div class="ficha">` até o `</div>` dele,
   `Ctrl + C`, e `Ctrl + V` logo abaixo. Faça isso duas vezes e troque o que muda:

   | | Foto (`src`) | Nome | Nível | HP escrito | 2º apelido da barra | Classe |
   |---|---|---|---|---|---|---|
   | 1 | `personagem.svg` | Lyra, a Maga | 12 | 70 | `hp-70` | Maga · Reino de Aurora |
   | 2 | `guerreiro.svg` | Brann, o Bravo | 8 | 30 | `hp-30` | Guerreiro · Reino de Ferro |
   | 3 | `arqueira.svg` | Kira, a Arqueira | 15 | 100 | `hp-100` | Arqueira · Floresta Verde |

   O único CSS novo: uma regra pra largura de cada barra, no `.css`:
   `.hp-30 { width: 90px; }` e `.hp-100 { width: 300px; }` (é HP ÷ 100 × 300).

   **Teste:** três cartões iguais no visual e diferentes no conteúdo, um **embaixo** do outro, e **você só
   escreveu uma regrinha pra largura da barra**. O resto já veio pintado. Pense por quê: quando você copiou o cartão,
   os apelidos (`class`) foram junto.

9. **Lado a lado** — na `.ficha`, troque o `margin: 40px auto;` por `margin: 20px 10px;`
   e acrescente `display: inline-block;` e `vertical-align: top;`. No `body`, ponha
   `text-align: center;`.

   `inline-block` faz a caixa ocupar **só a largura dela**, em vez da linha inteira; por isso
   os cartões cabem um do lado do outro. Agora o `margin: auto` não centraliza mais: quem
   põe a fileira no meio é o `text-align` do `body`.
   **Teste:** os três cartões em fileira, alinhados pelo topo. Se a janela for estreita,
   o último desce pra linha de baixo.

## Check

- [ ] O título está no meio e os três cartões estão pintados, lado a lado.
- [ ] A barra vermelha de cada cartão bate com o "HP" escrito acima dela.
- [ ] Você sabe dizer qual propriedade centraliza a **caixa** e qual centraliza o **texto**.
- [ ] Você sabe dizer o que é o apelido (`class`) e por que os cartões 2 e 3 já nasceram pintados.

## Travou?

| Você vê | Faça |
|---|---|
| salvei e não mudou nada | salvou o **`.css`** (não só o `.html`)? Dê F5 no navegador |
| a página abre sem cor nenhuma | o `.css` está na **mesma pasta** do `.html`? o nome no `<link href>` é igual ao do arquivo? |
| a foto aparece quebrada | a imagem precisa estar na **mesma pasta** que o HTML da aula, e o nome no `src` tem que ser igual |
| `margin: 0 auto` não centralizou | falta o `width` na caixa (depois do passo 9, quem centraliza é o `text-align` do `body`) |
| os cartões continuam um embaixo do outro | falta `display: inline-block;` na `.ficha`, ou a janela está estreita demais |
| o texto não ficou no meio | use `text-align: center;`, não `margin` |
| a barra não aparece | falta o `height` nela, ou o 2º apelido (`hp-70`) não tem regra no `.css` |
| uma regra não pinta nada | o apelido no CSS tem que ser igual ao do HTML, com o **ponto** na frente (`.nome`, não `nome`) |
| os cartões 2 e 3 sem cor | você mudou o apelido (`class`) na cópia: tem que ser igual ao do primeiro |
| o CSS parou de funcionar do nada | falta `;` ou `}` numa regra **acima** da que você escreveu |

## Sobrou tempo

1. **Hover (o mouse em cima)** — `:hover` é uma regra que só vale **enquanto o mouse está
   em cima** da caixa. Escreva uma regra nova, com o mesmo nome e `:hover` colado:

   ```css
   .nivel:hover {
     background-color: #F472B6;
   }
   ```

   **Teste:** passe o mouse na pílula de qualquer cartão e ela fica rosa; tire o mouse e ela volta.
   Agora ponha `transition: 0.3s;` dentro da regra **normal** `.nivel` (não na do hover):
   a cor passa a mudar devagar. Faça igual na `.foto`, com `border-color: #F472B6;` no hover.
2. **Barra de MP** — copie as duas caixas da barra de HP, escreva "MP 40 / 100"
   acima e pinte a de dentro de azul (`#3B82F6`) com `width: 120px;`.
3. **Seu herói** — troque nome, nível, classe e cores de um dos cartões. Calcule o
   `width` da barra: se o HP é 50 de 100, a barra vermelha tem metade dos 300px.
