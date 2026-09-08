# Aula passo a passo: Colocando estilo — Ficha de Herói

> Para o **Murilo** (turma #11342, aula #5). Ele já manda bem em HTML.
> Nesta aula a gente só mexe em **CSS** — deixar a página bonita.
> Siga na ordem. Cada passo tem código para digitar e um "Teste agora".

---

## Parte 0 — O que é CSS (conversa, sem código)

- **HTML** = a estrutura da página (títulos, listas, parágrafos).
- **CSS** = a aparência: cor, fonte, tamanho, espaçamento, bordas.
- A mesma página HTML pode ter mil visuais diferentes só trocando o CSS.

Abra o `index.html` no navegador. Está tudo lá, mas feio: preto no branco,
fonte padrão. Vamos mudar isso **sem tocar no HTML** (quase — só num passo).

---

## Parte 1 — As 3 formas de aplicar CSS (15–30 min)

Existem três jeitos de colocar CSS numa página:

**1. Inline** (no próprio elemento) — evite, bagunça o HTML:

```html
<h1 style="color: blue;">Ficha de Herói</h1>
```

**2. Interno** (`<style>` dentro do `<head>`):

```html
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>
```

**3. Externo** (arquivo `.css` separado, ligado com `<link>`) — **o certo**:

```html
<link rel="stylesheet" href="style.css" />
```

O `index.html` desta aula **já tem** essa linha. Então é só escrever no
arquivo `style.css`.

### Primeira regra

Abra `style.css` (está vazio) e digite:

```css
body {
  background-color: #10182b;
  color: #e8ecf5;
}
```

**Teste agora:** salve e recarregue a página. O fundo fica azul-escuro e o
texto quase branco.

### Anatomia de uma regra CSS

```
seletor {
  propriedade: valor;
}
```

- **seletor** — em quem essa regra manda (`body` = o corpo inteiro).
- **propriedade** — o que muda (`background-color`).
- **valor** — o novo valor (`#10182b`).
- Sempre termina cada linha com `;`.

---

## Parte 2 — Seletor de TAG (30–45 min)

Seletor de tag atinge **todos** os elementos daquele tipo.

Adicione no `style.css`:

```css
body {
  font-family: Verdana, Geneva, sans-serif;
  line-height: 1.6;
  padding: 24px;
  margin: 0;
}

h1 {
  color: #7cc4ff;
  font-size: 40px;
}

h3 {
  color: #7cc4ff;
}
```

**Teste agora:** a fonte muda em toda a página, o `h1` fica azul e grande, e
**os três `h3`** ("História", "Atributos", "Equipamento") ficam azuis de uma
vez só.

- `font-family` tem vários nomes: se o computador não tiver Verdana, usa
  Geneva; se não tiver, usa qualquer `sans-serif`.
- `line-height: 1.6` = espaço entre as linhas do texto (deixa a leitura leve).

---

## Parte 3 — Seletor de CLASSE (45–65 min)

Classe serve para estilizar **um grupo** de elementos que você escolhe.
No CSS, classe começa com **ponto** `.`.

Olhe o HTML: tem `class="subtitulo"`, `class="classe"`, `class="atributos"`,
`class="aviso"`, `class="cartao"`.

Adicione:

```css
.subtitulo {
  color: #9aa7c2;
  font-style: italic;
}

.classe {
  color: #9aa7c2;
  font-weight: bold;
}

.atributos li {
  color: #b6f0c2;
}
```

**Teste agora:**

- "Guilda dos Aventureiros de Ctrlândia" fica cinza e itálico.
- "Classe: Maga · Nível 7" fica cinza e negrito.
- Só a lista de **atributos** fica verde — a lista de equipamento não, porque
  ela não tem a classe `atributos`.

> `.atributos li` quer dizer: "os `<li>` que estão dentro de algo com a
> classe `atributos`".

---

## Parte 4 — Seletor de ID (65–75 min)

Id é para **um único** elemento. No CSS começa com **cerquilha** `#`.

O HTML tem `<h2 id="nome">`. Adicione:

```css
#nome {
  color: #ffd76a;
}
```

**Teste agora:** só o nome "Aurora, a Maga do Gelo" fica dourado.

### Quando usar cada seletor

| Seletor | Símbolo | Usa quando |
|--------|---------|------------|
| tag | (nenhum) | todos os elementos daquele tipo devem ficar iguais |
| classe | `.` | um grupo que você escolheu (pode repetir) |
| id | `#` | um elemento único na página |

---

## Parte 5 — Cores (75–85 min)

Três formas de escrever cor em CSS:

```css
h1 { color: red; }                     /* nome */
h1 { color: #7cc4ff; }                 /* hexadecimal */
h1 { color: rgb(124, 196, 255); }      /* vermelho, verde, azul (0 a 255) */
```

As três podem descrever a mesma cor. Hexadecimal é o mais comum.

Deixe o `h1` de volta em `#7cc4ff` e teste `rgb()` numa propriedade para ver
que funciona igual.

---

## Parte 6 — A caixa: borda, padding e margin (85–110 min)

**Todo elemento HTML é uma caixa retangular.** Você controla:

- `border` — a linha em volta
- `padding` — espaço **por dentro**, entre o conteúdo e a borda
- `margin` — espaço **por fora**, entre essa caixa e as vizinhas

Estilize o cartão:

```css
.cartao {
  background-color: #1c2740;
  border: 3px solid #7cc4ff;
  border-radius: 12px;
  padding: 24px;
  max-width: 640px;
  margin: 0 auto;
}
```

**Teste agora:**

- O cartão ganha fundo azul, borda azul-clara e cantos arredondados.
- `padding: 24px` afasta o texto da borda.
- `max-width: 640px` + `margin: 0 auto` centralizam o cartão na tela.

Experimente trocar `padding: 24px` por `padding: 4px` e recarregar. Volte
para `24px`. Faça o mesmo teste com `margin`.

---

## Parte 7 — Acabamento (110–120 min)

Bordas nos títulos de seção e um box de aviso:

```css
h3 {
  border-bottom: 1px solid #33415f;
  padding-bottom: 4px;
}

.aviso {
  background-color: #3a2a12;
  color: #ffd76a;
  border-left: 5px solid #ffd76a;
  padding: 8px 12px;
  font-size: 14px;
}

.subtitulo {
  text-align: center;
}

header {
  text-align: center;
}

footer {
  text-align: center;
  color: #9aa7c2;
  font-size: 14px;
}
```

**Teste agora:** compare com o `index.html` no navegador — deve ficar igual
ao arquivo de referência `style.css` desta pasta.

---

## Fechamento — o que você aprendeu

| Ideia | Exemplo |
|------|---------|
| Regra CSS | `seletor { propriedade: valor; }` |
| CSS externo | `<link rel="stylesheet" href="style.css">` |
| Seletor de tag | `h3 { ... }` |
| Seletor de classe | `.aviso { ... }` |
| Seletor de id | `#nome { ... }` |
| Cores | nome, `#hex`, `rgb()` |
| Texto | `font-family`, `font-size`, `font-weight`, `text-align`, `line-height` |
| Caixa | `border`, `padding`, `margin`, `border-radius` |

---

## Desafios (você está adiantado — mas continua só CSS de cor e texto)

1. Refaça a paleta com um **tema de fogo** (vermelhos e laranjas).
2. Dê uma `background-color` diferente para cada `<h3>`.
3. Aumente o `line-height` do parágrafo da história para `2` e compare.
4. No HTML, envolva uma palavra da história em `<span class="destaque">` e
   crie a classe `.destaque` no CSS (cor + negrito).
5. Ajuste as `margin` das seções até o espaçamento ficar todo igual.
6. Troque `border` do cartão para `dashed` e depois `dotted`; escolha a que
   preferir.

---

## Se algo der errado

| Sintoma | Causa provável |
|--------|----------------|
| Nada muda | esqueceu de salvar o `style.css`, ou de recarregar a página |
| Uma regra não pega | faltou `.` na classe ou `#` no id no CSS |
| Da regra pra baixo tudo quebra | faltou um `;` ou um `}` |
| Cor não aparece | nome de cor errado ou `#` com menos de 6 dígitos |
| Só um elemento mudou quando queria vários | usou `#id` em vez de classe/tag |
