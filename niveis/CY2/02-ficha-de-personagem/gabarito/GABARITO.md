# Gabarito do DESAFIO.md — para o professor

Time de Heróis pronto em [`ficha/`](./ficha/) (título + 3 cartões lado a lado). Abra o `ficha/ficha.html` no navegador. Os
arquivos que o aluno recebe (mesmo HTML, com o `.css` vazio) estão em [`../inicial/`](../inicial/).

---

## O CSS completo

É o conteúdo de `ficha/estilos.css`. O `<link>` no `<head>` já vem no HTML.

Ele cresce na ordem das etapas do DESAFIO — não entregue pronto, construa junto na tela.

```css
body {
  background-color: #0F172A;      /* etapa 2 */
  font-family: Arial, sans-serif;
  text-align: center;             /* etapa 9: centraliza a fileira de cartões */
}

.titulo {                         /* etapa 7 */
  color: #FFFFFF;
  text-align: center;
  font-size: 40px;
  margin-top: 40px;
  margin-bottom: 0;
}

.ficha {
  display: inline-block;          /* etapa 9 */
  vertical-align: top;            /* etapa 9 */
  width: 300px;                   /* etapa 3 */
  margin: 20px 10px;              /* etapa 3 era 40px auto; na etapa 9 vira este */
  padding: 24px;                  /* etapa 2 */
  background-color: #1E293B;
  border: 3px solid #22D3EE;
  border-radius: 20px;
  text-align: center;             /* etapa 3 */
}

.foto {
  width: 160px;                   /* etapa 4 */
  height: 160px;
  border: 4px solid #22D3EE;
  border-radius: 80px;            /* metade do lado = círculo */
}

.nome {
  color: #FFFFFF;
  font-size: 32px;                /* etapa 5 */
  margin-top: 16px;
  margin-bottom: 12px;
}

.nivel {
  width: 120px;
  margin: 0 auto 24px auto;
  padding: 8px;
  background-color: #22D3EE;
  color: #1E293B;
  font-weight: bold;
  border-radius: 20px;
}

.rotulo {
  color: #F1F5F9;
  font-size: 18px;
  margin-bottom: 8px;
}

.barra-fundo {                    /* etapa 6 — caixa de fora */
  width: 300px;
  height: 20px;
  margin: 0 auto;
  background-color: #475569;
  border-radius: 10px;
}

.barra-hp {                       /* caixa de dentro: cor e altura */
  height: 20px;
  background-color: #EF4444;
  border-radius: 10px;
}

.hp-70  { width: 210px; }         /* 2º apelido: só a largura. HP ÷ 100 × 300 */
.hp-30  { width: 90px; }
.hp-100 { width: 300px; }

.tipo {
  color: #94A3B8;
  font-size: 14px;
  margin-top: 24px;
}
```

Hover (bônus, já está no gabarito): `.nivel:hover` e `.foto:hover` mudam de cor, e
`transition: 0.3s;` fica na regra **normal**, não na do hover.

Barra de MP (bônus): mesma estrutura, `.barra-mp` com `width: 120px;` e `background-color: #3B82F6;`.

---

## Etapa por etapa — o que mostrar

**Antes da etapa 1 (arquivo `.css` + apelido / `class`).** Mostre o `<link>` no `<head>`: "esta linha liga o HTML ao arquivo de visual". Eles vão escrever CSS no `.css`, não no HTML. O erro mais comum: salvar só o `.html` e achar que nada mudou.
 Eles ainda não viram `class` nem `id`. Diga só:
"cada caixa tem um **apelido**; no CSS você chama pelo apelido com um **ponto** na frente".
Mostre `<div class="ficha">` e `.ficha { }` lado a lado, e faça ele achar o apelido de
três caixas na página. **Não fale de `id`** hoje, nem de duas classes na mesma tag. O erro
que vai aparecer: escrever `ficha { }` sem o ponto — a regra não pinta nada.

**Etapa 2 (revisão).** Deixe ele escrever sozinho o que já sabe. É a chance de ver
se `padding` e `border-radius` ficaram. Se ele errar a ordem do `border`, a pergunta é
"grossura, tipo, cor — qual está faltando?".

**Etapa 3 (`width` + `margin: auto`).** O momento que vale a aula. Com o cartão
esticado, ponha o `margin: 40px auto` **sem** `width` e deixe ele ver que nada
muda. Depois ponha o `width: 300px`. Ele entende que a caixa precisa de largura pra
sobrar espaço dos lados. Em seguida o `text-align: center` — pergunte: "centralizou a
caixa ou o que está dentro dela?".

**Etapa 4 (foto).** Peça pra ele pôr `border-radius: 20px` e depois `80px`. A foto é
`160px`: metade do lado vira círculo. Se ele puser `200px`, continua círculo — o
valor é só o raio máximo.

**Etapa 5 (`font-size`).** Deixe ele exagerar: `font-size: 80px`. Depois ele acha o
tamanho que gosta. `font-weight: bold` vem pronto no gabarito, sem explicar muito:
"deixa a letra grossa".

**Etapa 6 (barra de HP).** Mostre antes a **ideia** no papel: um retângulo cinza com um
vermelho dentro, mais curto. Só depois escreva o CSS. A pergunta de fechamento: "o
personagem apanhou e ficou com 30 de HP. O que você muda?" — o `width` da vermelha
vira `90px`. Se ele mudar o `width` da cinza, a barra inteira encolhe: serve de contraexemplo.

