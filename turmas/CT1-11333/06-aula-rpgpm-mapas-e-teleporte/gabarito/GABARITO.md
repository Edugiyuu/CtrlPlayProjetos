# Gabarito do DESAFIO.md — para o professor

Versão usada: **RPG Paper Maker 3.2.14 (web)**.
Ponto de partida (fim da aula, antes do desafio): `Floresta` e `Caverna`
pintadas, e os **dois** teleportes entre `Vila` e `Floresta` funcionando.

---

## A tabela mestra dos 4 teleportes

Deixe isto aberto a aula inteira. Toda vez que algo não funcionar, confira
linha por linha.

| # | Objeto (nome sugerido) | Fica no mapa | `Object ID` | Mapa de destino | Square de destino |
|---|---|---|---|---|---|
| 1 | `Saida para a Floresta` | `Vila` | `> Hero` | `Floresta` | entrada da floresta |
| 2 | `Volta para a Vila` | `Floresta` | `> Hero` | `Vila` | **ao lado** da saída da vila |
| 3 | `Entrada da Caverna` | `Floresta` | `> Hero` | `Caverna` | entrada da caverna |
| 4 | `Saida da Caverna` | `Caverna` | `> Hero` | `Floresta` | **ao lado** da entrada da caverna |

Todos os quatro: **sem `Graphics`**, comando único `Teleport object...` dentro
do evento `Hero action`.

---

## Caminho exato de cliques (o teleporte)

1. Aba `Object` → clique duplo num square vazio → `Edit object...`.
2. `Name`: nome da tabela acima. **Não** mexer em `Graphics`.
3. Clique duplo na linha `>` da lista de comandos do `Hero action`.
4. `Commands...` → aba `Staging` → **`Teleport object...`**.
5. `Object ID`: deixar `Selection` / `> Hero`.
6. `Position`: deixar marcado o rádio **`Select:`** → botão `Select...`.
7. Na janela que abre, escolher o **mapa** de destino e clicar no **square**.
8. Conferir o texto que aparece: `Map ID: N [pasta/mapa]`, `X`, `Z`, `Y`.
9. `OK` → `OK` → `CTRL + S` → `CTRL + P`.

> O rádio `Enter:` (digitar `Map ID`, `X`, `Y`, `Z` na mão) existe e funciona,
> mas **não use com ele**: errar um número dá "caiu no vazio" e vira caça ao
> fantasma. Sempre `Select...`.

---

## Parte 1 — Entrar na caverna

Teleporte nº 3 da tabela. Estado esperado: objeto invisível no último square
do caminho da floresta, destino `Caverna`.

Erro clássico aqui: ele cria o objeto **na caverna** em vez de na floresta,
porque está pensando no destino e não em onde o jogador pisa. Pergunta que
resolve: "onde o jogador está quando esse teleporte tem que acontecer?".

---

## Parte 2 — Sair da caverna

Teleporte nº 4. Estado esperado: objeto invisível na entrada da caverna,
destino `Floresta`, **um ou dois squares ao lado** do objeto nº 3.

⚠️ Se ele mandar a chegada exatamente pro square do objeto nº 3, o jogo entra
em loop (entra e sai da caverna infinitamente). **Deixe acontecer uma vez** —
é a melhor demonstração possível do conceito — e só depois conserte junto.

---

## Parte 3 — Marcar o covil

Só decoração do mapa `Caverna`, com **o square do meio do fundo livre**.

Anote onde ficou esse espaço: é ali que entra o monstro na aula #7.

---

## Parte 4 — A travessia completa

Percurso Vila → Floresta → Caverna → Floresta → Vila, sem tocar no editor.

**É a avaliação da aula.** Se qualquer trecho falhar, o conserto é dele, com
a tabela mestra na mão. Seu papel é só perguntar "qual dos quatro é esse?".

---

## Estado final esperado

Projeto `A Vila e a Caverna`:

- `Vila` — da aula #5 + objeto nº 1
- `Floresta` — pintada, caminho de ponta a ponta, objetos nº 2 e nº 3
- `Caverna` — pintada, fundo decorado com espaço vazio, objeto nº 4
- Travessia completa funcionando nos dois sentidos
- `.zip` exportado

---

## Respostas esperadas

- **"Por que são 4 teleportes e não 2?"** → "porque cada teleporte só leva pra
  um lado; a volta precisa de outro objeto no outro mapa".
- **"Por que o portal não tem gráfico?"** → "porque ele não precisa aparecer;
  objeto sem gráfico continua funcionando". (Fecha a dúvida da aula #4.)
- **"O que acontece se a chegada for em cima do portal de volta?"** → "eu sou
  teleportado de novo na hora, num loop".

---

## Gabarito do "Se sobrar tempo"

1. **Escurecer a caverna:** objeto invisível na entrada da caverna com
   `Commands... > Staging > Change screen tone...` e uma cor escura.
   ⚠️ A tela continua escura depois que ele sai da caverna — precisa de outro
   comando de tom normal no portal de saída. Isso é ótimo: mostra que o efeito
   é "estado do jogo", não "propriedade do mapa". Se der confusão, desfaça.
2. **Música por mapa:** propriedades do mapa (botão direito no nome).
3. **Som ao entrar:** `Commands... > Map > Play a sound...` **antes** do
   `Teleport object...` no mesmo objeto.
4. **Caminho único na floresta:** só `Face sprite`, sem comando nenhum.

---

## Se os 4 teleportes não fecharam

Marco mínimo é Vila ↔ Floresta. A aula #7 **abre** terminando a caverna: sem
caminho até lá, não existe batalha. Nesse caso, corte na #7 a loja/baú e fique
só na batalha.
