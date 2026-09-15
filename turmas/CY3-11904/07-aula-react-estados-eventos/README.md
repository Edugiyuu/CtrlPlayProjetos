# Catálogo da Loja — Favoritar e Contar com Estado

Aula **#7** da turma **#11904 (CY3)** — Miguel. Continua no **mesmo projeto**
Vite do Catálogo da Loja (aulas #5 e #6) — só mexe no `CardProduto.jsx`.

> Cronograma oficial chama esta aula de "Criando Equações Através de Estados
> e Eventos" (`useState` + `onClick`). Conteúdo do cronograma mantido; o que
> muda é o tema (catálogo de loja em vez de heróis/calculadora), igual nas
> aulas #5 e #6.

## De onde o aluno está saindo

Na aula #6 o Miguel foi muito bem: consolidou array de dados, `.map()`,
`key` e cálculo de valor derivado no JSX (`frete`). A tela é **estática** —
nada muda depois que a página carrega. Ele **não viu** `useState`, `onClick`
nem nenhum tipo de evento.

## O que o aluno pratica

- `useState`: guardar um valor que muda **dentro** do componente
- `onClick`: rodar uma função quando o usuário clica
- Atualizar estado corretamente (chamar a função `set`, nunca mudar a
  variável direto)
- Renderização condicional simples usando o estado (`{ }` no JSX)

## O que fica de fora (de propósito)

Estado "subindo" pro componente pai (ex.: um carrinho/contador geral no
`App.jsx`), inputs controlados, `useEffect`, limite/clamp no valor do
contador. Fica pra mais na frente, quando `useState` estiver mais redondo —
ver ideias registradas em `alunos/progresso/turma-11904.md`.

## Formato

Núcleo da aula = **1 conceito** (favoritar com `useState`+`onClick`), que já
é o marco mínimo. Contador de quantidade (+/-) é **bônus**, só se o marco
vier tranquilo. `DESAFIO.md` reforça os dois de outro jeito, ele faz sozinho.

## Como rodar

Mesmo projeto Vite das aulas #5/#6.

```bash
npm run dev
```

## Arquivos

```text
07-aula-react-estados-eventos/
├── README.md
├── ROTEIRO-AULA.md         # seu: blocos de tempo, perguntas, marco mínimo
├── DESAFIO.md              # do aluno: desafio curto, sem código pronto
└── gabarito/
    ├── DESAFIO-gabarito.md # seu: código completo da resposta, por etapa
    └── src/
        └── CardProduto.jsx # único arquivo que muda nesta aula (marco mínimo: favoritar)
```

> `App.jsx` e `produtos.js` não mudam nesta aula — por isso não estão
> repetidos no `gabarito/src/`. Use os mesmos arquivos da pasta
> `06-aula-react-lista-e-estado/gabarito/src/`.

## Registro pós-aula

Atualizar `alunos/progresso/turma-11904.md`: status da aula #7, até onde o
Miguel chegou de verdade (só favoritar? chegou no contador? fez o desafio?).
Fluxo em [alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
