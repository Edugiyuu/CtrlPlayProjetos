# Aula #12: Autenticação no Swagger e Cookies Seguros (Benício, Caio, Nicolas)

## Objetivo
Deixar o Swagger (aula #8) testar rotas protegidas com um botão de login, e
trocar o jeito de guardar o token: em vez do cliente guardar o JWT "solto",
o servidor entrega ele dentro de um **cookie httpOnly seguro**.

## O que a turma pratica
- Configurar o botão **Authorize** do Swagger para mandar o JWT.
- Configurar o login para devolver o token num **cookie httpOnly**.
- Ajustar o middleware de autenticação para ler o token do cookie.
- Entender por que cookie httpOnly é mais seguro que guardar o token no
  `localStorage`.

## Pré-requisito real
Autenticação e autorização com JWT funcionando (aulas #10 e #11). **Swagger
com auth e cookies são novidade hoje.**

## Como rodar
Continuação do mesmo projeto Express.

```bash
npm install cookie-parser
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Testar login e rota protegida pelo `/api-docs` e pelo Insomnia/Postman
   (com a opção de enviar cookies ativada).

## Marco mínimo da aula
Login devolve o token num cookie httpOnly; uma rota protegida funciona lendo
o token desse cookie, sem precisar mandar o header `Authorization` manualmente.