**Etapa 7 (título).** Dois minutos. É revisão de `text-align` e `font-size`: deixe ele
escrever sem ajuda. Se esquecer o `margin-top`, o título gruda no topo — ótimo pra ele perceber.

**Etapa 8 (3 cartões).** O ponto da aula. Quando ele colar o cartão 2, **não mexa em nada
no CSS**: pergunte "por que ficou pintado?". A resposta é que a `class` é a mesma, então
o apelido foi junto na cópia, então a regra vale pra todo mundo. Esse é o ponto da aula: um `.css` e um apelido valem pra quantos cartões você copiar.
O que muda em cada cartão é só HTML: foto, nome, nível, número do HP e o `width` da barra.
A conta do `width`: `HP ÷ 100 × 300` (70 → 210, 30 → 90, 100 → 300). Cada barra tem **dois apelidos**
(`class="barra-hp hp-30"`): o primeiro dá cor e altura, o segundo dá a largura. Explique só
isso: "dois apelidos na mesma tag, separados por espaço". É a única regra nova por cartão.

**Etapa 9 (lado a lado).** Os 3 cartões estão empilhados: é a deixa. Mostre a tela 8 do
Figma antes. Três mudanças: `body { text-align: center; }`, e na `.ficha`:
`display: inline-block;`, `vertical-align: top;` e `margin: 20px 10px;` (no lugar de
`40px auto`). Explique `inline-block` só como "a caixa ocupa só a largura dela, não a
linha toda". Faça na ordem: primeiro só o `inline-block` — a fileira cola na esquerda.
Pergunte "por que o `margin: auto` parou de centralizar?". Aí entra o `text-align` do
`body`. Em janela estreita o terceiro cartão quebra de linha.

---

## Bônus — hover

Só se ele chegou no marco. Mostre a tela 6 do Figma antes: dois estados lado a lado.
Primeiro sem `transition`: a cor troca num estalo. Depois ponha `transition: 0.3s;`.
Se ele puser o `transition` dentro do `:hover`, a cor muda devagar na ida e **volta de
estalo** — deixe ele ver e perguntar por quê. Resposta: a regra normal é a que manda na volta.

---

## Perguntas da aula — respostas esperadas

| Pergunta | Resposta boa | Se ele errar |
|---|---|---|
| "Qual centraliza a caixa e qual o texto?" | `margin: 0 auto` a caixa, `text-align` o conteúdo | tire um de cada vez e mostre |
| "`margin: 0 auto` não centralizou. O que falta?" | `width` | tire o `width` da `.ficha` e ponha de volta |
| "A foto tem 160px. Qual radius faz círculo?" | 80px (metade) | teste 20px, 50px, 80px na tela |
| "HP 30 de 100: o que eu mudo?" | `width` da barra vermelha, 90px | desenhe as duas caixas no papel |
| "Por que a cor volta quando tiro o mouse?" | a regra `:hover` só vale enquanto ele está em cima | tire o mouse devagar e mostre |
| "Por que a barra de dentro é menor?" | ela mostra a **parte** da vida que sobrou | volte na tela 4 do Figma |

---

## Erros que vão acontecer

**"A foto aparece quebrada."** Quase sempre a imagem (`personagem.svg`, `guerreiro.svg`, `arqueira.svg`) está em outra pasta ou ele
salvou o HTML da aula fora de `inicial/`. Mande ele abrir a pasta no explorador e ver
se os dois arquivos estão lado a lado.

**"A barra de HP sumiu."** Falta `height`. Uma caixa sem conteúdo e sem altura tem
0px — existe, mas não se vê. É o mesmo princípio do `padding` da aula 01: caixa vazia não aparece.

**"Pus `width: 70%`."** Funciona, mas a porcentagem não foi ensinada. Aceite e use como
gancho: "70% de quê? Da caixa de fora". Não precisa aprofundar hoje.

**"Os cartões 2 e 3 ficaram sem cor."** Ele trocou o nome da `class` ao editar a cópia (`ficha` → `ficha2`), ou colou fora do `<body>`. Mande comparar com o cartão 1.

**"Mudei o HP escrito e a barra não mexeu."** O número no texto e o `width` da barra são independentes. O aluno tem que mudar os dois. É bom: mostra que HTML e CSS são coisas separadas.

**"Cartão centralizado só na página branca."** Ele esqueceu o `body` escuro; confira etapa 2.

**O CSS inteiro parou.** Igual à aula 01: falta `;` ou `}` na regra anterior.

---

## Se sobrar tempo

**Barra de MP.** É copiar e colar duas caixas e mudar nome de classe, `width` e cor.
Ele vai criar `.barra-fundo-mp` e `.barra-mp`: ótimo, reforça que cada caixa tem um nome.

**Herói dele.** Regra única: o `width` da barra de dentro = `HP ÷ 100 × 300`.
Se ele errar a conta, não conserte: peça pra ele olhar a barra e dizer se faz sentido.

**Foto própria.** A imagem precisa estar na mesma pasta e ter proporção quadrada. Se
ficar esticada, é porque `width` e `height` são diferentes.
