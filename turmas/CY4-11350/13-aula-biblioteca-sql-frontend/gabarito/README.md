# Gabarito da Aula #13 — Backend (Express + SQLite) + Frontend (HTML + JavaScript)

Projeto **pronto e testado**, para rodar antes da aula. Dois projetos
separados, no mesmo computador, cada um na sua porta:

| Pasta | O que é | Porta |
|---|---|---|
| [backend/](backend/) | API Express + SQLite via Sequelize, em MVC (igual às aulas #7–#9) | 3000 |
| [frontend/](frontend/) | HTML + CSS + JavaScript puro (sem React), servido pelo Vite | 5173 |

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

- **Listar** — a tela carrega os livros da API com `fetch` assim que a página abre,
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
├── index.html                     a página: título, estante vazia e o formulário
├── estilos.css                    cards em flexbox, uma cor por gênero
├── script.js                      os fetch e o HTML de cada card
├── package.json                   só o Vite (nada de React)
└── vite.config.js                 fixa a porta 5173
```

O Vite aqui só serve os arquivos na porta 5173. A porta precisa ser essa
porque é a única que o CORS do backend libera.

O `script.js` é dividido em 4 partes, na ordem da aula:

| Parte | Função | O que faz |
|---|---|---|
| 1 | `carregarLivros()` | `GET /livros` e monta um card por livro com `innerHTML` |
| 2 | `emprestar(id)` | `PATCH`, depois chama `carregarLivros()` de novo |
| 3 | `carregarAutores()` | `GET /autores` e enche o `<select>` |
| 4 | `submit` do form | `POST /livros`, limpa o form e recarrega a lista |

Depois de cada mudança, a lista inteira é buscada de novo. Mais simples que
atualizar um card só, e eles veem o dado vindo do banco toda vez.

## Rotas da API

| Método | Rota | O que faz | Erros |
|---|---|---|---|
| GET | `/livros` | lista todos, com o autor junto | — |
| POST | `/livros` | cria um livro | 400 sem título, 404 se o `autorId` não existe |
| PATCH | `/livros/:id/emprestimo` | troca `disponivel` | 404 se o livro não existe |
| GET | `/autores` | lista autores (alimenta o `<select>`) | — |

## `import` no backend

O backend usa `import`/`export`, nada de `require`. O que
liga isso é a linha `"type": "module"` no
[backend/package.json](backend/package.json); sem ela, o Node assume
`require`. Detalhe que pega: no backend o `.js` no fim do caminho é
**obrigatório** (`import Autor from './models/Autor.js'`).

## O ponto da aula: CORS

O front (`:5173`) e a API (`:3000`) são **origens diferentes** para o
navegador. Sem o `cors(...)` em [backend/server.js](backend/server.js), todo
`fetch` do `script.js` é bloqueado — e quem bloqueia é o navegador, não o Express
(por isso o Insomnia continua funcionando).

Demonstração ao vivo: comentar o `app.use(cors(...))`, recarregar o front,
mostrar o erro vermelho no console, e só então descomentar.

## O que este gabarito **não** tem

**Login.** Depende do JWT e do cookie httpOnly das aulas #10–#12. O backend já
está com `credentials: true` no CORS; quando tiver login, o front só precisa
mandar `credentials: 'include'` nos `fetch`.
