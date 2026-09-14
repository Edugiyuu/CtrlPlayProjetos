# Roteiro de Aula #12: Autenticação no Swagger e Cookies Seguros

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação da Biblioteca Digital (SQLite + Sequelize)
- Duração: ~1h
- Pré-requisito: JWT + autorização por papel (aulas #10 e #11).

## Objetivo
O login passa a devolver o token num cookie httpOnly (mais seguro que
`localStorage`), e o Swagger ganha um botão de login para testar rotas
protegidas sem copiar/colar token manualmente.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Cookie httpOnly — o que é e por que é mais seguro | Parte 0 |
| `res.cookie()` no Express | Passo 1 |
| Ler token do cookie em vez do header | Passo 1 |
| `securityScheme` no Swagger | Passo 2 |

---

## 0–15 min — Parte 0: onde guardar o token?

- Até agora, o token JWT ficava por conta de quem chamava a API guardar
  (numa variável, no Insomnia). Num app de verdade, ele geralmente fica
  guardado no navegador — e aí a pergunta é **onde**.
- **`localStorage`**: fácil de usar, mas **qualquer script que rode na
  página** consegue ler (inclusive um script malicioso injetado via XSS).
- **Cookie `httpOnly`**: o navegador guarda, manda automaticamente em toda
  requisição pro mesmo domínio, e **JavaScript da página não consegue ler
  esse cookie**. Muito mais seguro contra roubo de token via XSS.
- Pergunta: *"Se um site tivesse uma falha de segurança que deixa rodar
  JavaScript de terceiro na página (XSS), o que aconteceria com um token no
  `localStorage`? E com um cookie httpOnly?"*

---

## 15–35 min — Passo 1: login devolvendo cookie httpOnly

**Eles fazem:**
1. `npm install cookie-parser` e usar no servidor: `app.use(cookieParser())`.
2. No controller de login, em vez de `res.json({ token })`:
   ```js
   res.cookie('token', token, {
     httpOnly: true,
     secure: false, // true em produção, com HTTPS
     maxAge: 60 * 60 * 1000, // 1h, igual o expiresIn do JWT
   });
   res.json({ mensagem: 'Login realizado com sucesso' });
   ```
3. No middleware `autenticar` (aula #11), ler o token do cookie em vez do
   header:
   ```js
   const token = req.cookies.token;
   if (!token) return res.status(401).json({ erro: 'Não autenticado' });
   ```

**Teste agora:** no Insomnia/Postman, ativar a opção de guardar/enviar
cookies automaticamente. Fazer login, depois chamar a rota protegida **sem**
mandar header `Authorization` — deve funcionar sozinho via cookie.

> ⚠️ No navegador (fetch/axios do front, aula #13), vai precisar mandar
> `credentials: 'include'` (fetch) ou `withCredentials: true` (axios) pra o
> cookie ser enviado entre domínios diferentes.

---

## 35–55 min — Passo 2: botão de login no Swagger

**Eles fazem**, em `swagger.js`, adicionar o esquema de segurança:
```js
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'API Biblioteca Digital', version: '1.0.0' },
    components: {
      securitySchemes: {
        cookieAuth: { type: 'apiKey', in: 'cookie', name: 'token' },
      },
    },
    security: [{ cookieAuth: [] }],
  },
  apis: ['./routes/*.js'],
};
```

Nas rotas protegidas, adicionar no comentário `@swagger`:
```
 *     security:
 *       - cookieAuth: []
```

**Teste agora:** abrir `/api-docs`, usar "Try it out" no `POST /login`
primeiro (o navegador guarda o cookie da resposta), depois testar uma rota
protegida na mesma aba — deve funcionar porque o cookie já está lá.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] Login devolve o token num cookie `httpOnly`, não mais no corpo JSON.
- [ ] Rota protegida lê o token do cookie e funciona sem header manual.
- [ ] Explicar por que cookie httpOnly é mais seguro que `localStorage`.

## Se sobrar tempo
1. Criar uma rota `POST /logout` que limpa o cookie (`res.clearCookie('token')`).
2. Pesquisar o que é `sameSite` num cookie e por que ele importa.
3. Testar o que acontece se tentar ler `document.cookie` no console do
   navegador — confirmar que o cookie `httpOnly` **não aparece** ali.

## Perguntas para conduzir a aula
- "O que muda pro código do front (aula #13) agora que o token não vem mais
  no corpo da resposta de login?"
- "Por que `secure: true` só faz sentido com HTTPS?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| `req.cookies` vem `undefined` | Esqueceu `app.use(cookieParser())` antes das rotas |
| Cookie não é enviado de volta pelo cliente | Cliente (Insomnia/fetch/axios) não está configurado para enviar cookies entre origens |
| Swagger não manda o cookie no "Try it out" | Fez login numa aba/domínio diferente do `/api-docs` |

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #13 — Unindo Backend e Frontend
