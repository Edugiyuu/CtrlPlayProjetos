# Aula #11: Autorização e Controle de Acesso com JWT (Benício, Caio, Nicolas)

## Objetivo
Proteger rotas da Biblioteca Digital para que só quem está **logado** (tem um
token JWT válido) consiga usá-las, e criar uma distinção de **papéis**
(usuário comum vs. bibliotecário) para algumas ações.

## O que a turma pratica
- Criar um **middleware** de autenticação que valida o token JWT.
- Proteger rotas específicas (ex.: só usuário logado pode pegar livro
  emprestado).
- Adicionar um campo `papel` (`role`) no `Usuario` e checar permissão.

## Pré-requisito real
Cadastro/login com JWT funcionando (aula #10). **Middleware de autenticação e
controle por papel são novidade hoje.**

## Como rodar
Continuação do mesmo projeto Express — sem instalar nada novo.

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Testar rotas protegidas mandando o header
   `Authorization: Bearer <token>` no Insomnia/Postman.

## Marco mínimo da aula
Uma rota protegida devolve `401` sem token, e funciona normalmente com um
token válido no header `Authorization`.
