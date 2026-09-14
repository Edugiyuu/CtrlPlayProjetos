# Roteiro de Aula: Personagem e movimentação (Construct 3)

## Dados
- Turma alvo: Livia (aula sobre Construct 3 — criar personagem + movimentação)
- Projeto: continuação do projeto dela (sprites + cenário da aula anterior)
- Duração: ~1h
- Pré-requisito da aluna: já cria Sprite, desenha no editor de imagem e posiciona
  objetos numa Layout. **Comportamentos (behaviors) são novidade.**

## Objetivo
Sair da aula com um personagem que a Livia controla pelo teclado, andando sobre/
pelo cenário que ela mesma montou, sem atravessar as paredes. O código de eventos
é mínimo — quase tudo é propriedade e comportamento, o que cabe bem no tempo dela.

## Decisão antes de começar: que tipo de jogo?
Pergunte à Livia como ela imagina o jogo dela e escolha **um** comportamento:

| Se o cenário é... | Use o behavior | Movimento |
|---|---|---|
| visto de cima (mapa, RPG, labirinto) | **8 Direction** | anda nas 8 direções |
| visto de lado (plataforma, Mario) | **Platform** | anda + pula, tem gravidade |

O roteiro abaixo usa **8 Direction** (mais simples, sem gravidade). Se ela quiser
plataforma, os passos são os mesmos trocando o nome do behavior e adicionando
"pular" no teste.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Objeto Sprite como personagem | Passo 1 |
| Behavior (comportamento pronto) | Passo 2 |
| Propriedades do behavior (Max speed, Acceleration) | Passo 3 |
| Behavior Solid = colisão | Passo 4 |
| Preview / iteração | todos os "Teste agora" |
| Animações (Idle/Walk) | Bônus 1 |
| Scroll To (câmera) | Bônus 2 |

---

## Roteiro sugerido para ~1 hora

### 0–5 min — Abrir o projeto e relembrar
- Livia abre **o projeto dela** da aula passada no editor.construct.net.
- Ela te mostra: quais sprites ela criou, como está o cenário. Elogie algo específico.
- Pergunta de aquecimento: *"Se a gente apertar Preview agora, o que acontece?"*
  (Nada se mexe — não há personagem nem lógica. É isso que vamos resolver.)

### 5–15 min — Passo 1: criar o Sprite do personagem
**Ela faz** (não dê os cliques mastigados, guie por pergunta):
1. Adicionar um novo objeto do tipo **Sprite** na Layout.
2. No editor de imagem, desenhar OU importar o personagem. Manter simples:
   um frame só por enquanto.
3. **Renomear** o objeto para `Player` (propriedade *Name*).
4. Posicionar o `Player` num ponto livre do cenário.

**Teste agora:** aperta **Preview**. O personagem aparece na tela, parado. Ainda
não anda — é o esperado.

Pergunta: *"Por que ele não anda se as setas do teclado existem?"* → porque
ninguém disse ao Construct o que fazer com as setas. É o próximo passo.

### 15–25 min — Passo 2: dar movimento com um behavior
**Ela faz:**
1. Com o `Player` selecionado, no painel *Properties*, achar **Behaviors** e
   abrir. (ou clicar direito no objeto → *Behaviors*).
2. Adicionar o behavior **8 Direction**.
3. Fechar o painel.

**Teste agora:** Preview → as **setas do teclado** já movem o personagem. Zero
evento escrito. Deixe ela reagir a isso.

> 💡 Sacada da aula: um *behavior* é um pacote de comportamento pronto. O 8
> Direction já traz "ler as setas + mover + desacelerar". Depois dá pra trocar as
> teclas, mas hoje o padrão serve.

### 25–30 min — PONTO DE PARADA (mede o ritmo)
Se chegou aqui em ~25 min: seguir para colisão e depois bônus.
Se está mais devagar: **pular direto para o Passo 4 (colisão)** e tratar tudo
depois como bônus. O marco mínimo é personagem que anda + é barrado pelo cenário.

### 30–40 min — Passo 3: ajustar a "sensação" do movimento
**Ela faz** — mexer nas propriedades do behavior 8 Direction e testar cada mudança:
1. **Max speed** — deixa mais rápido / mais lento.
2. **Acceleration** e **Deceleration** — "escorrega no gelo" vs. "para na hora".
3. **Directions** — trocar para *Up & Down* ou *Left & Right* se o jogo dela pedir.
4. **Set angle** — se o sprite dela deve virar pra direção que anda, deixar
   *360 degrees*; se não, *No*.

