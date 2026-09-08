# Ficha de Herói — Colocando estilo (CSS)

Aula #5 da turma **#11342 (CY2)** — primeira aula de CSS. O aluno recebe uma
página pronta em HTML (`index.html`) e aprende a estilizá-la escrevendo o
`style.css` do zero.

## O que o aluno pratica

- As 3 formas de aplicar CSS (inline, interno, externo)
- Sintaxe `seletor { propriedade: valor; }`
- Seletores de **tag**, **classe** (`.`) e **id** (`#`)
- Cores: nome, hexadecimal, `rgb()`
- Tipografia: `font-family`, `font-size`, `font-weight`, `font-style`,
  `text-align`, `line-height`
- Caixa: `border`, `border-radius`, `padding`, `margin`

## Escopo

Somente introdução ao CSS. **Não** inclui `display`/`flex`/`grid`,
`position`, `:hover`, variáveis, media queries, animações ou frameworks —
isso é matéria de aulas seguintes da grade e não deve ser adiantado.

## Como executar

Abra `index.html` no navegador. Não instala nada.
Ao editar `style.css`, salve e recarregue a página (F5).

## Arquivos

```text
05-aula-css-colocando-estilo/
├── index.html    # página pronta em HTML (o aluno NÃO precisa mexer)
├── style.css     # CSS de referência (resultado final)
├── ROTEIRO-AULA.md        # visão do professor (blocos de tempo, escopo)
└── AULA-PASSO-A-PASSO.md  # a aula, código por código
```

Para dar a aula: entregue o `index.html` com um `style.css` **vazio** e siga
o [AULA-PASSO-A-PASSO.md](./AULA-PASSO-A-PASSO.md). O `style.css` deste
repositório é o gabarito.

## Aluno que já domina o conteúdo

A pasta [enriquecimento/](./enriquecimento/README.md) tem **5 desafios de
médio porte** que constroem um projeto único (o Painel da Guilda) num só
`estilo.css` acumulativo — mesmo assunto da aula (seletores, cor, tipografia,
caixa), sem matéria nova. Feita para o Murilo (#11342), que já domina o
básico mas esquece bastante: as tarefas dão os valores prontos, mas cada
desafio trabalha um bloco inteiro e não pode quebrar o anterior. Inclui
`CARTAO-DE-MEMORIA.md` (folha de consulta) e um gabarito por desafio.
