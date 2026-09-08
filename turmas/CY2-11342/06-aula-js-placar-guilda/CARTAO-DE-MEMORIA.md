# Cartão de memória — primeiro JavaScript (aula #6)

> Deixe numa aba aberta. É tudo o que você precisa para os 4 desafios.
> JavaScript é o que faz a página **agir**: o CSS deixa bonito, o JS deixa vivo.

---

## Ligar o JS na página

Já está feito no `painel.html`, no fim do `<body>`:

```html
<script src="placar.js"></script>
```

Fica no **fim** do body de propósito: aí a página inteira já existe quando o
script roda, e o `querySelector` consegue achar os elementos.

---

## O Console (sua principal ferramenta)

- Abre com **F12** → aba **Console**.
- `console.log("algo")` escreve no Console — use para conferir se o código rodou
  e para ver valores.
- **Erro de JavaScript aparece lá em vermelho.** Se algo "não funciona", o
  Console quase sempre diz o quê e em que linha.

---

## Achar um pedaço da página

| Escrevo | Devolve |
|---------|---------|
| `document.querySelector("#btn-aurora")` | o **primeiro** elemento que casa com o seletor (aqui, o de `id="btn-aurora"`) |
| `document.querySelector(".pontos")` | o primeiro elemento com `class="pontos"` |
| `document.querySelectorAll(".btn-mais")` | uma **lista** com **todos** os que casam |
| `elemento.querySelector(".pontos")` | procura **só dentro** daquele elemento |
| `botao.closest("tr")` | sobe a partir do `botao` até achar o `<tr>` que o contém |

O seletor entre aspas é **o mesmo do CSS** (`#id`, `.classe`, `tag`).

Se o `querySelector` não acha nada, devolve `null` — e mexer em `null` dá o erro
`Cannot read properties of null`.

---

## Ler e trocar o conteúdo

```js
elemento.textContent            // lê o texto que está dentro do elemento
elemento.textContent = "990"    // troca esse texto
```

`campo.value` → o que está digitado num `<input>` ou escolhido num `<select>`.

**Tudo isso é TEXTO.** Para fazer conta, converta para número:

```js
Number("980")        // 980  (agora dá para somar)
Number("980") + 10   // 990
"980" + 10           // "98010"  <- ERRADO: juntou dois textos
```

---

## Reagir a um clique

```js
botao.addEventListener("click", function () {
  // isto roda toda vez que clicarem no botao
});
```

Lê-se: "no `botao`, escute o evento `click`; quando acontecer, rode esta função".

---

## Fazer o mesmo para vários (loop)

```js
const botoes = document.querySelectorAll(".btn-mais");
botoes.forEach(function (botao) {
  // isto roda uma vez para CADA botao da lista
});
```

---

## Guarda: sair cedo se algo está errado

```js
if (nome === "") {
  return;          // encerra a função aqui; nada abaixo roda
}
```

---

## Criar um elemento novo (E4)

```js
const linha = document.createElement("tr");
linha.innerHTML = `
  <td class="posicao">4</td>
  <td class="nome">${nome}</td>
  <td class="pontos">0</td>
`;
document.querySelector("#corpo-ranking").appendChild(linha);
```

- Texto entre **crases** ` `` ` pode ter várias linhas e aceita `${ ... }` para
  encaixar um valor no meio.
- `.trim()` tira espaços das pontas de um texto: `" Léo ".trim()` → `"Léo"`.

---

## FORA DE ESCOPO nesta aula

Bibliotecas (jQuery, React), `fetch` / servidor / API, `localStorage`,
`async`/`await`, `setTimeout`. Só DOM puro: achar elemento, ler/trocar texto,
ouvir clique.
