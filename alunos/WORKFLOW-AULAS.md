# Workflow de Aulas — organizar e planejar

Fluxo padrão para preparar, dar e registrar aulas neste repositório.

## Estrutura do repositório

```text
CtrlPlayAlunos/
├── alunos/
│   ├── progresso/                 # 1 arquivo por turma (turma-<id>.md)
│   ├── progresso-turma-template.md
│   └── WORKFLOW-AULAS.md          # este arquivo
├── <projeto-da-aula>/             # 1 pasta por projeto/aula
│   ├── README.md                  # o que o aluno pratica + como rodar
│   └── ROTEIRO-AULA.md            # roteiro minuto a minuto
```

Regra: **um projeto por pasta**, sempre com `README.md` e `ROTEIRO-AULA.md`.

## Ciclo de uma aula

### 1. Antes da aula — planejar

1. Abrir `alunos/progresso/turma-<id>.md` e ver a próxima aula em
   **Próximos passos** e no **Cronograma**.
2. Criar a pasta do projeto: `nome-curto-descritivo/`.
3. Escrever o `ROTEIRO-AULA.md` a partir do modelo abaixo.
4. Escrever o `README.md` (objetivo, o que pratica, como rodar).
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