**Teste agora:** ela descreve em voz alta a diferença que sentiu depois de cada
ajuste. O objetivo é ela entender que game feel é iteração, não acerto de primeira.

### 40–50 min — Passo 4: o cenário vira parede (colisão)
**Ela faz:**
1. Selecionar o objeto do **cenário/paredes** (o que deve bloquear o player).
2. Adicionar o behavior **Solid** nele.
3. Se as paredes forem um objeto separado do chão decorativo, aplicar `Solid` só
   nas paredes.
4. Ajustar o **polígono de colisão** (*Collision Polygon*) do `Player` e da parede
   se a batida estiver estranha (menu do editor de imagem → *Set collision polygon*).

**Teste agora:** Preview → o personagem **não atravessa** mais o cenário. Ele
esbarra e para.

> ⚠️ Pegadinhas comuns:
> - Behavior `Solid` foi posto **no player** em vez de na parede → ele trava tudo.
> - Objeto do cenário é uma imagem de fundo só (Tiled Background sem Solid, ou
>   está na camada errada) → não colide. Solid tem que estar no objeto certo.
> - Collision polygon cobrindo área transparente → "parede invisível".

### 50–55 min — ✅ MARCO MÍNIMO: a aula valeu
A Livia consegue, sozinha, explicar e refazer:
- [ ] criar um Sprite `Player`;
- [ ] adicionar o behavior de movimento e testar;
- [ ] adicionar `Solid` no cenário para criar colisão.

**Salvar o projeto** (menu ☰ → *Save* — no mesmo lugar de onde ela abriu). Não
sair sem salvar.

### 55–60 min — Fechamento
- Ela conta o que aprendeu com as próprias palavras.
- Mostrar onde isso vai continuar na próxima (animações, inimigos, ou objetivo do
  jogo).
- Anotar até onde ela chegou de verdade (ver "Registro pós-aula").

---

## Bônus — Se sobrar tempo

### Bônus 1: animações Idle e Walk
1. No editor de imagem do `Player`, painel *Animations*: renomear a animação atual
   para `Idle`, criar outra chamada `Walk` com 2–4 frames.
2. Ajustar **Speed** da animação `Walk` e marcar **Loop**.
3. Eventos (aí sim a Livia escreve, 2 linhas):
   - Condição: `8Direction` → *Is moving* → Ação: `Player` *Set animation* `"Walk"`.
   - Condição: `8Direction` → *Is moving* + inverter (X) → Ação: *Set animation* `"Idle"`.

**Teste agora:** parado ele fica em Idle, andando troca pra Walk.

### Bônus 2: câmera seguindo o personagem
1. Adicionar o behavior **Scroll To** no `Player`.
2. Se o personagem sai da tela nas bordas do mundo, conferir o tamanho da Layout
   (*Layout Properties* → *Size*) e a propriedade *Unbounded scrolling*.

**Teste agora:** a câmera acompanha o player pelo cenário.

### Bônus 3: espelhar o sprite na direção do movimento
- Evento: ao pressionar seta esquerda → `Player` *Set mirrored*; seta direita →
  *Set not mirrored*. (só faz sentido em jogo visto de lado.)

---

## Perguntas para conduzir a aula
- "Antes de apertar Preview: o que você acha que vai acontecer?"
- "O personagem anda sem a gente escrever nenhum evento. Como isso é possível?"
- "Qual objeto tem que receber o `Solid` — o personagem ou a parede? Por quê?"
- "Se você quisesse que ele andasse só pros lados, o que mudaria?"
- "O que é um behavior, com suas palavras?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| Personagem não anda no Preview | Behavior de movimento não foi adicionado, ou foi adicionado no objeto errado |
| Personagem atravessa o cenário | `Solid` não está na parede / cenário é fundo sem colisão / camadas diferentes |
| Personagem "gruda" numa parede invisível | Collision polygon cobre área transparente — reajustar no editor de imagem |
| Anda rápido demais / travado | `Max speed` muito alto / `Acceleration` muito baixo |
| Sprite gira de cabeça pra baixo | `Set angle` do 8 Direction em *360 degrees* — mudar para *No* |
| Animação não troca | Nome da animação no evento diferente do nome real (maiúsculas contam) |

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até: (marco mínimo? qual bônus?)
- Presença:
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema sugerido:
