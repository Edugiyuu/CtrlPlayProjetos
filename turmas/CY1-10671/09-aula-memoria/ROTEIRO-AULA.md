# Memória: onde as coisas ficam guardadas — aula #9 · turma #10671 CY1

`bloco 1h30 · escopo real ~50 min` · 4 alunos (Enzo, Eric, Lucas Basso, Lucas Borges)

**Sai de:** "memória é uma coisa mágica lá dentro" → **chega em:** o nome é uma **seta**, a caixa é outra coisa — e duas setas podem apontar pra mesma
**Já tem:** `for`, `if`, variável, lista, `import`, `def` com parâmetro (#8) · **Não tem:** `return`
**Formato:** você explica no **board CS50** (projetor), depois roda **um script curto** em Python. Board → tela, quatro vezes, e eles fecham com o desafio da playlist.
**Fora:** bytes por tipo, ponteiro, busca binária, `sys.getsizeof`, compilação, `return`
**Abre com:** a foto do pente de memória no board. "Alguém sabe o que é isso? Já viu por dentro do PC?"

## Blocos

| Min | No board (você explica) | Na tela (eles rodam) |
|----:|---|---|
| 0–10 | Foto do pente. É peça física, cheia de casinhas. Cada uma guarda **uma** coisa e tem um **número** | — |
| 10–25 | A grade de células numeradas: o computador não acha nada por nome, só pelo número. **Desenhe a seta na lousa** (abaixo) | [`1-onde-mora.py`](./gabarito/1-onde-mora.py) → `6` e `5` em caixas diferentes; troca o `a` pra 5 e **a seta pula pra caixa do `b`** |
| 25–35 | Duas setas na **mesma** célula: "isso pode?" Desenhe o **ANTES do desenho 2** na lousa e pergunte o que sai no `lista1` depois do `append`. **Todos escrevem o palpite no papel** | — (ainda **não** rode) |
| 35–45 | Rode. Cada um compara com o próprio papel. **Desenho 2** na lousa + o **Eduardo/Edu** | [`2-duas-setas.py`](./gabarito/2-duas-setas.py) → `lista1 = [1, 2, 3, 4]` |
| **✅ 45** | **MARCO MÍNIMO — daqui pra baixo é bônus** | ele aponta o `e a mesma caixa? True` e diz "é uma caixa só, com duas setas" |
| 45–55 | Na lousa: como faz uma caixa **nova**? **Desenho 3**, ao lado do 2 | [`3-conserto.py`](./gabarito/3-conserto.py) → `e a mesma caixa? False`, `lista3` intacta |
| 55–65 | Palpite no papel dos **dois** `print` da `lista1`, depois roda. **Desenho 4**, um passo por vez | [`4-pula-ou-muda.py`](./gabarito/4-pula-ou-muda.py) → `lista1` pega o 4, mas **não** vira `[9, 9, 9]` |
| 65–80 | **VOCÊ FAZ:** [DESAFIO.md](./DESAFIO.md) — a playlist emprestada, no [`playlist.py`](./playlist.py). Você só destrava | passo 2 com a `minha` em 3 músicas e `is` dando `False` |
| 80–90 | **Galeria:** cada um roda o `playlist.py` do vizinho e aponta a linha que fez caixa nova | 4 telas, cada um acha o `list(...)` do outro |

**Atrasou?** encurta o 10–25 e vai direto pro palpite. **Nunca corta o 25–45.**
**Perdido no marco?** aponte a seta da lousa e rode o script 2 de novo, junto.
**Adiantou?** `a = 5 / b = a / b = b + 1`: o `a` não muda, o **`b` é que pula de caixa** — número não dá pra alterar por dentro, lista dá. Só se sobrar tempo de verdade.
**IA:** regra da #7 no minuto 1. Hoje dá pra ver quem colou: **o palpite no papel vem antes de rodar.**

## O board é C — o que usar e o que não

Em C **o nome é a caixa**: `int a = 5; int b = 5;` reserva duas, sempre. Em Python **o nome
é uma seta** pra uma caixa que vive em outro lugar. Aqui board e tela **discordam** — e a
turma leva a pancada se você desenhar a grade e rodar o script logo depois.

| ✅ Use o board para | ❌ Não use o board para |
|---|---|
| a peça física — memória é coisa que existe | "cada variável ocupa uma célula" (isso é C) |
| casinhas numeradas, enfileiradas, de tamanho fixo | a tabela de bytes por tipo (`int` 4, `char` 1...) |
| achar por número, não por nome | qualquer coisa com ponteiro ou `&` |

Os desenhos pra copiar na lousa estão em **[Desenhos pra lousa](#desenhos-pra-lousa)**,
logo abaixo. O nº 1 vai na lousa **antes do script 1** e fica lá a aula inteira.

Com a seta na lousa desde o minuto 10, o `lista2 = lista1` deixa de ser choque e vira
consequência: duas setas, uma caixa.

**A frase que resolve, no minuto 45:** *"a `lista1` não copiou nada. Nunca existiram duas
listas — existe **uma** lista com dois nomes."* Se travarem aí, use **Eduardo / Edu**: se o
Edu corta o cabelo, o Eduardo está de cabelo curto também. Não é cópia, é a mesma pessoa
com dois nomes. Estranho seria o Eduardo continuar cabeludo.

> **`id(a)` não mostra onde o `a` mora — mostra onde mora o valor pra onde o `a` aponta.**
> Em Python não dá pra perguntar onde a variável está. Se perguntarem, é essa a resposta.

## Desenhos pra lousa

### 1. O nome é uma seta — antes do script 1, e fica a aula inteira

```
   a ──────┐
           ├──→ ┌───────┐     o nome e uma SETA.
   b ──────┘    │   5   │     a caixa e outra coisa,
                └───────┘     e mora em outro lugar.
```

### 2. `lista2 = lista1` — uma caixa só · ANTES no bloco 25–35, DEPOIS no 35–45

```
   ANTES                            DEPOIS do lista2.append(4)

   lista1 ──┐                       lista1 ──┐
            ├──→ ┌───────────┐               ├──→ ┌──────────────┐
   lista2 ──┘    │ [1, 2, 3] │      lista2 ──┘    │ [1, 2, 3, 4] │
                 └───────────┘                    └──────────────┘

   uma caixa, duas setas            a caixa mudou POR DENTRO.
                                    os dois nomes veem a mudanca.
```

> Desenhe o **ANTES** com eles, antes de rodar. Depois de rodar, desenhe o **DEPOIS**
> ao lado e pergunte: **"quantas caixas tem no desenho?"** A resposta "uma" é o marco.

### 3. `lista4 = list(lista3)` — duas caixas · com o script 3

```
   ANTES                            DEPOIS do lista4.append(4)

   lista3 ──→ ┌───────────┐         lista3 ──→ ┌───────────┐
              │ [1, 2, 3] │                    │ [1, 2, 3] │  intacta
              └───────────┘                    └───────────┘

   lista4 ──→ ┌───────────┐         lista4 ──→ ┌──────────────┐
              │ [1, 2, 3] │                    │ [1, 2, 3, 4] │
              └───────────┘                    └──────────────┘

   list() fez uma caixa NOVA        mexer numa nao toca na outra
```

> Deixe o desenho 2 na lousa ao lado deste. A diferença inteira da aula está em
> olhar os dois juntos: **duas setas numa caixa** contra **duas caixas**.

### 4. A seta pula ou a caixa muda? · com o script 4

```
   PASSO 1 · lista2 = lista1

   lista1 ──┐
            ├──→ ┌───────────┐
   lista2 ──┘    │ [1, 2, 3] │        uma caixa, duas setas
                 └───────────┘


   PASSO 2 · lista2.append(4)

   lista1 ──┐
            ├──→ ┌──────────────┐
   lista2 ──┘    │ [1, 2, 3, 4] │     a caixa MUDA por dentro.
                 └──────────────┘     os dois nomes veem.


   PASSO 3 · lista2 = [9, 9, 9]

   lista1 ──────→ ┌──────────────┐
                  │ [1, 2, 3, 4] │    a caixa velha fica como estava.
                  └──────────────┘

   lista2 ──────→ ┌───────────┐
                  │ [9, 9, 9] │       a SETA do lista2 PULA
                  └───────────┘       pra uma caixa nova.
```

> **A regra que o script 4 mostra:** `append` mexe **dentro** da caixa — quem aponta pra ela
> vê. `=` faz a **seta pular** — a caixa antiga não é tocada. É a mesma coisa do script 1
> (a seta do `a` pulou), só que agora com lista.
>
> Desenhe **um passo por vez**, na ordem, só depois que eles leram o `print`
> correspondente. Se desenhar tudo de uma vez, vira resposta pronta.

## Conceitos

| Termo | Em 1 frase, sem jargão | ✋ Checagem (resposta boa) |
|---|---|---|
| memória | A peça física da foto: prateleira gigante de casinhas numeradas | "cabe quanta coisa numa casinha?" ("uma só") |
| caixa | Uma casinha da prateleira. É onde o valor fica de verdade | "onde mora o `5`?" ("numa caixa, a de número tal") |
| nome (variável) | Uma **seta** apontando pra uma caixa. **Não** é a caixa | "quantas caixas em `lista2 = lista1`?" ("uma só, com duas setas") |
| a caixa é do valor | Caixa pertence ao **valor**, não ao nome. Valores diferentes → caixas diferentes, **sempre** | "`a = 6` e `b = 5`, quantas caixas?" ("duas") |
| `id(coisa)` | O número da caixa pra onde a seta aponta | "troquei o `a` e o número mudou — o que andou?" ("a seta, não a caixa") |
| `is` | Pergunta "é a mesma caixa?" — `==` pergunta "tem o mesmo valor?" | "`[1,2] == [1,2]` é True. E `is`?" ("False, são duas caixas") |
| `list(outra)` | Faz uma caixa **nova** com o mesmo conteúdo | "e se eu só escrever `l2 = l1`?" ("não copia, só aponta outra seta") |

> **O `id()` é gigante e ninguém precisa ler.** Ele está ali só pra provar que o valor mora
> em algum lugar de verdade. Quem responde "é a mesma caixa?" é o `is`, com `True`/`False`.

## Erros comuns

| Ele vê | Você checa |
|---|---|
| **"mas `a` e `b` não eram pra ser separados?"** | são: cada **nome** é uma seta própria. O que é igual é a **caixa** pra onde as duas apontam. Aponte a lousa |
| `a = 5` / `b = 5` dá a **mesma** caixa | número não dá pra alterar, então o Python reaproveita em vez de fabricar outra. Uma frase e segue — com lista é diferente |
| "e a caixa do 6, sumiu?" | continua lá, sem ninguém apontando. O Python joga fora depois. **Não abra** isso hoje |
| o número da caixa muda toda vez que roda | normal — diga **antes** de rodar. Ninguém precisa ler nem decorar o número |
| a `lista1` **não** mudou | ele escreveu `lista2 = list(lista1)` — olhou o script 3 antes do 2 |
| **"mas você disse que ia mexer só na `lista2`!"** | é a armadilha, e é o ponto da aula: não dá pra mexer "só na `lista2`", porque ela não é uma lista própria. Uma caixa, dois nomes. Aponte os dois `id` iguais |
| palpite do script 4: "a `lista1` vira `[9, 9, 9]`" | é o erro esperado — ele achou que `=` mexe na caixa, igual ao `append`. Mostre o **passo 3** do desenho 4: a seta pulou, a caixa velha ficou |
| no desafio, as duas playlists mudam no passo 2 | escreveu `amigo = minha` de novo, ou não reescreveu a `minha` (ainda estragada do passo 1) |
| "então lista é tudo igual?" | não — `lista3` e `lista4` do script 3 dão `False`. Rode os dois lado a lado |
| "o número dele é diferente do meu" | cada máquina guarda onde quiser. Só vale comparar **dentro** da mesma tela |
| `NameError: name 'lista1' is not defined` | rodou o arquivo errado, ou não salvou |

## Antes de começar

- [ ] Board **CS50** no projetor, já na foto do pente e na grade de células
- [ ] Os 4 scripts do [`gabarito/`](./gabarito/) **e o [`playlist.py`](./playlist.py)** copiados pras 4 máquinas **antes** da aula — o `desafio-playlist.py` **não** (é a resposta)
- [ ] Papel e caneta em cada mesa — o palpite do bloco 25–35 é escrito à mão
- [ ] [`CARTAO-DE-MEMORIA.md`](./CARTAO-DE-MEMORIA.md) impresso, 1 por aluno
- [ ] Lousa livre pro desenho da seta, que fica lá a aula inteira

---

Código pronto: [`gabarito/`](./gabarito/) · resposta do desafio: [`gabarito/desafio-playlist.py`](./gabarito/desafio-playlist.py)
