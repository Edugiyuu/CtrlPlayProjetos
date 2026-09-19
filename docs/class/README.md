# Templates de Aula

Copie a pasta inteira e preencha os `<...>`.

```bash
# aula prática (o aluno programa)
cp -r docs/class/aula-pratica turmas/<CÓDIGO>-<id>/<NN>-nome-da-aula

# aula teórica (o aluno entende e explica)
cp -r docs/class/aula-teorica turmas/<CÓDIGO>-<id>/<NN>-nome-da-aula
```

**Na dúvida entre os dois:** se no fim da aula o resultado é "está funcionando
na tela", é **prática**. Se é "ele consegue me explicar com as próprias
palavras", é **teórica**. Aula mista usa o template prático + a tabela de
Conceitos da teórica.

Exemplos reais: [Placar da Guilda (JS/DOM)](../../turmas/CY2-11342/06-aula-js-placar-guilda/),
[Catálogo da Loja (React)](../../turmas/CY3-11904/06-aula-react-lista-e-estado/),
[SQL relacional vs não-relacional](../../turmas/CY4-11350/06-aula-sql-relacional-nao-relacional/).

---

## A regra do formato: o roteiro é um painel, não um texto

O `ROTEIRO-AULA.md` é o arquivo que você abre **durante** a aula, com o aluno
esperando. Ele tem que caber numa tela e ser lido de relance.

- **Tabela sempre que couber.** Bloco de tempo, conceito, erro comum: tudo tabela.
- **Nada de parágrafo.** Objetivo virou "sai de X → chega em Y". "O que não
  entra" virou uma linha. Se você escreveu 3 linhas corridas, corte.
- **Snippet de código não vai no roteiro.** Vai no `gabarito/`. Roteiro com
  bloco de código é roteiro que você não consegue escanear.
- **Teto:** ~50 linhas na prática, ~80 na teórica. Passou disso, sobrou coisa.
- O que é planejamento (pensar a aula) cabe no cabeçalho em bullets curtos.
  O que você não vai olhar durante a aula, não entra.

---

## Regras por arquivo

| Arquivo | Regra que não pode ser quebrada |
|---|---|
| `ROTEIRO-AULA.md` | Painel, não texto. Marco mínimo explícito na tabela de blocos. |
| `README.md` | Só o que o roteiro **não** tem: como rodar, formato, índice. Zero repetição. |
| `DESAFIO.md` | **Nada de código pronto.** Bullet curto com o alvo + o nome da ferramenta (`.toUpperCase()`, `querySelector`, `.map()`) + "Teste agora" concreto. O aluno monta a linha. Sem "duas formas, escolha uma". Padrão: [`e1-ligar-o-js.md`](../../turmas/CY2-11342/06-aula-js-placar-guilda/desafios/e1-ligar-o-js.md). Desafio grande vira `desafios/e1-*.md`, `e2-*.md`. |
| `ATIVIDADE.md` | Pede artefato **verificável** ("6+ passos que outra pessoa segue sem perguntar nada", não "faça um algoritmo"). Sempre tem a etapa "troque e testem" / "eu sigo o seu ao pé da letra". |
| `CARTAO-DE-MEMORIA.md` | Cabe numa folha, ordem de uso na aula. Pode ter a **forma** genérica do comando (é vocabulário), nunca a solução. |
| `AULA-PASSO-A-PASSO.md` | Só quando o aluno vai fazer **sozinho**. Aula ao vivo: apague o arquivo. |
| `gabarito/` | **Arquivo inteiro**, etapa por etapa, dizendo qual mudou e qual não. Fragmento solto não serve na hora da aula. |

**Vale para todo material do aluno** (`DESAFIO`, `ATIVIDADE`, `CARTAO`,
`PASSO-A-PASSO`): só "você". Nada de número de turma, rubrica, bloco de tempo
ou "registrar progresso" — isso mora no `ROTEIRO-AULA.md`.

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

4. **Preencher nesta ordem:** `ROTEIRO-AULA.md` (é onde você pensa a aula) →
   arquivo do aluno → `gabarito/` → `README.md`.

5. **Testar do zero** como o aluno faria. Teórica: fazer a atividade você
   mesmo e cronometrar.

6. **Marcar no cronograma** da turma: data e `🟡 Em andamento`.

### Checklist antes de dar a aula

- [ ] `python alunos/buscar_turmas.py` rodado
- [ ] `ROTEIRO-AULA.md` cabe numa tela, blocos somam a duração real
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
