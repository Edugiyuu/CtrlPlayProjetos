# Roteiro de Aula #10: Autenticação com JWT

- Turma #11350 (CY4 / Sáb 14h) — Benício, Caio, Nicolas · ~1h30
- Sai de: API que qualquer um usa → chega em: cadastro com senha protegida e login devolvendo token
- Pré-requisito real: CRUD com Sequelize (aula #7)
- Não entra hoje: proteger rota com o token (é a #11) — hoje o token só nasce
- Gabarito testado: [gabarito/](gabarito/) — usuários `ana@biblioteca.com` e `bruno@email.com`, senha `senha123`

## Conceitos

| Conceito | Definição em 1 linha | Checagem antes de avançar |
|---|---|---|
| Hash | função de mão única: embaralha e **não dá pra voltar** | "Se não dá pra reverter, como o login confere a senha?" |
| `bcrypt` | a biblioteca que faz o hash e a comparação | "O que a gente compara no login: as senhas ou os hashes?" |
| JWT | crachá assinado que o servidor entrega e não guarda | "Onde o token fica salvo no servidor?" (em lugar nenhum) |
| Assinatura | o que impede alguém de forjar um token | "Por que não basta mandar o id do usuário em texto puro?" |

## Blocos

| Tempo | Bloco | Eles fazem | Teste agora |
|---:|---|---|---|
| 0–15 | Senha e crachá | — (conversa: "e se o banco vazasse hoje?") | eles explicam hash com as próprias palavras |
| 15–30 | Model `Usuario` | `nome`, `email` único, `senha`; rodar o `sync()` | tabela `usuarios` aparece no Beekeeper |
| 30–50 | **Cadastro com hash** | `bcrypt.hash` antes do `create`; resposta sem a senha | 🏁 coluna `senha` no banco mostra `$2b$10$...`, não a senha digitada |
| 50–75 | **Login** | `findOne` por email, `bcrypt.compare`, `jwt.sign` | 🏁 **MARCO MÍNIMO**: senha certa devolve token; senha errada devolve `401` |
| 75–90 | jwt.io | colar o token lá e ler o conteúdo | "dá pra guardar a senha dentro do token?" (não — é legível) |

## Erros comuns

| Sintoma | Causa provável |
|---|---|
| Login sempre falha, mesmo com senha certa | cadastrou antes de pôr o hash: o banco tem senha crua, o `compare` não bate |
| `secretOrPrivateKey must have a value` | a chave do `jwt.sign` chegou `undefined` |
| Cadastro repetido não dá erro | faltou `unique: true` no email, ou a checagem antes do `create` |
| Erro de compilação ao instalar | usar `bcryptjs` (JS puro), não `bcrypt` |
| A resposta mostra a senha | devolveu o objeto inteiro do Sequelize em vez de escolher os campos |

## Se sobrar tempo

1. Validar tamanho mínimo de senha (está no gabarito).
2. Mesma senha pra dois usuários gera hashes diferentes — mostrar no banco e perguntar por quê (sal aleatório).
3. `jwt.decode` no console, sem validar a assinatura — prepara a #11.

## Registro pós-aula
_Não preencher aqui. **Despeje cru** o que lembrar — ver [WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até:
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #11 — autorização por papel
