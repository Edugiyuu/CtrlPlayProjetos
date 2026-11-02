# Aula #13: Unindo Backend (SQL) e Frontend (Benício, Caio, Nicolas)

Página HTML + JavaScript (sem React) que consome a API da Biblioteca Digital (Express + SQLite) rodando
na mesma máquina, em outra porta.

| Arquivo | Para quem |
|---|---|
| [ROTEIRO-AULA.md](ROTEIRO-AULA.md) | você, durante a aula: blocos, conceitos, erros comuns |
| [gabarito/](gabarito/) | você, antes da aula: os dois projetos prontos e testados |

## O que a turma pratica
- Configurar **CORS** no backend para aceitar requisições do front.
- Consumir a API com `fetch` quando a página abre.
- Montar um card por livro com `innerHTML`.
- Cadastrar pelo formulário (`POST`).

## Pré-requisito real
HTML/CSS básico, `fetch` e a API de livros funcionando
(aulas #7–#9). **Duas origens conversando é a novidade de hoje.**

## Como rodar
Dois projetos ao mesmo tempo, em terminais separados: o backend na porta 3000
e o front na 5173.

```bash
npm install cors        # no backend
npm create vite@latest biblioteca-front -- --template vanilla
```

O gabarito já vem com os dois montados — ver
[gabarito/README.md](gabarito/README.md) para a estrutura de pastas, as rotas
e como o banco é populado.

## Marco mínimo da aula
A página lista os livros vindos da API (título + nome do autor).

## Fora do escopo hoje
**Login.** Depende do JWT e do cookie httpOnly das aulas #10–#12. O gabarito
já deixa o CORS com `credentials: true`; com login, o front só precisa mandar
`credentials: 'include'` nos `fetch`.
