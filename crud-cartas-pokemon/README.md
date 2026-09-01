# CRUD de Cartas Pokemon

Projeto simples para praticar endpoints com Express usando cartas Pokemon.

O foco da aula e criar e testar rotas no arquivo `server.js`:

- `GET /cartas`: listar todas as cartas
- `GET /cartas/:id`: buscar uma carta pelo id
- `POST /cartas`: criar uma carta
- `PATCH /cartas/:id`: atualizar parte de uma carta
- `DELETE /cartas/:id`: excluir uma carta

## Como rodar

Dentro da pasta `crud-cartas-pokemon`, rode:

```bash
npm install
npm start
```

Depois abra:

```text
http://localhost:3000
```

## Exemplo de carta

```json
{
  "nome": "Bulbasaur",
  "tipo": "Grama",
  "hp": 60
}
```

## Desafios para os alunos

1. Criar uma nova rota `GET /cartas/tipo/:tipo`.
2. Bloquear cartas com HP menor ou igual a zero.
3. Adicionar um novo campo chamado `raridade`.
4. Mostrar o campo `raridade` na tela.
