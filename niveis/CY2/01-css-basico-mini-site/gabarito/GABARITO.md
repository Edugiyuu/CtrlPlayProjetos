# Gabarito do DESAFIO.md — para o professor

Site pronto em [`site/`](./site/). Abra o `site/index.html` no navegador e clique
no menu: as três páginas trocam entre si. Os arquivos que o aluno recebe (mesmo
HTML, `<style>` vazio) estão em [`../inicial/`](../inicial/).

---

## O CSS completo

É o mesmo bloco nos três arquivos. Ele cresce na ordem das etapas do DESAFIO —
não entregue pronto, construa junto na tela.

```css
body {
  background-color: #FFFFFF;
  font-family: Arial, sans-serif;
  margin: 0;                      /* tira a margem que o navegador já põe */
}

.header {
  background-color: #1E293B;      /* etapa 2 */
  color: #FFFFFF;
  padding: 20px 24px;             /* etapa 3 */
}

.menu {
  background-color: #334155;
  padding: 14px 24px;
}

.menu a {
  color: #CBD5E1;
  text-decoration: none;
  margin-right: 24px;             /* o vão entre os links */
}

.menu a.ativo {
  color: #38BDF8;
  font-weight: bold;
}

.conteudo { padding: 24px; }
.titulo   { color: #0F172A; }
.texto    { color: #475569; }

.card {
  padding: 20px;                  /* etapa 4 */
  margin-bottom: 20px;
  border-radius: 12px;            /* etapa 5 */
}

.card-amarelo { background-color: #FEF3C7; }
.card-verde   { background-color: #DCFCE7; }

.caixa {                          /* sobre.html */
  background-color: #FFFFFF;
  border: 2px solid #CBD5E1;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.destaque  { background-color: #FCE7F3; padding: 20px; border-radius: 12px; }

.caixa-azul {                     /* contato.html */
  background-color: #DBEAFE;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.botao {
  background-color: #2563EB;
  color: #FFFFFF;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 8px;
}

.rodape {
  background-color: #1E293B;
  color: #94A3B8;
  padding: 20px 24px;
}
```

---

## Etapa por etapa — o que mostrar

**Etapa 2 (`color` / `background-color`).** Pinte só o `.header` e pare. Pergunte
antes de salvar: "a letra vai ficar branca ou o fundo?" A confusão entre as duas
é o erro número um; deixe ele errar e corrigir na tela.

**Etapa 3 (`padding`).** O momento que vale a aula: com o `.header` já escuro,
suba o padding de `0` pra `24px` e peça pra ele olhar o **fundo**, não o texto. O
fundo cresce junto — é por isso que o espaço é "por dentro".

**Etapa 4 (`margin`).** Peça pra ele **tirar** o `margin-bottom` depois de pôr. Os
cards grudam. Põe de volta. Dois segundos, e o conceito fecha.

**Etapa 5 (`border-radius`).** Deixe ele exagerar: `border-radius: 60px`. Vira
pílula. Aí ele entende que o valor é o raio do canto, não um liga/desliga.

**Etapa 6 (os links).** O aluno copia o `<style>` inteiro pro `sobre.html`. Ele
vai reclamar. **Deixe reclamar** — é o gancho da aula 02 (CSS externo). Não
entregue o `.css` separado hoje.

A classe `ativo` muda de página pra página: em `sobre.html`, quem tem
`class="ativo"` é o link do Sobre.

---

## Perguntas da aula — respostas esperadas

| Pergunta | Resposta boa | Se ele errar |
|---|---|---|
| "Quero o fundo amarelo, uso qual?" | `background-color` | volte na tela 1 do Figma |
| "O fundo cresce junto com o padding?" | sim, o espaço é por dentro | tire e ponha o padding na frente dele |
| "Pra afastar dois cards, qual?" | `margin` | mostre os dois blocos da tela 3 |
| "`border: solid red 2px` funciona?" | não — é `2px solid red` | a ordem é grossura, tipo, cor |
| "Por que o href é só `sobre.html`?" | os arquivos estão na mesma pasta | mostre a pasta no explorador |

---

## Erros que vão acontecer

**"Meu CSS inteiro parou."** Falta `;` ou `}` numa regra **acima** da que ele está
mexendo. O navegador engole a regra quebrada e tudo que vem depois. Mande ele
olhar a regra anterior, não a atual — esse reflexo economiza a aula inteira.

**"Cliquei no menu e deu erro."** Três causas, nessa ordem de frequência: nome do
arquivo diferente do `href` (`Sobre.html` ≠ `sobre.html`), arquivo salvo em outra
pasta, ou arquivo salvo como `sobre.html.txt` pelo Bloco de Notas.

**"O padding não fez nada."** Ele aplicou num `<a>` ou num pedaço de texto solto.
Padding e margin funcionam direito em caixa — `div`, `p`, `h1`.

**As três páginas ficaram diferentes.** Ele reescreveu o `<style>` em vez de
copiar. Não conserte por ele: pergunte quanto tempo levou, e quanto levaria se
fossem dez páginas.

---

## Se sobrar tempo

**`contato.html`** está pronto em `site/contato.html`. O botão é um `<a>` com
`background-color`, `padding` e `border-radius: 8px` — repare que é só isso: não
existe tag de botão aqui, é um link pintado.

**Paleta.** Mantenha a regra única: fundo escuro pede letra clara. Se ele puser
texto cinza em fundo cinza, não conserte — peça pra ele ler de longe.
