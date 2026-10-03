# Roteiro de Aula #12: Cookie httpOnly e Login no Swagger

- Turma #11350 (CY4 / Sáb 14h) — Benício, Caio, Nicolas · ~1h
- Sai de: token copiado e colado na mão → chega em: navegador guardando e mandando sozinho, sem o JS da página conseguir ler
- Pré-requisito real: JWT + papel (aulas #10 e #11)
- Não entra hoje: o front (é a #13)
- Gabarito testado: [gabarito/](gabarito/)

## Conceitos

| Conceito | Definição em 1 linha | Checagem antes de avançar |
|---|---|---|
| `localStorage` | guarda no navegador, e **qualquer script da página lê** | "Se um script estranho rodar na página, o que ele leva?" |
| Cookie `httpOnly` | o navegador guarda e manda sozinho; o JS não enxerga | "Quem consegue ler esse cookie?" |
| `res.cookie()` | o servidor mandando o navegador guardar | "Quem decide o prazo de validade: o navegador ou o servidor?" |
| `securityScheme` | o que faz nascer o botão Authorize no Swagger | "Pra que serve esse botão?" |

## Blocos

| Tempo | Bloco | Eles fazem | Teste agora |
|---:|---|---|---|
| 0–15 | Onde guardar o token | — (comparar `localStorage` × cookie) | eles explicam o risco do XSS com as próprias palavras |
| 15–35 | **Login manda o cookie** | `cookie-parser`, `res.cookie(...)` no login, `autenticar` lendo `req.cookies` | 🏁 **MARCO MÍNIMO**: chamar rota protegida **sem** header e funcionar |
| 35–55 | **Authorize no Swagger** | `securitySchemes` no `swagger.js`, `security: []` nas rotas públicas | cadeado nas rotas protegidas; dá pra testar pela própria tela |
| 55–60 | Fechamento | DevTools → Application → Cookies | `document.cookie` no console **não mostra** o token |

## Erros comuns

| Sintoma | Causa provável |
|---|---|
| `req.cookies is undefined` | faltou `app.use(cookieParser())` |
| Login ok, rota seguinte `401` | o cliente não está guardando/reenviando o cookie (ligar a opção no Insomnia) |
| Cookie aparece mas expira na hora | `maxAge` em segundos — ele é em **milissegundos** |
| Swagger pede token em `/login` | faltou `security: []` nas rotas públicas |
| `document.cookie` mostra o token | faltou `httpOnly: true` |

## Se sobrar tempo

1. `POST /logout` limpando o cookie (está no gabarito).
2. Comparar na prática: o mesmo endpoint via cookie e via header Bearer.
3. Discutir o que muda em produção com HTTPS (`secure: true`).

## Registro pós-aula
_Não preencher aqui. **Despeje cru** o que lembrar — ver [WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até:
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #13 — unindo backend e frontend
