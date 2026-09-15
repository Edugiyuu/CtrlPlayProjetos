# A Vila e a Caverna #3 — monstro, batalha e poção

Aula **#7** da turma **#11333 (CT1)** — Guilherme.
O jogo ganha **risco**. O aluno cria o monstro no banco de dados do jogo, monta
o grupo de inimigos, coloca o chefe no fundo da caverna e dá ao jogador uma
poção pra ter chance de sobreviver.

> Substitui "Clones? Projéteis? Inimigos? Parte 2" do cronograma oficial.
> Parte do bloco de 6 aulas de RPG Paper Maker (#3 a #8). Cronograma oficial
> inalterado — adaptação registrada no progresso da turma.

## De onde o aluno está saindo

Aula #6: os 3 mapas ligados por 4 teleportes; o fundo da caverna está decorado
com um espaço vazio reservado. Ele conhece dois comandos (`Show text...`,
`Teleport object...`) e sabe que objeto sem gráfico funciona igual.
**Nunca** abriu a janela `Datas` — hoje é o primeiro contato com "o jogo tem
um banco de dados".

## O que o aluno pratica

- A janela **`Datas`**: `Monsters`, `Troops`, `Items` (o que é cada aba)
- Diferença entre **monstro** (a ficha) e **troop/grupo** (quem aparece na
  luta)
- O comando **`Start a battle...`** e suas opções (`Allow escape`,
  `Defeat causes Game Over`)
- Criar um **item** e entregá-lo com `Modify inventory...`
- Fazer o monstro **sumir do mapa** depois de derrotado
  (`Remove object from map...`)

## O que fica de fora (de propósito)

Variável, condição, final do jogo, `Deploy` — é tudo aula #8. Skills novas,
equipamento, classes e curva de XP: **não abrir**, é buraco sem fundo. Se ele
quiser criar 5 monstros: um bom, depois os outros se sobrar tempo.

## Formato

Bloco 1: `Datas` (monstro + grupo). Bloco 2: o objeto que inicia a batalha.
Bloco 3: item e baú. O `DESAFIO.md` ("O covil") junta tudo e balanceia a luta.

## Como rodar

<https://rpg-paper-maker.com/play> → `A Vila e a Caverna` em **Recent
projects**, ou `File > Import project...` com o `.zip` da aula #6.

> ⚠️ `CTRL + E` no fim da aula, sempre.

## Arquivos

```text
07-aula-rpgpm-batalha-e-itens/
├── README.md              # este arquivo (professor)
├── ROTEIRO-AULA.md        # professor: blocos de tempo, marco mínimo, erros comuns
├── DESAFIO.md             # ALUNO: o que fazer e o que testar
├── CARTAO-DE-MEMORIA.md   # ALUNO: folha de consulta (Datas, batalha, item)
└── gabarito/
    └── GABARITO.md        # professor: caminhos exatos + números de balanceamento
```

## Registro pós-aula

Despejo cru: até onde chegou, onde travou, o que cortar na #8 (última!).
Fluxo em [alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
