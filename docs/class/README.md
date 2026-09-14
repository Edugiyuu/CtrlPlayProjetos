# Templates de Aula

Esqueletos prontos para criar uma aula nova **copiando uma pasta inteira** e
preenchendo. Servem para qualquer turma e qualquer tema.

```bash
# aula prática (o aluno programa)
cp -r docs/class/aula-pratica turmas/<CÓDIGO>-<id>/<NN>-nome-da-aula

# aula teórica (o aluno entende e explica)
cp -r docs/class/aula-teorica turmas/<CÓDIGO>-<id>/<NN>-nome-da-aula
```

Depois é só abrir os arquivos, **apagar o comentário de instruções do topo** e
preencher os `<...>`.

---

## Qual template usar?

| Se a aula é... | Use | Exemplo real |
|---|---|---|
| O aluno **escreve código** e algo aparece na tela | [`aula-pratica/`](aula-pratica/) | [Placar da Guilda (JS/DOM)](../../turmas/CY2-11342/06-aula-js-placar-guilda/), [Catálogo da Loja (React)](../../turmas/CY3-11904/06-aula-react-lista-e-estado/) |
| O aluno precisa **entender e saber explicar** uma ideia antes de programar | [`aula-teorica/`](aula-teorica/) | intro do CY1 ("o que é algoritmo", "o que é linguagem de programação"), Git e controle de versão, pilares de POO |

**Na dúvida:** se no fim da aula o resultado é "está funcionando na tela",
é **prática**. Se o resultado é "ele consegue me explicar com as próprias
palavras", é **teórica**.

Aula mista existe (30 min de teoria + 60 min de prática): use o template
**prático** e cole a seção "Conceitos" do template teórico no começo do
`ROTEIRO-AULA.md`.

---

## O que tem dentro de cada uma

### `aula-pratica/`

```text
README.md            # professor: o que o aluno pratica, o que fica de fora, como rodar
ROTEIRO-AULA.md      # professor: blocos de tempo, marco mínimo, erros comuns
DESAFIO.md           # ALUNO: o que fazer, o que testar — sem código pronto
CARTAO-DE-MEMORIA.md # ALUNO: folha de consulta da aula (opcional)
AULA-PASSO-A-PASSO.md# ALUNO: só se ele for fazer sozinho, sem você (opcional)
gabarito/GABARITO.md # professor: código completo da resposta, etapa por etapa
```

### `aula-teorica/`

```text
README.md                     # professor: o que o aluno vai entender, materiais
ROTEIRO-AULA.md               # professor: conceitos + minuto a minuto + perguntas prontas
ATIVIDADE.md                  # ALUNO: a tarefa (ex.: desenhar um algoritmo no Excalidraw)
CARTAO-DE-MEMORIA.md          # ALUNO: as definições numa folha só
gabarito/GABARITO-ATIVIDADE.md# professor: resposta esperada + rubrica + o que aceitar
```

---

## As 6 regras de ouro (valem para os dois)

Vieram de aula dada, não de teoria. **Leia antes de preencher qualquer template.**

1. **O aluno escreve o código do ZERO.** No material do aluno você diz *o que*
   fazer, *qual* recurso usar e *o que* testar. Nunca a linha pronta. Código
   pronto só no `gabarito/`, que é seu. Exceção: comandos de terminal e
   boilerplate que não dá pra deduzir (`npm create vite@latest ...`).

2. **Estime o escopo e corte pela metade.** Caso real: a aula #5 de React do
   Miguel foi escrita para 2h e ele fez ~1/4. Sobrar aula é bom; parar no meio
   de um passo, não.

3. **Defina um MARCO MÍNIMO.** O menor resultado que já conta como aula
   cumprida. Todo o resto vai para "Se sobrar tempo". Coloque um **ponto de
   parada** no meio do roteiro para medir o ritmo.

4. **Todo conceito central ganha seção própria.** Caso real: na aula de SQL da
   #11350 os alunos rodaram os `JOIN` com sucesso e mesmo assim saíram sem
   entender chave primária/estrangeira, porque o termo só aparecia dentro de um
   bullet de comparação. Se o termo está no "Objetivo" ou no "Marco mínimo",
   ele precisa de: definição isolada + exemplo com os dados reais da aula +
   pergunta de checagem antes de avançar. **Rodar código não é prova de
   entendimento.**

5. **Pré-requisito real, sem otimismo.** "Já viu JS" não é "manda bem em JS".
   Na dúvida, assuma o nível mais baixo.

6. **Material do aluno é do aluno.** `DESAFIO.md`, `ATIVIDADE.md`,
   `CARTAO-DE-MEMORIA.md` e `AULA-PASSO-A-PASSO.md` só falam "você". Nada de
   número de turma, rubrica, "registrar progresso" ou blocos de tempo — isso
   tudo mora no `ROTEIRO-AULA.md`.

### Bônus: temas

O tema é a casca, não o conteúdo. Prefira **assuntos do dia a dia** (loja,
mercado, playlist, lista de tarefas, boletim) a fantasia/RPG. Se o aluno não
curtir o tema, trocar o tema é barato — os conceitos são os mesmos.

---

## Criar uma aula nova — passo a passo

1. **Conferir a turma no portal** (fonte da verdade, muda sem avisar):

   ```bash
   python alunos/buscar_turmas.py
   ```

   Comparar com `alunos/progresso/turma-<id>.md`. Se "aula atual" do portal não
   bate com "Próximos passos" do arquivo local, o registro pós-aula ficou pra
   trás — atualizar antes de planejar.

2. **Decidir o número e o nome da pasta.** `<NN>-nome-curto-descritivo`, onde
   `NN` é o número da aula no cronograma daquela turma, com dois dígitos
   (`07-aula-funcoes`). Aula fora da numeração oficial usa `extra-`.

3. **Copiar o template** (comando lá em cima).

4. **Preencher na ordem:** `ROTEIRO-AULA.md` primeiro (é onde você pensa a
   aula), depois `README.md`, depois o arquivo do aluno, e o `gabarito/` por
   último.

5. **Testar do zero** como o aluno faria — apagar `node_modules`, instalar,
   rodar. Se for teórica, fazer você mesmo a atividade e cronometrar.

6. **Marcar no cronograma** da turma: data e status `🟡 Em andamento`.

### Checklist antes de dar a aula

- [ ] `python alunos/buscar_turmas.py` rodado, turma/alunos conferidos
- [ ] Pasta criada com o número certo da aula
- [ ] `ROTEIRO-AULA.md` com blocos somando a duração real
- [ ] Escopo estimado e **cortado pela metade**
- [ ] **Marco mínimo** explícito + ponto de parada no meio
- [ ] Cada conceito do objetivo tem seção própria + pergunta de checagem
- [ ] Material do aluno **sem código pronto**
- [ ] Gabarito completo e **testado**
- [ ] Lista de erros comuns preenchida
- [ ] 3–5 extras para quem terminar antes

### Depois da aula

**Não preencher o `.md` na mão.** Despejar cru — até onde chegaram de
verdade, quem faltou, onde travou, o que muda na próxima — e daí sai o
`alunos/progresso/turma-<id>.md` (status `✅ Concluída`, Observações, "Aulas
concluídas X / N", Próximos passos, data) e o `README.md` da pasta da turma.

Fluxo completo: [`alunos/WORKFLOW-AULAS.md`](../../alunos/WORKFLOW-AULAS.md).
