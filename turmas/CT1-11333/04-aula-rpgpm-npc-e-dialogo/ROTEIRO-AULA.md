# Roteiro de Aula: NPC e diálogo

## Dados

- **Turma alvo:** #11333 — CT1 (aula #4), aula particular (só o Guilherme)
- **Projeto:** `Treino RPG`, mapa `Vila de Treino` (o mesmo da aula #3)
- **Duração:** bloco de 1h30, mas **escopo real ~50 min** + folga
- **Pré-requisito real:** aula #3 completa. Ele sabe pintar `Floor` e
  `Face sprite`, salvar e testar. **Não** sabe o que é objeto, evento ou
  comando — tratar como 100% novo. Se a #3 parou no marco mínimo, reservar
  10 min de recap prático antes de começar.
- **Tema:** ferramenta ainda, mas já é o primeiro "programar sem código".

## Objetivo

Sair de "meu mapa é um cenário bonito e morto" para "tem alguém no meu mapa
que **reage** quando eu aperto ação". No fim da aula ele tem que conseguir
explicar a corrente **objeto → evento → comando** com as palavras dele.

## O que NÃO entra nesta aula

Variável, condição, `Display choices...`, batalha, item, teleporte. Nada de
`Datas`. Se ele perguntar "e pra ele falar uma coisa diferente na segunda
vez?": "isso é memória do jogo, é a aula #8 — anota aí que é a melhor
pergunta do dia".

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|----------|--------------------------------------------------|--------------|
| **Objeto (`Object`)** | Qualquer coisa do mapa que **faz alguma coisa**: pessoa, baú, porta, placa que fala. Diferente da árvore, que é só desenho. | aba `Object` |
| **Gráfico (`Graphics`)** | A imagem que o objeto usa. Objeto sem gráfico é invisível no jogo (mas continua funcionando — isso confunde, avise antes). | janela `Edit object...`, caixa `Graphics` |
| **Evento (`Hero action`)** | O **momento** em que o objeto reage. `Hero action` = "quando o herói estiver na frente e apertar a tecla de ação". | janela `Edit object...`, lista `Events` |
| **Comando** | Uma ordem que o jogo executa quando o evento acontece. Elas rodam **de cima pra baixo, na ordem da lista**. | janela `Commands...` |
| **`Show text...`** | O comando que abre a caixa de fala. `Interlocutor` é o nome de quem está falando (aparece em cima da caixa). | `Commands... > Staging > Show text...` |
| **Ordem dos comandos** | Se você põe duas falas, a segunda só aparece depois que o jogador fecha a primeira. A lista é a receita, de cima pra baixo. | lista de comandos do evento |
| **`Block hero during reaction`** | Trava o herói enquanto o evento roda, pra ele não sair andando no meio da conversa. Já vem marcado. | janela `Edit object...`, embaixo |
| **Colisão** | Se o herói atravessa o NPC ou não. Vem do gráfico do objeto — não é o mesmo que "ser visível". | ícone `Collisions` na barra de cima |

> Regra da turma (memória `feedback-conceitos-explicitos`): **objeto**,
> **evento** e **comando** são os três termos que ele precisa saber repetir
> sem olhar. Faça a pergunta de checagem antes de avançar de bloco. Colocar um
> NPC que fala **não** é prova de que ele entendeu a diferença entre os três.

## Preparação (antes do aluno chegar)

- [ ] Editor aberto e o `Treino RPG` já carregado
- [ ] Se o projeto sumiu do PC: `.zip` da aula #3 em mãos para
      `File > Import project...`
- [ ] `gabarito/GABARITO.md` aberto numa aba só sua
- [ ] Saber de cor qual é a tecla de ação no teste (conferir em `Keyboard`,
      na barra de cima — normalmente `ENTER` / `barra de espaço`)

---

## Roteiro

### 0–10 min — Recap e a pergunta que abre

Recap prático (ele no teclado, você só perguntando):

1. Abre o `Treino RPG` e o mapa `Vila de Treino`.
2. "Coloca uma árvore nova em algum lugar." (checa `Face sprite`)
3. "Agora testa." (checa `CTRL + S` → `CTRL + P`)

**Pergunta que abre a aula:** "você anda pela sua vila inteira e não acontece
**nada**. O que falta pra isso virar um jogo?" (deixe ele falar; a resposta
que você quer é alguma versão de "alguém pra interagir").

### 10–25 min — O primeiro NPC (conduzido)

Ele faz, você narra o nome de cada coisa:

- Aba `Object` → **clique duplo** num square vazio da praça → abre a janela
  `Edit object...`.
- `Name`: trocar `OBJ:0001` por `Aldeão`.
- `Graphics`: escolher um personagem. **Salve e teste agora** — só pra ele ver
  que já tem gente no mapa, ainda mudo.

