# Desafio — Fechar o Boletim da Escola (5 tabelas ligadas)

**Tempo:** ~30 min · **Dificuldade:** ▓▓▓░░
**Onde você trabalha:** uma aba de **Query** do Beekeeper Studio, conectada ao
seu `escola.sqlite`.
**Nunca** apague as tabelas que já funcionam (`professores`, `materias`) pra
"começar limpo" — o desafio é construir **em cima** do que já está de pé.

Você já tem duas tabelas relacionadas: `professores` e `materias`, com a chave
estrangeira `materias.professor_id` funcionando (você viu o banco recusar um
`professor_id` que não existia, e chegou do nome da matéria até o nome do
professor seguindo a chave na mão). Agora faltam as três tabelas que
transformam isso num boletim de verdade: a turma, o aluno e a nota.

Você **escreve o SQL**. Aqui só tem o alvo, as colunas e o que testar.

**Lembretes rápidos:**

- `PRAGMA foreign_keys = ON;` vale **por conexão**. Se você reconectou o
  Beekeeper, rode essa linha de novo antes de qualquer coisa — senão o banco
  aceita chave estrangeira inválida e você não percebe.
- Uma tabela só pode ser criada **depois** da tabela que ela referencia.
- Num "um-para-muitos", a chave estrangeira mora no lado do **muitos**.
- Chave estrangeira guarda **o `id`** da outra tabela, nunca o nome.
- Pra ir de uma tabela à outra você **segue a chave na mão**: lê o valor da
  chave estrangeira e faz outro `SELECT ... WHERE id = <aquele valor>`.

---

## Aquecimento (3 min)

Sem abrir o Beekeeper, responda pro professor:

- Uma turma tem vários alunos. Em qual das duas tabelas vai a chave
  estrangeira — `turmas` ou `alunos`? Por quê?
- Por que não dá pra guardar a nota numa coluna `nota` dentro da tabela
  `alunos`?

---

## O que fazer

### 1. Tabela `turmas`

- Crie a tabela com: um `id` que seja a chave primária, `nome` (obrigatório,
  ex.: `'9º A'`) e `ano`.
- Essa é a única tabela nova que **não** tem chave estrangeira nenhuma.
  Antes de escrever, responda: por quê?
- Cadastre 2 turmas.
- **Teste agora:** `SELECT` na `turmas` devolve 2 linhas, cada uma com um `id`
  diferente.

### 2. Tabela `alunos`

- Alvo: cada linha é **um aluno, que está em uma turma**.
- Colunas: `id` (chave primária), `nome` (obrigatório) e a chave estrangeira
  que aponta pra turma.
- A chave estrangeira é declarada com `FOREIGN KEY (...) REFERENCES ...` na
  criação da tabela, igual você fez em `materias`.
- Cadastre 4 alunos — **coloque você e a sua turma de verdade entre eles** — e
  deixe pelo menos 3 na **mesma** turma (é o "muitos" do um-para-muitos
  acontecendo).
- **Teste agora:** um `SELECT` na `alunos` filtrando por um `turma_id` devolve
  os 3 alunos daquela turma, e só eles.

### 3. Tabela `notas` — a tabela de junção

- Alvo: cada linha é **a nota de um aluno em uma matéria**. Um aluno com nota
  em 3 matérias vira 3 linhas aqui.
- Colunas: `id` (chave primária), a chave estrangeira que aponta pro aluno, a
  chave estrangeira que aponta pra matéria, `valor` (número com vírgula) e
  `bimestre`.
- São **duas** chaves estrangeiras na mesma tabela. Cada uma precisa do seu
  próprio `FOREIGN KEY ... REFERENCES ...`.
- Cadastre, para **um** dos seus alunos, 3 notas em matérias diferentes, todas
  do bimestre 1.
- **Teste agora:** `SELECT` na `notas` filtrando por aquele `aluno_id` devolve
  3 linhas, com `materia_id` diferentes em cada uma.

