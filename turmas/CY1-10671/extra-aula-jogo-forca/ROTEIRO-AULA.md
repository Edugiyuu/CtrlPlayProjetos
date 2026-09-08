# Roteiro de Aula: Jogo da Forca (reforço de loop + lista)

## Dados
- Turma alvo: #10671 (aula extra, fora da numeração oficial — entre a #5 e a #6)
- Projeto: `extra-aula-jogo-forca`
- Duração: ~1h
- Pré-requisito do aluno: aulas 1–5 já feitas (textos, listas, condicionais,
  repetição). Não pressupõe dicionário/tupla/set (isso é a aula #6, ainda
  não dada).

## Objetivo

Reforçar `while`, listas e comparação de strings — não introduzir conteúdo
novo — através de um projeto motivador (jogo da forca) em vez de exercícios
soltos. Alunos resolvem o desafio sozinhos (ou em duplas), com o professor
dando dicas pontuais, nunca o código pronto.

## Conceitos da aula
| Conceito | Onde aparece |
|----------|--------------|
| `while` | loop principal do jogo (roda até ganhar/perder) |
| Lista | `revelado`, atualizada posição a posição |
| `for` + `range` | percorrer a palavra letra por letra |
| Condicional | decidir acerto/erro, condição de vitória |

## Exemplos de apoio (só para você, não mostrar como está)

Use estes exemplos **genéricos** se algum aluno travar de verdade e a dica
escrita no "Se travar, revise" não bastar — nunca com as variáveis da forca
(`palavra`, `revelado`), pra não virar cola disfarçada da solução.

**`while` com condição que muda dentro do loop:**
```python
restantes = 3
while restantes > 0:
    print("faltam", restantes)
    restantes = restantes - 1
```

**Lista criada com tamanho fixo e alterada por índice:**
```python
marcadores = ["-", "-", "-", "-"]
marcadores[2] = "X"
print(marcadores)  # ['-', '-', 'X', '-']
```

**Lista com um item para cada letra de uma string (mesmo tamanho dela):**
```python
nome = "ana"
marcadores = ["_" for _ in nome]
print(marcadores)  # ['_', '_', '_']
```

**`for` + `range` percorrendo uma string por posição:**
```python
nome = "ana"
for i in range(len(nome)):
    print(i, nome[i])
```

**Juntar uma lista numa string com `join`:**
```python
letras = ["a", "b", "c"]
print(" ".join(letras))  # a b c
```

Se um exemplo desses não resolver o travamento, é sinal de que o problema é
outro (provavelmente algo do banco "Se travar, revise") — não pule direto
pra mostrar como ficaria a linha da forca.

## Roteiro sugerido para ~1h

### 0–5 min — Abertura
Explicar o formato: não é aula de teoria nova, é pra treinar o que já viram
construindo um jogo. Ninguém vai receber código pronto — só o enunciado do
desafio (`desafio-forca.md`) e dicas se travarem.

### 5–10 min — Aquecimento (coletivo)
Todos escrevem juntos (cada um no seu terminal) o `while` do Aquecimento do
`desafio-forca.md`: pedir número até digitar `"0"`. Confirmar que todos
lembram a sintaxe antes de seguir.

### 10–50 min — Mão na massa
Alunos resolvem os 7 passos do "O que fazer" sozinhos/em duplas. Professor
circula:
- Deixa tentarem sozinhos primeiro.
- Se travarem, pergunta antes de responder ("o que você já tentou?", "qual
  passo você está tentando resolver agora?").
- Usa o banco "Se travar, revise" do próprio desafio como script de dica —
  aponta o item, não a linha de código.
- Ponto de parada natural: depois do passo 5 (revelar letra), antes de
  entrar no contador de erros e na condição de vitória — bom momento pra
  checar o ritmo da turma e decidir se dá tempo de terminar os passos 6–7.
- Lembrete: o jogo **não tem derrota** — o jogador pode errar à vontade, o
  contador é só um placar. Se algum aluno propuser um limite de erros por
  conta própria, tudo bem, mas não é o pedido do desafio.

### 50–60 min — Fechar
Quem terminou, compara com `gabarito/forca.py` e testa o CHECK completo.
Quem não terminou, guarda o progresso — pode ser retomado antes da aula #6.
Perguntar rapidamente: qual foi a parte mais difícil (a frase do "Antes de
fechar").

## Perguntas para conduzir a aula
- "Que condição faz esse `while` parar?"
- "Como você sabe se a letra digitada está em alguma posição da palavra?"
- "Onde no seu código a lista `revelado` realmente muda?"
- "O que acontece se a mesma letra for digitada duas vezes?"

## Desafios se sobrar tempo
Ver seção "Se sobrar tempo" do `desafio-forca.md` (banco de palavras,
ASCII da forca, categorias, modo em grupo).

## Erros comuns
- Comparar a letra digitada com a palavra inteira em vez de posição por
  posição.
- Esquecer de atualizar a lista `revelado` (só imprime, não guarda).
- Condição do `while` que nunca fica falsa (loop infinito) porque não
  depende de nada que muda dentro do loop.
- Contar erro mesmo quando a letra já tinha sido tentada antes.
- Confundir índice da lista com o caractere em si (`revelado[i]` vs
  `palavra[i]`).

## Registro pós-aula
Anotar em `alunos/progresso/turma-10671.md` (Observações da aula #5 ou
Próximos passos): até onde cada aluno chegou nos 7 passos do desafio, se
precisou de dica e em qual passo, e se a aula #6 pode seguir normalmente ou
se ainda falta reforço de loop/lista.
