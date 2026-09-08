# Workflow de Aulas — organizar e planejar

Fluxo padrão para preparar, dar e registrar aulas neste repositório.

## Estrutura do repositório

```text
CtrlPlayAlunos/
├── alunos/
│   ├── progresso/                 # 1 arquivo por turma (turma-<id>.md)
│   ├── progresso-turma-template.md
│   ├── AULA-PASSO-A-PASSO-template.md  # modelo opcional do arquivo do aluno
│   └── WORKFLOW-AULAS.md          # este arquivo
├── turmas/
│   ├── README.md                   # índice: toda turma, horário, link pro progresso
│   └── <CÓDIGO>-<id>/               # 1 pasta por turma, ex.: CY4-11350
│       ├── README.md                # índice da turma: projetos na ordem do cronograma
│       └── <NN>-<projeto-da-aula>/  # 1 pasta por projeto/aula dessa turma
│           ├── README.md            # o que o aluno pratica + como rodar
│           ├── ROTEIRO-AULA.md      # SEU: roteiro minuto a minuto, perguntas, rubrica
│           └── AULA-PASSO-A-PASSO.md  # OPCIONAL: só quando o aluno vai fazer sozinho
└── outros-projetos/                 # material avulso, não preso a uma turma específica
    └── <projeto>/
```

