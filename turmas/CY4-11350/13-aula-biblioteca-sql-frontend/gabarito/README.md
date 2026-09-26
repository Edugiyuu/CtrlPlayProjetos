# Gabarito da Aula #13 — Backend (Express + SQLite) + Frontend (React)

Projeto **pronto e testado**, para rodar antes da aula. Dois projetos
separados, no mesmo computador, cada um na sua porta:

| Pasta | O que é | Porta |
|---|---|---|
| [backend/](backend/) | API Express + SQLite via Sequelize, em MVC (igual às aulas #7–#9) | 3000 |
| [frontend/](frontend/) | React com Vite, consumindo a API | 5173 |

## Como rodar (dois terminais)

Terminal 1 — backend:
```bash
cd backend
npm install
npm run dev
```

Terminal 2 — frontend:
```bash
cd frontend
npm install
npm run dev
```

Abrir <http://localhost:5173>. As duas portas são fixas: o backend só libera
`http://localhost:5173` no CORS, e o Vite está preso à 5173 no
[vite.config.js](frontend/vite.config.js). Mudar uma exige mudar a outra.

## O que dá pra mostrar na tela

- **Listar** — a tela carrega os livros da API com `useEffect` + `fetch`,
  cada um com o nome do autor (vem do `include` do Sequelize).
- **Cadastrar** — o formulário faz `POST /livros`; o `<select>` de autores
  vem de `GET /autores`. O livro novo aparece na lista na hora.
- **Emprestar/devolver** — o botão faz `PATCH /livros/:id/emprestimo`.

---

## Estrutura do backend

```text
backend/
├── server.js                      liga tudo: CORS, rotas, sync do banco, listen
├── database.js                    a conexão Sequelize com o arquivo SQLite
├── seed.js                        popula o banco na primeira execução
├── models/
│   ├── Autor.js                   tabela autores
│   ├── Livro.js                   tabela livros
│   └── index.js                   junta os dois e cria a associação 1-N
├── controllers/
│   ├── livrosController.js        o que cada rota de livro faz
│   └── autoresController.js       idem, para autores
├── routes/
│   ├── livros.js                  qual caminho chama qual função
│   └── autores.js
└── biblioteca.sqlite              o banco (nasce sozinho, ignorado pelo git)
```

**O caminho de uma requisição** — vale desenhar no quadro:

```text
navegador → server.js → routes/livros.js → controllers/livrosController.js → models/Livro.js → SQLite
```

Cada arquivo tem uma responsabilidade só. O controller é o único que sabe
regra de negócio; a rota só sabe *quem* chamar; o model só sabe a forma da
tabela.

### Os models e a associação

`models/index.js` é onde a relação entre as duas tabelas é declarada:

| Linha | O que cria |
|---|---|
| `Autor.hasMany(Livro)` | o lado "um autor tem vários livros" |
| `Livro.belongsTo(Autor)` | a coluna `autorId` na tabela `livros` — a **chave estrangeira** |
| `as: 'autor'` | o apelido usado no `include`, e o nome que chega no front como `livro.autor` |

Por isso `Livro.findAll({ include: { model: Autor, as: 'autor' } })` devolve o
autor dentro de cada livro. **Sem o `include`, `livro.autor` chega
`undefined`** e a tela quebra — é o erro comum nº 3 do roteiro.

### O banco e o seed

O SQLite é só um arquivo: `backend/biblioteca.sqlite`. Ele **não está no
git** (`*.sqlite` no `.gitignore`) — nasce sozinho na primeira execução, em
dois passos dentro do `server.js`:

1. `await sequelize.sync()` — cria as tabelas `autores` e `livros` se ainda
   não existirem. Não apaga nem altera o que já está lá.
2. `await semearSeVazio()` — o [seed.js](backend/seed.js).

O seed começa com `const jaTem = await Autor.count()`: **se já houver
qualquer autor, ele não faz nada**. Só num banco vazio ele cria 3 autores
(Machado de Assis, Clarice Lispector, Tolkien) e 5 livros, um deles já
emprestado, para a tela não abrir vazia. Rodar `npm run dev` dez vezes não
duplica nada.

**Para zerar:** parar o servidor, apagar `backend/biblioteca.sqlite` e subir
de novo. O banco volta com os 5 livros originais. É o jeito de desfazer a
bagunça de uma aula antes da próxima.

## Estrutura do frontend

```text
frontend/
├── index.html                     a página; carrega src/main.jsx
├── vite.config.js                 fixa a porta 5173
└── src/
    ├── main.jsx                   monta o React na página
    ├── App.jsx                    busca os livros e guarda a lista no estado
    ├── ListaLivros.jsx            renderiza a lista (e o ItemLivro, um por linha)
    ├── FormNovoLivro.jsx          formulário controlado → POST
    ├── api.js                     todas as chamadas à API, num lugar só
    └── estilos.css
```

`api.js` existe para que nenhum componente escreva `http://localhost:3000` no
meio do JSX. Se a porta da API mudar, muda numa linha só.

O estado da lista mora em `App.jsx`, não nos filhos: quem cadastra
(`FormNovoLivro`) e quem empresta (`ListaLivros`) avisam o pai por uma função
recebida via props (`aoCriar`, `aoAtualizar`), e o pai atualiza a lista. É a
mesma ideia de props da aula de React, agora com dado que veio do banco.

## Rotas da API

| Método | Rota | O que faz | Erros |
|---|---|---|---|
| GET | `/livros` | lista todos, com o autor junto | — |
| POST | `/livros` | cria um livro | 400 sem título, 404 se o `autorId` não existe |
| PATCH | `/livros/:id/emprestimo` | troca `disponivel` | 404 se o livro não existe |
| GET | `/autores` | lista autores (alimenta o `<select>`) | — |

## `import` nos dois lados

O backend usa `import`/`export`, igual ao front — nada de `require`. O que
liga isso é a linha `"type": "module"` no
[backend/package.json](backend/package.json); sem ela, o Node assume
`require`. Detalhe que pega: no backend o `.js` no fim do caminho é
**obrigatório** (`import Autor from './models/Autor.js'`), diferente do
front, onde o Vite deixa omitir.

## O ponto da aula: CORS

O front (`:5173`) e a API (`:3000`) são **origens diferentes** para o
navegador. Sem o `cors(...)` em [backend/server.js](backend/server.js), todo
`fetch` do React é bloqueado — e quem bloqueia é o navegador, não o Express
(por isso o Insomnia continua funcionando).

Demonstração ao vivo: comentar o `app.use(cors(...))`, recarregar o front,
mostrar o erro vermelho no console, e só então descomentar.

## O que este gabarito **não** tem

**Login.** Depende do JWT e do cookie httpOnly das aulas #10–#12. O backend já
está com `credentials: true` no CORS e o front já manda `credentials: 'include'`
em toda chamada, então o login encaixa depois sem mexer no resto.
