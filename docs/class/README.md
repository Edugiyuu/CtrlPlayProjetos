# Templates de Aula

Copie a pasta inteira e preencha os `<...>`.

```bash
# aula prática (o aluno programa)
cp -r docs/class/aula-pratica niveis/<NÍVEL>/<NN>-nome-da-aula

# aula teórica (o aluno entende e explica)
cp -r docs/class/aula-teorica niveis/<NÍVEL>/<NN>-nome-da-aula
```

**Na dúvida entre os dois:** se no fim da aula o resultado é "está funcionando
na tela", é **prática**. Se é "ele consegue me explicar com as próprias
palavras", é **teórica**. Aula mista usa o template prático.

Exemplos reais: [Placar da Guilda (JS/DOM)](../../turmas/CY2-11342/06-aula-js-placar-guilda/),
[Catálogo da Loja (React)](../../turmas/CY3-11904/06-aula-react-lista-e-estado/),
[SQL relacional vs não-relacional](../../turmas/CY4-11350/06-aula-sql-relacional-nao-relacional/).

---

## Formato: 2 arquivos + gabarito

Vale para os dois templates. Na teórica, `ATIVIDADE.md` ocupa o lugar do
`DESAFIO.md` e pede um artefato **verificável** ("passos que outra pessoa segue
sem perguntar nada"), sempre com a etapa "troque e teste ao pé da letra".

```text
<NN>-nome-da-aula/
├── README.md      # SEU — abre na aula: blocos, marco, conceitos, erros
├── DESAFIO.md     # DO ALUNO — comandos de hoje, etapas, check
└── gabarito/      # SEU — resposta completa
```

Só isso. Nada de roteiro, cartão ou passo a passo separado.

| Arquivo | Regra que não pode ser quebrada |
|---|---|
| `README.md` | **Painel, não texto.** Cabe numa tela (~45 linhas). Tudo em tabela, zero parágrafo, zero código. Marco mínimo explícito na tabela de blocos. |
| `DESAFIO.md` | Só "você". **Nada de código pronto**: cada etapa = alvo + ferramenta + **Teste** concreto. A tabela "Comandos de hoje" pode ter a **forma** genérica (é vocabulário), nunca a solução. ~60 linhas. |
| `gabarito/` | **Arquivo inteiro**, etapa por etapa, dizendo qual mudou e qual não. |

Nada de turma, tempo ou rubrica no `DESAFIO.md`/`ATIVIDADE.md` — isso mora no `README.md`.

Exemplo: [CY3 · 01 Git e GitHub](../../niveis/CY3/01-git-e-github/).

---

## As 5 regras de conteúdo

Vieram de aula dada, não de teoria.

1. **O aluno escreve o código do ZERO.** Você diz *o que* fazer, *qual*
   recurso usar e *o que* testar. Nunca a linha pronta. Exceção: comando de
   terminal e boilerplate indeduzível (`npm create vite@latest ...`).

2. **Estime o escopo e corte pela metade.** Caso real: a aula #5 de React do
   Miguel foi escrita para 2h e ele fez ~1/4. Sobrar é bom; parar no meio de
   um passo, não.

3. **Marco mínimo + ponto de parada.** O menor resultado que já conta como
   aula cumprida, marcado na tabela de blocos. Todo o resto é bônus.

4. **Conceito central = linha própria na tabela de Conceitos**, com definição
   isolada + exemplo com os dados reais da aula + pergunta de checagem antes
   de avançar. Caso real: na aula de SQL da #11350 os alunos rodaram os `JOIN`
   com sucesso e saíram sem entender chave primária/estrangeira, porque o
   termo só aparecia dentro de um bullet de comparação. **Rodar código não é
   prova de entendimento.**

5. **Pré-requisito real, sem otimismo.** "Já viu JS" não é "manda bem em JS".
   Na dúvida, assuma o nível mais baixo.

**Tema:** é a casca, não o conteúdo. Prefira dia a dia (loja, mercado,
playlist, boletim) a fantasia/RPG. Trocar o tema é barato — os conceitos são
os mesmos.

---

## Criar uma aula nova

1. **Conferir a turma no portal** (fonte da verdade, muda sem avisar):

   ```bash
   python alunos/buscar_turmas.py
   ```

   Se "aula atual" do portal não bate com "Próximos passos" de
   `alunos/progresso/turma-<id>.md`, o registro pós-aula ficou pra trás —
   atualizar antes de planejar.

2. **Nomear a pasta:** `<NN>-nome-curto-descritivo`, `NN` com dois dígitos
   (`07-aula-funcoes`). Fora da numeração oficial usa `extra-`.

3. **Copiar o template** (comando lá em cima).

4. **Preencher nesta ordem:** `README.md` (é onde você pensa a aula) →
   `DESAFIO.md` → `gabarito/`.

5. **Testar do zero** como o aluno faria. Teórica: fazer a atividade você
   mesmo e cronometrar.

6. **Marcar no cronograma** da turma: data e `🟡 Em andamento`.

### Checklist antes de dar a aula

- [ ] `python alunos/buscar_turmas.py` rodado
- [ ] `README.md` cabe numa tela, blocos somam a duração real
- [ ] Escopo estimado e **cortado pela metade**
- [ ] **Marco mínimo** na tabela + o que cortar se atrasar
- [ ] Cada conceito do cabeçalho tem linha na tabela com checagem
- [ ] Material do aluno **sem código pronto**
- [ ] Gabarito completo e **testado**
- [ ] Erros comuns preenchidos
- [ ] 3–5 extras no fim do `DESAFIO.md`

### Depois da aula

**Não preencher o `.md` na mão.** Despejar cru — até onde chegaram de verdade,
quem faltou, onde travou, o que muda na próxima — e daí sai
`alunos/progresso/turma-<id>.md` e o `README.md` da pasta da turma.

Fluxo completo: [`alunos/WORKFLOW-AULAS.md`](../../alunos/WORKFLOW-AULAS.md).