### 4. Quebre de propósito (não pule esta etapa)

- Tente cadastrar uma nota para um aluno que não existe (um `aluno_id` absurdo,
  tipo `999`).
- **Teste agora:** o banco tem que **recusar**, com `FOREIGN KEY constraint
  failed`. Se ele aceitou, o problema não é o seu SQL — é o `PRAGMA` (releia os
  lembretes).
- Anote a mensagem de erro exata. Você vai precisar dela no CHECK.

### 5. A corrente de 3 saltos

Alvo: partir de **uma linha da tabela `notas`** e descobrir **o nome do
professor** daquela matéria — sem nenhum comando novo, só `SELECT` com `WHERE`.

- Salto 1: pegue uma nota e anote o valor do `materia_id` dela.
- Salto 2: busque na `materias` a linha com aquele `id`. Anote o
  `professor_id`.
- Salto 3: busque na `professores` a linha com aquele `id`. Aí está o nome.
- Faça o mesmo caminho pro outro lado da nota: do `aluno_id` até o **nome da
  turma** do aluno.
- **Teste agora:** você consegue dizer em voz alta, olhando uma linha de
  `notas`: "esta é a nota do aluno *fulano*, da turma *tal*, na matéria *tal*,
  que é dada pelo professor *tal*" — e mostrar de qual `SELECT` saiu cada
  pedaço.

---

## CHECK

- [ ] As 5 tabelas aparecem na barra lateral do Beekeeper.
- [ ] Você consegue apontar, em cada uma das 5, qual é a chave primária.
- [ ] Você consegue dizer **quantas** chaves estrangeiras cada tabela tem e
      pra onde cada uma aponta.
- [ ] Você consegue dizer **por que** a chave estrangeira da turma ficou em
      `alunos` e não em `turmas`.
- [ ] O `INSERT` da etapa 4 foi **recusado**, e você sabe dizer quem recusou:
      o banco ou o Beekeeper.
- [ ] Você fez a corrente de 3 saltos e chegou no nome do professor.
- [ ] Você consegue dizer **por que** a tabela `notas` precisa existir, em vez
      de uma coluna `nota` dentro de `alunos`.

Confira com o professor.

---

## Se travar, revise

- **`no such table: alunos`** ao criar `notas` → você criou as tabelas fora de
  ordem. A tabela referenciada tem que existir primeiro.
- **`FOREIGN KEY constraint failed`** num INSERT que você acha que está certo →
  o `id` que você escreveu na coluna da chave estrangeira não existe na outra
  tabela. Dê um `SELECT` nela e confira os `id` de verdade (eles podem não
  começar em 1).
- **O INSERT errado da etapa 4 passou** → `PRAGMA foreign_keys = ON;` não está
  valendo nesta conexão. Rode e tente de novo.
- **`NOT NULL constraint failed: ...`** → você declarou a coluna como
  obrigatória e esqueceu de mandar valor pra ela no `INSERT`.
- **Segui a chave e não achei ninguém** → confira se você está buscando na
  tabela certa, e se está comparando com a coluna `id` (e não com outra).
- **A nota apareceu para o aluno errado** → você trocou a ordem das colunas no
  `INSERT`: o `aluno_id` foi parar no lugar do `materia_id`. Os dois são
  número, então o banco aceita numa boa — quem percebe é você.

---

## Antes de fechar

Escreva **uma frase** em comentário (`--`) no topo da sua aba de query:
por que a tabela `notas` precisa existir, explicando como se fosse pra alguém
que nunca viu banco de dados.

---

## Se sobrar tempo

1. Liste as notas abaixo de 6, da menor pra maior.
2. Descubra quantas notas um aluno tem, sem contar na mão (dica: existe uma
   função que conta linhas).
3. Ache a menor nota da escola inteira e, seguindo as chaves, descubra de qual
   aluno e de qual turma ela é.
