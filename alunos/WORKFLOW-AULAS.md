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
├── <projeto-da-aula>/             # 1 pasta por projeto/aula
│   ├── README.md                  # o que o aluno pratica + como rodar
│   ├── ROTEIRO-AULA.md            # SEU: roteiro minuto a minuto, perguntas, rubrica
│   └── AULA-PASSO-A-PASSO.md      # OPCIONAL: só quando o aluno vai fazer sozinho
```

Regra: **um projeto por pasta**, sempre com `README.md` e `ROTEIRO-AULA.md`.

O `AULA-PASSO-A-PASSO.md` é **opcional**. Só crie quando o aluno vai executar
sozinho (sem você conduzindo) — aula assíncrona, tarefa de casa, aluno adiantado.
Numa aula que você dá ao vivo, o `ROTEIRO-AULA.md` já basta. Quando fizer, use
[`alunos/AULA-PASSO-A-PASSO-template.md`](AULA-PASSO-A-PASSO-template.md).

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

1. Abrir `alunos/progresso/turma-<id>.md` e ver a próxima aula em
   **Próximos passos** e no **Cronograma**.
2. Criar a pasta do projeto: `nome-curto-descritivo/`.
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

- Nome de pasta: minúsculas com hífen, descritivo (`aula-react-vite`).
- Datas no formato `AAAA-MM-DD`.
- Status do cronograma: ⬜ Não iniciada · 🟡 Em andamento · ✅ Concluída · ⏭️ Remarcada.
- Não versionar `node_modules/` nem `.env` (ver `.gitignore`).
