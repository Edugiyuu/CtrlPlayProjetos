# Desafio D5 — Refatorar e criar um 2º tema

**Tempo:** 1 aula + casa · **Dificuldade:** ▓▓▓▓▓
**Arquivo:** `painel/estilo.css` (o painel já está pronto — agora reorganiza).

Seu `estilo.css` funciona, mas as cores estão **espalhadas**: `#7cc4ff`
aparece em `h1`, em `h2`, em `th`... Se você quisesse um tema novo, teria que
caçar cor por cor. Vamos arrumar isso.

---

## Aquecimento (5 min)

Sem olhar: quantos lugares diferentes do seu `estilo.css` usam a cor
`#7cc4ff`? Anote seu palpite, depois use o `Ctrl+F` do editor para conferir.

---

## Parte 1 — Juntar as cores no topo (na aula)

**Regra do desafio:** todo `color:` e todo `background-color:` do arquivo
devem viver **num único bloco no topo**, e cada cor de texto/fundo deve
aparecer **uma vez só**.

Como fazer sem repetir: **agrupe seletores com vírgula**.

```css
/* ============ CORES DO TEMA ============ */
body            { background-color: #0d1b2a; color: #e6f0fa; }
h1, h2, th      { color: #7cc4ff; }
.lema, .rodape  { color: #9fb8d0; }
.bloco          { background-color: #14263b; }
.tag-facil      { background-color: #16351f; color: #9be7ae; }
.tag-media      { background-color: #3a3413; color: #ffe07a; }
.tag-dificil    { background-color: #3a1616; color: #ff9b9b; }
.destaque       { background-color: #12324a; }
```

Depois, **abaixo**, deixe só a seção `ESTRUTURA` com o resto (fontes,
tamanhos, `padding`, `margin`, `border`, `border-radius`, `text-align`).
Tire de lá os `color`/`background-color` que já subiram.

**As bordas** (`#2f4a6b`) e a barra do aviso (`#7cc4ff`) ficam na estrutura
por enquanto — deixe um comentário avisando que num tema novo elas também
mudam.

### CHECK da Parte 1

- [ ] O painel está **visualmente idêntico** ao fim do D4.
- [ ] Toda cor de texto/fundo está no bloco `CORES DO TEMA`.
- [ ] Nenhuma cor de texto/fundo escrita duas vezes.
- [ ] O arquivo ficou **mais curto** (conte as linhas antes e depois).

Confira com `../gabarito/d5-acumulado.css`.

---

## Parte 2 — Tema FOGO (na aula, se der tempo)

Agora o pagamento pelo trabalho: troque **só o bloco `CORES DO TEMA`** (e as
bordas) pelos valores abaixo e veja o painel inteiro mudar de clima.

```css
body            { background-color: #1a0d0a; color: #ffe8d6; }
h1, h2, th      { color: #ff7a3d; }
.lema, .rodape  { color: #d99873; }
.bloco          { background-color: #24120e; }
.tag-facil      { background-color: #1f3d16; color: #a8e6a0; }
.tag-media      { background-color: #4a3a12; color: #ffe07a; }
.tag-dificil    { background-color: #4a1616; color: #ff9b9b; }
.destaque       { background-color: #3a1a12; }
```

Bordas na estrutura: `#2f4a6b` → `#7a2e1a` · barra do `.destaque`
`#7cc4ff` → `#ff7a3d`.

Confira com `../gabarito/d5-tema-fogo.css`.

### Rubrica

**Pronto quando:** trocar do tema azul para o tema fogo foi mexer **só** no
bloco de cores + nas linhas de borda — você **não** teve que tocar em nenhuma
regra de tamanho, espaçamento ou posição. Se teve, é porque alguma cor ficou
para trás na estrutura: volte e suba ela.

---

## Parte 3 — Tema PERGAMINHO (casa)

Um tema de papel antigo, **fundo claro**. Cuidado: com fundo claro, todas as
cores de texto precisam **escurecer** para continuar legíveis.

```css
body            { background-color: #efe3c8; color: #3a2c17; }
h1, h2, th      { color: #7a4a1e; }
.lema, .rodape  { color: #8a7a55; }
.bloco          { background-color: #f6efdd; }
.tag-facil      { background-color: #dfe8cf; color: #3f5c26; }
.tag-media      { background-color: #efe0bf; color: #7a5c16; }
.tag-dificil    { background-color: #efd3cf; color: #7a2419; }
.destaque       { background-color: #e7d6ac; }
```

Bordas: `#b79b6a` · barra do `.destaque`: `#7a4a1e`.

Salve cada tema num arquivo à parte para poder comparar:
`estilo.css` (azul), `estilo-fogo.css`, `estilo-pergaminho.css`. Troque o
`href` do `<link>` no `painel.html` para testar cada um.

Confira com `../gabarito/d5-tema-pergaminho.css`.

---

## Se travar, revise

- Agrupar seletores → `CARTAO-DE-MEMORIA.md` (`h1, h2 { ... }`).
- Quem vence quando duas regras mexem na mesma cor → seção "Os 3 seletores".
  Aqui todas têm a mesma força, então vence a **última** — mantenha o bloco
  de cores **antes** ou **depois** de forma consistente (o gabarito põe
  antes; funciona porque a estrutura não mexe em cor).

---

## Antes de fechar

Uma frase: por que juntar as cores num bloco só deixou a troca de tema tão
rápida?
