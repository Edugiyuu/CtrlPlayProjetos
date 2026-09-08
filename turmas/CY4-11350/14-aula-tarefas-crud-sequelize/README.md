# Aula #14: CRUD com Sequelize — projeto novo (Benício, Caio, Nicolas)

## Objetivo
Provar que cada um consegue montar um CRUD com SQLite + Sequelize **do
zero**, sem seguir a Biblioteca já pronta — num projeto novo e pequeno:
uma **Lista de Tarefas**.

## O que a turma pratica
- Criar um projeto Express do zero (estrutura de pastas MVC já conhecida).
- Definir um Model sozinho, sem copiar o da Biblioteca.
- Implementar o CRUD completo de uma entidade nova.

## Pré-requisito real
Turma já fez isso tudo guiado, na Biblioteca Digital (aulas #7 a #13). **Hoje
é para fazer sozinho, com menos ajuda — é aula de consolidação, não de
conteúdo novo.**

## Como rodar
Projeto novo, cada aluno cria o seu.

```bash
mkdir lista-tarefas && cd lista-tarefas
npm init -y
npm install express sequelize sqlite3
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Testar as rotas no Insomnia/Postman.

## Marco mínimo da aula
CRUD completo de `Tarefa` (criar, listar, atualizar, marcar como concluída,
remover) funcionando, feito com o mínimo de ajuda possível.