**Teste de entendimento (antes de pôr a fala):** "esse aldeão é um objeto ou um
`Face sprite`? Como você sabe?" (resposta boa: objeto, porque ele foi criado na
aba `Object` e vai **fazer** alguma coisa).

Agora a fala:

- Na lista `Events`, o evento `Hero action` já existe → **clique duplo na
  linha `>`** da lista de comandos do lado esquerdo → abre `Commands...`.
- Aba `Staging` → `Show text...` → escrever a fala → `OK` → `OK`.
- `CTRL + S` → `CTRL + P` → chegar perto e apertar a tecla de ação.

**Teste agora:** o aldeão fala. Se nada acontece, veja "Erros comuns".

**Teste de entendimento:** "quem é o objeto, quem é o evento e quem é o
comando nessa história?" (objeto = aldeão; evento = `Hero action`, o momento;
comando = `Show text...`, a ordem). **Não avance sem essa resposta.**

### 25–40 min — Duas falas e o nome de quem fala

- Voltar no aldeão e adicionar um **segundo** `Show text...`.
- No primeiro, preencher o `Interlocutor` com `Aldeão`.
- Testar: a segunda fala só aparece depois de fechar a primeira.

**Teste de entendimento:** "se eu arrastar a segunda fala pra cima da primeira,
o que muda no jogo?" (a ordem em que elas aparecem — comando é receita).

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~40 min)

Se chegou aqui, **a aula valeu**. O aluno consegue:

- [ ] Criar um objeto no mapa e dar um gráfico pra ele
- [ ] Fazer esse objeto falar com `Show text...` quando o herói aperta ação
- [ ] Colocar **duas** falas em sequência e prever a ordem delas
- [ ] Explicar, com as palavras dele, o que é objeto, evento e comando

Se o ritmo estiver apertado: **para aqui**, exporta o `.zip` e o `DESAFIO.md`
vira abertura da aula #5. Não empurrar.

---

### 40–55 min — Bônus: o NPC que anda

Só se o marco veio tranquilo.

- Novo objeto, gráfico de personagem, `Moving > Type: Random`, `Speed: Slow`.
- Testar: ele anda sozinho pela praça.

**Teste agora:** o segundo NPC se move sozinho e continua falando quando você
aperta ação nele.

### 55–75 min — Desafio + backup

Passar o [DESAFIO.md](./DESAFIO.md) ("O guarda da entrada"). Fechar com
`File > Export project...` e o `.zip` no pendrive/Drive dele.

---

## Perguntas para conduzir a aula

1. Qual a diferença entre a árvore da aula passada e o aldeão de hoje?
2. O que é um evento? Dê um exemplo que **não** seja `Hero action`.
3. Se eu tirar o gráfico do objeto, ele some do jogo? E ele para de funcionar?
4. Por que os comandos ficam numa **lista** e não num monte?
5. O que o `Block hero during reaction` evita?

## Desafios se sobrar tempo (além do DESAFIO.md)

1. Uma **placa** que fala: objeto com gráfico de placa e uma fala curta.
2. Um NPC que fala **3** vezes, cada fala com um `Interlocutor` diferente
   (como se fossem duas pessoas conversando).
3. Colocar um som quando o NPC fala (`Commands... > Map > Play a sound...`).
4. Mudar a cor do texto de uma fala (botão de cor dentro do `Show text...`).

## Erros comuns

| Sintoma | Causa provável |
|---------|----------------|
| Cliquei duplo no mapa e não abriu nada | Não está na aba `Object` |
| O NPC não aparece no teste | Objeto sem `Graphics` — ele existe, mas é invisível |
| Chego perto e aperto e não acontece nada | A fala foi posta em outro evento que não o `Hero action`, ou o herói não está **de frente** pro NPC |
| A fala aparece sozinha assim que entro no mapa | O comando foi parar num evento de início de mapa, não no `Hero action` |
| O herói atravessa o NPC | Colisão do gráfico — abrir `Collisions` na barra de cima e marcar a colisão do sprite |
| Só a primeira fala aparece | Normal: a segunda aparece depois de fechar a primeira. Se nunca aparece, o segundo comando ficou fora da lista |
| As mudanças não valeram no teste | Faltou `CTRL + S` |
| O projeto sumiu do `Recent projects` | Outro PC ou cache limpo → `File > Import project...` com o `.zip` |

## Registro pós-aula

Despejo cru:

- **Até onde chegou de verdade** (marco mínimo? NPC que anda? desafio?).
- **Ele soube explicar objeto × evento × comando?** (se não, a #5 abre com
  isso — é a base de tudo que vem depois).
- **Onde travou.**
- **O que cortar ou adiantar** na aula #5, que já é o jogo pra valer.
