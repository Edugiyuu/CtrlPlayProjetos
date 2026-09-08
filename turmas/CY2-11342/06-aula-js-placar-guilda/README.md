# Placar da Guilda — primeiro JavaScript (DOM)

Aula **#6** da turma **#11342 (CY2)** — aluno **Murilo** (nível #5).
Continuação direta da aula #5 ("Colocando estilo"): **o mesmo painel**, o
*Painel da Guilda*, que até agora era uma foto parada. Nesta aula ele passa a
**agir** — o aluno escreve JavaScript para **somar pontos no placar**.

> **Por que JS numa aula que o cronograma chama de "Configurações Especiais"?**
> A parte de seletores avançados de CSS (`:hover`, `:nth-child`, `::before`)
> rendia pouca mudança visível e prendia o aluno em detalhe. Trocada por um
> primeiro contato com JS/DOM, que dá resultado na tela a cada clique e é o que
> o Murilo pediu para ver. Não muda o cronograma oficial (JS "formal" segue na
> aula #12) — é adaptação pontual, registrada no progresso da turma.

## O que o aluno pratica

- Ligar um `.js` na página (`<script src>`) e usar o **Console** (F12).
- Achar elementos: `document.querySelector` / `querySelectorAll`, e
  `elemento.querySelector` / `.closest()` para navegar a partir de um elemento.
- Ler e trocar conteúdo: `.textContent`, `.value`, e `Number(...)` para poder
  somar.
- Reagir a evento: `elemento.addEventListener("click", function () { ... })`.
- Rodar o mesmo código para vários elementos: `querySelectorAll` + `.forEach`.
- Criar elementos: `createElement`, `.innerHTML` com template (` `` ` + `${}`),
  `.appendChild` (E4).
- Guarda com `if (...) return;`.

Sem matéria além disso — **nada** de frameworks, `fetch`/API, `localStorage`,
`async`, `setTimeout` (aulas bem mais à frente).

## Formato

Mesma trilha da aula #5: **4 desafios acumulativos** (`desafios/e1..e4`) sobre
**um único `placar.js`** que cresce. As tarefas dizem **o alvo, o efeito e o
que testar** — o Murilo **escreve cada trecho**; código pronto só no gabarito.
Cada desafio tem aquecimento de memória, CHECK e um "se travar, revise".

- **E1 + E2** na aula (E2 fecha o marco mínimo).
- **E3** na aula se sobrar tempo; **E4** de casa.

## Como rodar

Não instala nada.

1. Abrir `painel/painel.html` no navegador e apertar **F12** → aba **Console**
   (deixe aberto — todo erro de JS aparece lá).
2. Abrir `CARTAO-DE-MEMORIA.md` numa aba (folha de consulta da aula #6).
3. Seguir os desafios em `desafios/`, editando só `painel/placar.js`.
   O `painel/placar.js` já vem só com o cabeçalho de instruções.
4. Conferir cada etapa com `gabarito/eN-placar.js`.

## Arquivos

```text
06-aula-js-placar-guilda/
├── README.md                 # este arquivo (professor)
├── ROTEIRO-AULA.md           # professor: blocos de tempo, perguntas, registro
├── CARTAO-DE-MEMORIA.md      # aluno: folha de consulta de JS/DOM
├── painel/
│   ├── painel.html           # painel da aula #5 + botões/campos "mortos" — NÃO editar
│   ├── estilo.css            # visual pronto da aula #5 — NÃO editar
│   └── placar.js             # só o cabeçalho; o aluno cresce daqui
├── desafios/
│   └── e1-ligar-o-js.md … e4-novo-heroi.md
└── gabarito/
    └── e1-placar.js … e4-placar.js   # como o placar.js deve estar
                                      # ao FIM de cada desafio
```

## Pré-requisito real

Murilo fez a aula #5 (CSS: seletores, cor, tipografia, caixa) e a trilha de
enriquecimento até o D3/D5. Já sabe HTML bem e lê CSS com conforto.
**JavaScript é novidade total** — esta é a primeira aula de lógica/DOM dele.
