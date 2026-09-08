# Enriquecimento de CSS — para o Murilo (turma #11342)

O Murilo já viu CSS introdutório e está adiantado, mas **esquece bastante**.
Então: **5 desafios de médio porte** que constroem **um projeto de verdade** —
o *Painel da Guilda* — peça por peça, num **único** `estilo.css` que cresce a
cada etapa.

- As tarefas **dão os valores** (hex, px, nomes de propriedade). A dificuldade
  vem do **tamanho** de cada desafio e de **não quebrar** o que já foi feito —
  não de adivinhar CSS.
- Nada de matéria nova da grade. Só seletores (tag/classe/id), cor, tipografia
  e caixa. O que **não** pode usar está no
  [CARTAO-DE-MEMORIA.md](./CARTAO-DE-MEMORIA.md).

## Como funciona

```text
enriquecimento/
├── CARTAO-DE-MEMORIA.md    <- folha de consulta (deixe numa aba aberta)
├── painel/
│   ├── painel.html         <- HTML fixo. NUNCA editar.
│   └── estilo.css          <- SEU arquivo. Cresce do D1 ao D5.
├── desafios/
│   ├── d1-fundacao.md ... d5-refatorar.md
└── gabarito/
    ├── d1-acumulado.css ... d5-acumulado.css   <- como o estilo.css deve
    │                                              estar ao FIM de cada desafio
    └── d5-tema-fogo.css / d5-tema-pergaminho.css
```

1. Abrir `painel/painel.html` no navegador (fica aberto o tempo todo).
2. Abrir o desafio da vez em `desafios/`.
3. Fazer o **Aquecimento de 5 min** (reconstruir de memória, sem olhar).
4. Adicionar ao `painel/estilo.css` o que o desafio pede; recarregar a página.
5. Bater o **CHECK** e a **Rubrica** do desafio.
6. Conferir com o gabarito `dN-acumulado.css`. Só então passar adiante.

## Os 5 desafios

| # | Desafio | Constrói | Ponto de dificuldade | Tempo |
|--:|---------|----------|----------------------|------:|
| D1 | `d1-fundacao` | base da página, cabeçalho, rodapé | montar a fundação inteira de uma vez | ~30 min |
| D2 | `d2-blocos` | os 3 cartões `.bloco` + títulos | caixa + centralização sem quebrar o D1 | ~35 min |
| D3 | `d3-mural` | lista de missões + etiquetas | **acha e conserta um erro de seletor plantado** | ~35 min |
| D4 | `d4-ranking` | tabela do ranking + caixa de aviso | tabela + hierarquia visual | ~30 min |
| D5 | `d5-refatorar` | reorganiza tudo + 2º e 3º tema | **juntar as cores num bloco só; trocar de tema mexendo o mínimo** | 1 aula + casa |

**Sessões:** D1+D2 na aula de enriquecimento · D3+D4 na seguinte · D5 na
terceira, com o 3º tema de casa.

## Contra o esquecimento

- **Aquecimento** no início de cada desafio: reconstruir de memória um trecho
  pequeno do anterior, sem olhar.
- **"Se travar, revise:"** em cada desafio aponta o item exato do cartão ou do
  desafio anterior.
- No fim de cada desafio, ele escreve **1 frase** em comentário no CSS sobre o
  que aprendeu.
- Como é **um arquivo só que cresce**, ele revisita o próprio trabalho toda
  aula — o que já fez não some.
- Se esquecer algo no meio, **refaça o desafio anterior** (são curtos de
  propósito).

Registrar progresso em `alunos/progresso/turma-11342.md` (coluna Observações:
até que desafio o Murilo chegou). Fluxo em
[WORKFLOW-AULAS.md](../../alunos/WORKFLOW-AULAS.md).
