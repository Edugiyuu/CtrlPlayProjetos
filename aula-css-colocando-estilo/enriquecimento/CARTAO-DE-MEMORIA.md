# Cartão de memória — CSS da aula "Colocando estilo"

> Uma página só. Consulte sempre que esquecer. É tudo que você pode usar nos desafios.

## A regra

```css
seletor {
  propriedade: valor;
}
```

Cada linha termina com `;`. O bloco fecha com `}`.

## Ligar o CSS no HTML

```html
<head>
  <link rel="stylesheet" href="estilo.css" />
</head>
```

## Os 3 seletores

| No HTML | No CSS | Serve para |
|---------|--------|-----------|
| `<h2>` | `h2 { }` | todos os `<h2>` |
| `class="aviso"` | `.aviso { }` | o grupo com essa classe |
| `id="nome"` | `#nome { }` | um elemento único |
| dentro de outro | `.lista li { }` | os `li` dentro de `.lista` |

Quem vence quando brigam: **id `#` > classe `.` > tag**.
Empate → vence a **última** escrita no arquivo.

## Cores

```css
color: white;              /* nome    */
color: #7cc4ff;            /* hex     */
color: rgb(124, 196, 255); /* rgb     */
background-color: #10182b;
```

## Texto

```css
font-family: Verdana, Geneva, sans-serif;  /* lista de reserva */
font-size: 20px;
font-weight: bold;         /* normal | bold */
font-style: italic;        /* normal | italic */
text-align: left;          /* left | center | right | justify */
line-height: 1.6;          /* espaço entre linhas */
```

## A caixa

```css
border: 2px solid #7cc4ff;   /* espessura  estilo  cor */
border-style: dashed;        /* solid | dashed | dotted */
border-radius: 12px;         /* cantos arredondados */
padding: 16px;               /* espaço POR DENTRO (conteúdo ↔ borda) */
margin: 16px;                /* espaço POR FORA (caixa ↔ vizinhos) */
max-width: 640px;            /* largura máxima */
margin: 0 auto;              /* centraliza uma caixa com max-width */
```

Listas: `list-style: none;` tira a bolinha; `padding: 0;` cola na margem.

## PROIBIDO nos desafios (matéria de aulas futuras)

`display`, `flex`, `grid`, `position`, `float`, `:hover`, `transition`,
`animation`, `transform`, variáveis `--cor`, `@media`, `!important`.
