# Roteiro de Aula #11: Autorização e Controle de Acesso

- Turma #11350 (CY4 / Sáb 14h) — Benício, Caio, Nicolas · ~1h
- Sai de: token que não serve pra nada → chega em: ler é público, cadastrar livro só bibliotecário
- Pré-requisito real: login com JWT funcionando (aula #10)
- Não entra hoje: cookie (é a #12) — o token ainda vai no header, na mão
- Gabarito testado: [gabarito/](gabarito/) — Ana é `bibliotecario`, Bruno é `usuario`

## Conceitos

| Conceito | Definição em 1 linha | Checagem antes de avançar |
|---|---|---|
| Autenticação | "quem é você?" — é o login da #10 | "Isso já está pronto ou falta?" |
| Autorização | "você pode fazer isso?" — mesmo logado | "Todo mundo com carteirinha cadastra livro na biblioteca?" |
| Middleware | função que roda antes da rota e decide se passa | "Qual middleware vocês já usam sem saber?" (`express.json()`) |
| `401` vs `403` | não sei quem é você / sei, e você não pode | "Sem token é qual dos dois? E logado sem permissão?" |

## Blocos

| Tempo | Bloco | Eles fazem | Teste agora |
|---:|---|---|---|
| 0–10 | Autenticação ≠ autorização | — | eles dão um exemplo de cada, fora da programação |
| 10–35 | **Middleware `autenticar`** | ler o header, `jwt.verify`, pôr os dados em `req.usuario` | 🏁 rota protegida: sem token `401`, token adulterado `401`, token bom passa |
| 35–50 | **Papel** | campo `papel` no model, incluir no `jwt.sign`, criar o `exigirPapel` | 🏁 **MARCO MÍNIMO**: Bruno leva `403` no `POST /livros`, Ana consegue |
| 50–60 | A foto do login | trocar o papel do Bruno no Beekeeper e tentar com o token antigo | continua `403` — só muda depois de logar de novo |

## Erros comuns

| Sintoma | Causa provável |
|---|---|
| `req.usuario is undefined` dentro do `exigirPapel` | ordem trocada: o `autenticar` tem que vir antes |
| Token bom dá `401` | esqueceu de tirar a palavra `Bearer` antes do `verify` |
| Papel sempre `undefined` no token | o `papel` não foi incluído no `jwt.sign` |
| Trocou o papel no banco e nada mudou | o token é do login antigo — precisa logar de novo |
| `exigirPapel` não barra ninguém | usou sem os parênteses: ele **devolve** o middleware |

## Se sobrar tempo

1. Proteger `PUT` e `DELETE` também (estão no gabarito).
2. `GET /perfil` devolvendo `req.usuario` sem consultar o banco (está no gabarito).
3. Pesquisar: e se o `exigirPapel` aceitasse uma lista de papéis?

## Registro pós-aula
_Não preencher aqui. **Despeje cru** o que lembrar — ver [WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até:
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #12 — cookie httpOnly e login no Swagger
