# Roteiro de Aula #13: Unindo Backend (SQL) e Frontend

- Turma #11350 (CY4 / Sáb 14h) — Benício, Caio, Nicolas · ~1h30
- Sai de: API que só responde no Insomnia → chega em: tela React listando e cadastrando livros
- Pré-requisito real: React básico (componentes, props, estado) + API da Biblioteca das aulas #7–#9
- Não entra hoje: login/cookie (depende das #10–#12) e filtro por query param
- Gabarito rodando, com os dois projetos: [gabarito/](gabarito/)

## Conceitos

| Conceito | Definição em 1 linha | Checagem antes de avançar |
|---|---|---|
| Origem | protocolo + endereço + porta; `:3000` e `:5173` são origens diferentes | "O front e a API estão no mesmo computador. São a mesma origem?" |
| CORS | o servidor dizendo quais origens podem chamá-lo | "Quem bloqueia a chamada: o navegador ou o Express?" |
| `useEffect` com `[]` | roda uma vez, quando a tela abre | "Se eu tirar o `[]`, o que acontece com o fetch?" |

## Blocos

| Tempo | Bloco | Eles fazem | Teste agora |
|---:|---|---|---|
| 0–10 | Os dois projetos no ar | subir backend (3000) e criar o front com Vite (5173) | os dois `npm run dev` rodando em terminais separados |
| 10–20 | Ver o erro de CORS | chamar a API pelo console do navegador, sem configurar nada | erro vermelho no console — **esse é o ponto da aula** |
| 20–30 | Liberar no backend | instalar e configurar o `cors` com a origem do front | a mesma chamada do console agora responde |
| 30–55 | **Listar os livros** | componente com `useState` + `useEffect` + `fetch` | 🏁 **MARCO MÍNIMO**: títulos e autores na tela |
| 55–60 | PONTO DE PARADA | — | travou em CORS/fetch? fica aqui, o resto é bônus |
| 60–85 | Cadastrar (bônus) | formulário controlado + `POST`, `<select>` de autores vindo de `/autores` | livro novo aparece na lista sem recarregar |
| 85–90 | Fechamento | — | perguntar por que o cadastro precisa do `autorId` |

## Erros comuns

| Sintoma | Causa provável |
|---|---|
| Erro de CORS no console | `origin` não bate com o endereço real do front (porta trocada) |
| Lista nunca aparece, requisição em loop | `useEffect` sem o `[]` |
| `Cannot read properties of undefined (reading 'nome')` | esqueceram o `include` do autor no `findAll` |
| `require is not defined` | backend é ESM: usar `import`, e com o `.js` no fim do caminho |
| Tela em branco após salvar | esqueceram o `preventDefault()` no submit |

## Se sobrar tempo

1. Botão que marca o livro como emprestado (`PATCH`) — está no gabarito.
2. Mostrar "nenhum livro cadastrado" quando a lista vier vazia.
3. Comentar o `cors()` de novo e prever, antes de recarregar, o que vai quebrar.

## Registro pós-aula
_Não preencher aqui. **Despeje cru** o que lembrar — o registro estruturado sai daí.
Ver [WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até: (marco mínimo? cadastrou?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #14 — CRUD com Sequelize (projeto novo: Lista de Tarefas)
