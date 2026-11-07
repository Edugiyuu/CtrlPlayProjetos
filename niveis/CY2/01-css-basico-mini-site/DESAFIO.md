# Deixe o site com cara de site

Você recebe 3 páginas HTML sem nenhuma cor. No fim da aula, pelo menos duas
estão pintadas e você clica no menu pra ir de uma pra outra.

## As 6 propriedades de hoje

| Propriedade | O que faz | Exemplo |
|---|---|---|
| `color` | pinta a **letra** | `color: #DC2626;` |
| `background-color` | pinta o **fundo** da caixa | `background-color: #FEF3C7;` |
| `padding` | espaço **dentro** da caixa | `padding: 24px;` |
| `margin` | espaço **fora**, empurrando os vizinhos | `margin-bottom: 20px;` |
| `border` | o contorno — **grossura, tipo, cor** nessa ordem | `border: 2px solid #CBD5E1;` |
| `border-radius` | arredonda os cantos | `border-radius: 12px;` |

E uma tag: `<a href="sobre.html">Sobre</a>` leva pra outro arquivo **da mesma pasta**.

## Onde escrever o CSS

Dentro do `<head>`, entre `<style>` e `</style>`:

```html
<style>
  body {
    background-color: #FFFFFF;
  }
</style>
```

Cada regra é: **quem** `{` **o que** `:` **valor** `;` `}`. O `;` no fim de cada
linha não é enfeite — sem ele, a linha de baixo para de funcionar.

## Faça

1. **Abra a pasta** `site/` no VS Code e abra o `index.html` no navegador.
   **Teste:** você vê o conteúdo, tudo preto no branco, sem nenhuma cor.

2. **Pinte o topo** — no `<style>`, dê `background-color` escuro e `color` branco
   pro `.header`. Faça o mesmo no `.menu`, com um tom um pouco mais claro.
   **Teste:** a faixa de cima ficou escura com letra branca.

3. **Dê ar pro texto** — `padding: 24px;` no `.header`, no `.menu` e no `.conteudo`.
   **Teste:** nada mais está grudado na beirada. Repare: o fundo colorido **cresceu junto**.

4. **Separe os cards** — pinte os dois `.card` com fundos diferentes e dê
   `padding: 20px;` e `margin-bottom: 20px;` neles.
   **Teste:** tem um vão entre os dois cards. Tire o `margin-bottom` e olhe de novo pra sentir a diferença.

5. **Arredonde** — `border-radius: 12px;` nos cards.
   **Teste:** os quatro cantos de cada card estão redondos.

6. **Ligue as páginas** — copie o seu `<style>` inteiro pra dentro do `sobre.html`.
   Confira que o menu das **duas** páginas tem os `<a href>` certos.
   **Teste:** você clica em "Sobre", vai pra outra página, clica em "Início" e volta. As duas estão pintadas.

## Check

- [ ] Clicando no menu você vai e volta entre `index.html` e `sobre.html`.
- [ ] As duas páginas têm o mesmo topo escuro.
- [ ] Você sabe dizer a diferença entre `padding` e `margin` sem olhar a tabela.
- [ ] Você sabe dizer por que `border: solid red 2px` não é o jeito certo.

## Travou?

| Você vê | Faça |
|---|---|
| salvei e não mudou nada | salve (Ctrl+S) e dê F5 no navegador |
| o CSS parou de funcionar do nada | falta `;` ou `}` numa regra **acima** da que você escreveu |
| a cor não aparece | `#` antes do hex? escreveu `color` e não `colour`? |
| "arquivo não encontrado" ao clicar no menu | o nome no `href` tem que ser **igual** ao do arquivo, maiúscula inclusive |
| o `padding` não fez nada | você aplicou num link ou num pedaço de texto, não numa caixa |

## Sobrou tempo

1. **`contato.html`** — mesmo tratamento, e um botão "Voltar para o início":
   um `<a href="index.html">` com `background-color`, `padding` e `border-radius: 8px;`.
2. **Sua paleta** — troque todos os hex por cores suas. Pegue em
   [coolors.co](https://coolors.co) e mantenha o texto legível em cima do fundo.
3. Conte quantas vezes você copiou o mesmo `<style>`. Guarde esse número — a
   aula 02 resolve isso com **um arquivo só**.