Regra: **um projeto por pasta, dentro da pasta da turma dona daquele projeto**
(`turmas/<CÓDIGO>-<id>/<NN>-<projeto>/`), sempre com `README.md` e
`ROTEIRO-AULA.md`. `<CÓDIGO>` é o código curto da turma (CY4, CT3, CK3...) e
`<id>` é o número da turma — o mesmo do arquivo `alunos/progresso/turma-<id>.md`.
Isso evita confundir duas turmas do mesmo módulo (ex.: CY4 #11346 e CY4
#11350) e deixa fácil achar a pasta certa na hora de dar aula: abra
`turmas/`, ache o código da turma do dia, pegue o projeto.

`<NN>` é o número da aula no cronograma daquela turma, com dois dígitos
(`05-`, `06-`, ..., `18-`) — assim as pastas ficam em ordem cronológica só de
listar o diretório, sem precisar abrir o arquivo de progresso pra saber por
onde começar. Aula fora da numeração oficial (extra, reforço) usa o prefixo
`extra-` em vez de número.

Projeto que não pertence a nenhuma turma ativa (material genérico, de
workshop avulso, ou ainda não atribuído) vai em `outros-projetos/` na raiz.

O `AULA-PASSO-A-PASSO.md` é **opcional**. Só crie quando o aluno vai executar
sozinho (sem você conduzindo) — aula assíncrona, tarefa de casa, aluno adiantado.
Numa aula que você dá ao vivo, o `ROTEIRO-AULA.md` já basta. Quando fizer, use
[`alunos/AULA-PASSO-A-PASSO-template.md`](AULA-PASSO-A-PASSO-template.md).

## Conferir turmas atualizadas (rodar sempre, antes de planejar)

O portal da Ctrl Play é a fonte da verdade — turma, aluno matriculado e aula
atual mudam por lá sem avisar aqui (ex.: o Guilherme saiu da CK4 #10269
— concluída — e passou pra CT1 #11333; o repo só soube porque alguém rodou o
script e comparou). **Antes de planejar qualquer aula** (e pelo menos 1x por
semana), rodar:

```bash
python alunos/buscar_turmas.py
```

(precisa de `alunos/.env` com `CTRLPLAY_USER` e `CTRLPLAY_PASS` — arquivo
ignorado pelo git, ver `alunos/buscar_turmas.py` para o formato). Use
`--json` se quiser comparar campo a campo.

Comparar a saída com o que já existe em `alunos/progresso/` e `turmas/`:

- **Turma nova** (id não existe em `alunos/progresso/turma-<id>.md`) → criar
  o arquivo de progresso e a pasta `turmas/<CÓDIGO>-<id>/` correspondente.
- **Turma sumiu da lista do portal, virou `CONCLUDED`, ou não tem mais
  nenhum aluno ativo** → **apagar**, não arquivar: `alunos/progresso/turma-<id>.md`
  e a pasta `turmas/<CÓDIGO>-<id>/` inteira. Turma morta não fica de enfeite
  marcada `✅ Concluída` pra sempre — isso confunde na hora de procurar turma
  ativa (foi o que aconteceu com a CK4 #10269 e a CY3 #10007: ficaram
  registradas como se ainda importassem, com dado errado por cima). Só não
  apagar se a pasta da turma tiver projeto/material que ainda serve de
  referência — nesse caso, mover esse material para `outros-projetos/`
  primeiro, com uma nota de origem, e só então apagar a pasta da turma.
- **Aluno trocou de turma** → atualizar **os dois arquivos**, não só o novo:
  1. Na turma de **destino** (`turma-<id-novo>.md`): adicionar o aluno na
     tabela **Progresso por Aluno**, com uma nota de onde ele veio.
  2. Na turma de **origem** (`turma-<id-antigo>.md`): atualizar a linha do
     aluno — status muda de `ACTIVE_ENROLLMENT` para o que o portal disser
     (`CONCLUDED` etc.) e a Observação diz pra onde ele foi. **Não deixar a
     linha antiga como se ele ainda estivesse ativo lá** — foi exatamente
     esse o erro que passou batido com o Guilherme (CK4 #10269 → CT1 #11333):
     a turma de destino foi atualizada, mas a de origem ficou com
     `ACTIVE_ENROLLMENT` e "Próximos passos" apontando pra uma aula que já
     nem existia mais.
  3. Se a turma de origem **não tem mais nenhum aluno ativo**, ela se
     qualifica pra regra acima ("Turma sumiu... ou não tem mais nenhum aluno
     ativo") — apagar o arquivo e a pasta, não deixar só marcado.
  4. Registrar em `turmas-1-aluno` (memória) se alguma das duas turmas virou
     ou deixou de ser aula particular na prática.
- **"aula atual" do portal não bate com "Próximos passos"** no arquivo local
  → o registro pós-aula ficou pra trás; atualizar antes de planejar a próxima.

⚠️ **Nunca rodar `--gerar-progresso` em cima de uma turma que já tem
`turma-<id>.md` preenchido à mão.** Essa flag reescreve o arquivo inteiro a
partir do template e apaga qualquer Observação, link para pasta de projeto
ou nota manual (ex.: o pivot de currículo da CY4-11350 seria perdido). Use
`--gerar-progresso` só para gerar o arquivo de uma turma **nova**, que ainda
não existe em `alunos/progresso/`; para turma existente, ajustar o `.md` na
mão comparando com a saída do script.

## Adaptar a aula ao aluno (leia antes de escrever qualquer material)

O material tem que caber **no aluno**, não no tema. Referência: a aula de React
do Miguel (turma #11904) foi escrita para 2h e ele fez ~1/4 — instalou o Vite e
criou componentes com props, só. O material estava certo, mas grande demais.

- **O aluno escreve o código do ZERO.** Na maioria das aulas não se entrega
  nada pronto. Material do aluno diz *o que* fazer, *qual* recurso usar e *o
  que* testar — o aluno monta a linha. Código pronto só no gabarito/pasta de
  referência, que é sua. Exceção: comandos de terminal e boilerplate que não
  dá pra deduzir (ex.: `npm create vite@latest ...`).
- **Pré-requisito real, sem otimismo.** "Já viu JS" não é "manda bem em JS".
  Na dúvida, assuma o nível mais baixo.
- **Estime o escopo e corte pela metade.** Sobrar aula é bom; parar no meio de
  um passo, não.
- **Defina um MARCO MÍNIMO**: o menor resultado que já conta como aula cumprida.
  Todo o resto entra numa seção "Se sobrar tempo".
- **Ponto de parada no meio** do roteiro para medir o ritmo e decidir entre
  seguir ou consolidar o que já foi feito.
- **Se houver arquivo do aluno**, ele é do aluno: `AULA-PASSO-A-PASSO.md` só
  fala "você" — nada de turma, sessões, rubrica ou "registrar progresso". Isso
  tudo fica no `ROTEIRO-AULA.md`.
- Depois da aula, anote em Observações **até onde o aluno chegou de verdade** e
  ajuste o escopo da próxima.

## Ciclo de uma aula

### 1. Antes da aula — planejar

0. Rodar `python alunos/buscar_turmas.py` e conferir se algo mudou (ver
   "Conferir turmas atualizadas" acima) — só então seguir para o cronograma.
1. Abrir `alunos/progresso/turma-<id>.md` e ver a próxima aula em
   **Próximos passos** e no **Cronograma**.
2. Criar a pasta do projeto dentro da turma, com o número da aula na frente:
   `turmas/<CÓDIGO>-<id>/<NN>-nome-curto-descritivo/`.
3. Escrever o `ROTEIRO-AULA.md` a partir do modelo abaixo.
4. Escrever o `README.md` (objetivo, o que pratica, como rodar).
   Se — e só se — o aluno vai fazer sozinho, escrever também o
   `AULA-PASSO-A-PASSO.md` a partir de `alunos/AULA-PASSO-A-PASSO-template.md`.
5. Montar a versão pronta do projeto (código de referência do professor).
6. Testar do zero: apagar `node_modules`, instalar e rodar como o aluno faria.
7. Anotar no cronograma a data e marcar a aula como `🟡 Em andamento`.

### 2. Durante a aula

- Seguir o roteiro; não entregar o código pronto de uma vez.
- Marcar presença mentalmente / em papel para lançar depois.

### 3. Depois da aula — registrar

No arquivo da turma:

- Cronograma: mudar status para `✅ Concluída` e preencher **Observações**.
- **Progresso por Aluno:** presença, projetos entregues, dificuldades.
- **Resumo Geral:** atualizar "Aulas concluídas X / N" e **Próximos passos**
  com o nome da próxima aula.
- Trocar a data em `_Última atualização:_`.
- Commit: `git add -A && git commit -m "aula #N turma <id>: <tema>"`.

## Planejar uma turma nova

1. Copiar `progresso-turma-template.md` para `progresso/turma-<id>.md`.
2. Preencher **Dados da Turma** e o **Cronograma** completo (uma linha por data).
3. Para cada tema do cronograma, decidir se reaproveita um projeto existente
   ou cria um novo. Listar as pastas planejadas.
4. Definir os **Marcos / Entregas** (showcases, avaliações).

## Planejar uma aula nova (checklist rápido)

- [ ] `python alunos/buscar_turmas.py` rodado, turma/alunos conferidos
- [ ] Tema e número da aula definidos no cronograma
- [ ] Pasta do projeto criada
- [ ] `ROTEIRO-AULA.md` com blocos de tempo somando a duração da aula
- [ ] `README.md` com "o que o aluno pratica" e "como rodar"
- [ ] `AULA-PASSO-A-PASSO.md` **só se** o aluno vai fazer sozinho — nesse caso
      só "você", com MARCO MÍNIMO e ponto de parada
- [ ] Escopo estimado e cortado pela metade
- [ ] Código de referência funcionando
- [ ] 3–5 desafios extras para quem terminar antes
- [ ] Lista de erros comuns

## Modelo de ROTEIRO-AULA.md

```markdown
# Roteiro de Aula: <tema>

## Dados
- Turma alvo: #<id> (aula #<n>)
- Projeto: <nome>
- Duração: ~<x>h
- Pré-requisito do aluno: <o que já viu>

## Objetivo
<1 parágrafo>

## Conceitos da aula
| Conceito | Onde aparece |
|----------|--------------|

## Roteiro sugerido para <x> horas
### 0–15 min — <bloco>
### ...

## Perguntas para conduzir a aula
## Desafios se sobrar tempo
## Erros comuns
## Registro pós-aula
```

## Convenções

- Nome de pasta do projeto: `<NN>-` + minúsculas com hífen, descritivo
  (`07-aula-biblioteca-sql-mvc`) — `NN` é o número da aula no cronograma
  dessa turma, com dois dígitos. Aula fora da numeração oficial usa
  `extra-` no lugar do número (`extra-aula-jogo-forca`).
- Nome de pasta da turma: `<CÓDIGO><módulo>-<id>` igual ao cabeçalho "Turma"
  do arquivo de progresso (ex.: turma `CY4 / ... #11350` → pasta `CY4-11350`).
- Datas no formato `AAAA-MM-DD`.
- Status do cronograma: ⬜ Não iniciada · 🟡 Em andamento · ✅ Concluída · ⏭️ Remarcada.
- Não versionar `node_modules/` nem `.env` (ver `.gitignore`).
