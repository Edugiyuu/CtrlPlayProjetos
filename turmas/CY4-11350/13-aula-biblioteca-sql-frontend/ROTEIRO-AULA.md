# Roteiro de Aula #13: Unindo Backend (SQL) e Frontend

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: React novo (Vite) consumindo a API da Biblioteca Digital
- Duração: ~1h30
- Pré-requisito: React básico, API com login por cookie (aulas #7–#12).

## Objetivo
Ter uma tela React listando os livros da API, e o login funcionando pelo
front usando o cookie httpOnly.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| CORS — o que é e por que dá erro sem configurar | Parte 0 |
| `fetch`/`axios` com cookies entre origens (`credentials`) | Passo 2 |
| `useEffect` para buscar dados ao carregar a tela | Passo 2 |
| Formulário de login controlado | Passo 3 |

---

## 0–10 min — Parte 0: por que vai dar erro de CORS

- O backend roda em `http://localhost:3000` (por exemplo) e o front em
  `http://localhost:5173` — **origens diferentes** aos olhos do navegador,
  mesmo sendo o mesmo computador.
- Por padrão, o navegador **bloqueia** uma página de uma origem de chamar uma
  API de outra origem, a não ser que o servidor diga explicitamente "essa
  origem pode me chamar" — isso é **CORS** (*Cross-Origin Resource Sharing*).
- Isso fica ainda mais importante porque estamos usando **cookie** pra
  autenticação (aula #12): o navegador só manda o cookie entre origens
  diferentes se o servidor autorizar isso também.

---

## 10–20 min — Passo 1: configurar CORS no backend

**Eles fazem**, no projeto Express:
```bash
npm install cors
```
```js
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // endereço do front
  credentials: true, // permite enviar/receber cookies
}));
```

**Teste agora:** com o front ainda vazio, chamar a API pelo navegador
(console do DevTools: `fetch('http://localhost:3000/livros').then(r => r.json()).then(console.log)`)
e confirmar que não dá mais erro de CORS.

---

## 20–50 min — Passo 2: criar o front e listar os livros

**Eles fazem:**
1. `npm create vite@latest biblioteca-front -- --template react` e
   `npm install` dentro da pasta criada.
2. Criar um componente `ListaLivros` que:
   - usa `useState` para guardar a lista de livros;
   - usa `useEffect` para buscar `GET http://localhost:3000/livros` quando o
     componente carrega;
   - renderiza um `<ul>` com o título e o nome do autor de cada livro.
3. Se usarem `axios`: `npm install axios`, e configurar
   `axios.get(url, { withCredentials: true })`. Se usarem `fetch`:
   `fetch(url, { credentials: 'include' })`.

**Teste agora:** abrir o front no navegador — a lista de livros da API deve
aparecer na tela.

### 50–55 min — PONTO DE PARADA
Se a lista de livros já aparece, seguir para o login. Se travou em CORS ou
no fetch, ficar aqui — login fica de bônus/próxima aula.

---

## 55–85 min — Passo 3: tela de login

**Eles fazem:**
1. Criar um componente `Login` com um formulário controlado (`useState` para
   `email` e `senha`).
2. No `submit`, chamar `POST http://localhost:3000/login` com
   `credentials: 'include'`/`withCredentials: true` e o corpo
   `{ email, senha }`.
3. Se der certo, guardar num estado (`usuarioLogado`) alguma informação
   simples (ex.: o email) e mostrar "Bem-vindo(a), `<email>`" na tela.
4. Se der erro (401), mostrar uma mensagem de erro no formulário.

**Teste agora:** logar com um usuário cadastrado nas aulas anteriores — a
tela deve mudar de "formulário de login" para "bem-vindo". Recarregar a
página e conferir no DevTools → Application → Cookies que o cookie `token`
está lá (mas com o valor **não** legível como texto puro).

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] Tela React lista os livros vindos da API (título + autor).
- [ ] Nenhum erro de CORS no console.

## Se sobrar tempo
1. Adicionar um campo de busca no front que filtra por gênero, usando o
   query param da aula #9 (`?genero=...`).
2. Fazer o login (Passo 3) funcionar de ponta a ponta.
3. Mostrar mensagem diferente para livros `disponivel: false` na lista
   (ex.: "emprestado").

## Perguntas para conduzir a aula
- "Por que o mesmo `fetch` que funciona no `curl`/Insomnia pode falhar no
  navegador com erro de CORS?"
- "O que aconteceria se a gente esquecesse o `credentials: 'include'` na
  chamada de login?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| Erro de CORS no console | `cors()` não configurado, ou `origin` não bate com o endereço real do front |
| Login funciona mas rota protegida depois dá 401 | Faltou `credentials`/`withCredentials` na chamada da rota protegida também, não só no login |
| Lista de livros nunca aparece | `useEffect` sem array de dependências `[]`, rodando em loop, ou a URL da API está errada |

## Registro pós-aula
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #14 — CRUD com Sequelize (projeto novo: Lista de Tarefas)
