# Roteiro de Aula #10: Autenticação JWT

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação da Biblioteca Digital (SQLite + Sequelize)
- Duração: ~1h30
- Pré-requisito: CRUD com Sequelize (aula #7).

## Objetivo
Ter cadastro e login funcionando, com senha nunca guardada em texto puro e
login devolvendo um token JWT.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Hash de senha (`bcrypt`) — por que nunca guardar senha crua | Parte 0 |
| Model `Usuario` em SQL | Passo 1 |
| Cadastro: criptografar antes de salvar | Passo 2 |
| JWT — o que é, o que tem dentro | Parte 0 |
| Login: comparar senha e gerar token | Passo 3 |

---

## 0–15 min — Parte 0: por que nunca guardar senha em texto puro, e o que é JWT

**Hash de senha:**
- Pergunta: *"Se o banco da Biblioteca vazasse hoje, e a senha de vocês
  estivesse guardada do jeito que foi digitada, o que um invasor conseguiria
  fazer?"* (Resposta: logar como vocês em qualquer lugar que reuse a mesma
  senha.)
- **Hash** é uma função de mão única: transforma `"minhasenha123"` num texto
  embaralhado (ex.: `$2b$10$N9qo8u...`) que **não dá pra reverter**. Pra
  conferir login, a gente não descriptografa — a gente faz o hash da senha
  digitada de novo e **compara os hashes**.
- `bcrypt` é a biblioteca que faz isso por vocês.

**JWT (JSON Web Token):**
- É um "crachá" que o servidor entrega depois do login. Ele **não fica
  guardado no servidor** — o cliente manda esse crachá de volta em cada
  requisição futura, e o servidor confere se é válido.
- Tem três partes (cabeçalho, dados, assinatura) separadas por ponto. A
  assinatura é o que garante que ninguém alterou o conteúdo sem o servidor
  perceber (ela é gerada com uma "chave secreta" que só o servidor conhece).
- Pergunta: *"Por que o token precisa de uma assinatura, e não só carregar o
  id do usuário em texto puro?"* (Resposta: sem assinatura, qualquer um
  poderia forjar um token dizendo "eu sou o usuário 1".)

---

## 15–30 min — Passo 1: Model `Usuario`

**Eles fazem**, `models/Usuario.js`:
- Campos: `nome` (string), `email` (string, único), `senha` (string).
- Rodar `sync()` (ou `sync({ alter: true })`) para criar a tabela.

**Teste agora:** conferir no Beekeeper Studio que a tabela `Usuarios`
apareceu com essas três colunas.

---

## 30–50 min — Passo 2: cadastro com senha criptografada

**Eles fazem**, `POST /cadastro`:
1. `npm install bcrypt`.
2. No controller:
   ```js
   const bcrypt = require('bcrypt');

   async function cadastrar(req, res) {
     const { nome, email, senha } = req.body;
     const senhaCriptografada = await bcrypt.hash(senha, 10);
     const usuario = await Usuario.create({ nome, email, senha: senhaCriptografada });
     res.status(201).json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
   }
   ```
   Chame a atenção: **a resposta não devolve a senha**, nem a criptografada.

**Teste agora:** `POST /cadastro` com nome/email/senha → confirmar no
Beekeeper que a coluna `senha` está com um texto longo e ilegível, não a
senha original.

---

## 50–75 min — Passo 3: login com JWT

**Eles fazem:**
1. `npm install jsonwebtoken`.
2. No controller, `POST /login`:
   ```js
   const jwt = require('jsonwebtoken');

   async function login(req, res) {
     const { email, senha } = req.body;
     const usuario = await Usuario.findOne({ where: { email } });
     if (!usuario) return res.status(401).json({ erro: 'Credenciais inválidas' });

     const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
     if (!senhaCorreta) return res.status(401).json({ erro: 'Credenciais inválidas' });

     const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, {
       expiresIn: '1h',
     });
     res.json({ token });
   }
   ```
3. Criar um arquivo `.env` com `JWT_SECRET=<qualquer texto secreto>` e
   carregar com `require('dotenv').config()` no topo do servidor
   (`npm install dotenv`). **Nunca commitar o `.env`** — conferir que está no
   `.gitignore`.

**Teste agora:**
- Login com email/senha certos → devolve um token (string grande).
- Login com senha errada → `401`.
- Colar o token em <https://jwt.io> e mostrar pra turma o conteúdo (dados)
  decodificado — mas a assinatura só é validável com o `JWT_SECRET`.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] `POST /cadastro` cria usuário com senha criptografada (nunca em texto
      puro no banco).
- [ ] `POST /login` com senha certa devolve um token JWT; com senha errada
      devolve `401`.
- [ ] Explicar com as próprias palavras por que hash de senha ≠ criptografia
      reversível.

## Se sobrar tempo
1. Validar que o `email` não pode se repetir (`unique: true` no Model +
   tratar o erro do Sequelize).
2. Adicionar validação de senha mínima (ex.: 6 caracteres) antes do cadastro.
3. Decodificar o token manualmente em código (`jwt.decode`) e imprimir o
   `id`/`email` no console, sem validar a assinatura ainda — isso prepara
   para a aula #11 (autorização).

## Perguntas para conduzir a aula
- "Se dois usuários tivessem a mesma senha, os hashes salvos seriam iguais?"
  (Resposta: não, o `bcrypt` usa um "sal" aleatório — ótimo gancho pra
  pesquisa extra.)
- "O que tem dentro de um JWT? É seguro colocar a senha lá dentro?" (Não! O
  conteúdo é legível por qualquer um, só não é *forjável* sem a chave.)

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| `bcrypt.compare` sempre retorna `false` | Comparou a senha crua com a senha crua, ou salvou sem `await` no `hash` |
| `jwt.sign` dá erro "secretOrPrivateKey" | `JWT_SECRET` não carregou do `.env` (faltou `dotenv.config()` ou o arquivo não existe) |
| Login retorna 500 em vez de 401 | Faltou tratar o caso de usuário não encontrado antes de comparar a senha |

## Registro pós-aula
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #11 — Autorização e Controle de Acesso com JWT
