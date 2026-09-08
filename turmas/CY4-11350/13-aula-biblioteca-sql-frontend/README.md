# Aula #13: Unindo Backend (SQL) e Frontend (Benício, Caio, Nicolas)

## Objetivo
Criar uma tela React simples que consome a API da Biblioteca Digital
(listar livros, mostrar autor de cada um) e faz login usando o cookie
httpOnly da aula #12.

## O que a turma pratica
- Configurar **CORS** no backend para aceitar requisições do front.
- Consumir uma API com `fetch`/`axios` e cookies (`credentials`/`withCredentials`).
- Renderizar uma lista vinda da API em componentes React.
- Fazer login pelo front e usar o resultado (usuário autenticado) na tela.

## Pré-requisito real
Turma já sabe React básico (componentes, props, estado) e já tem a API de
livros + login por cookie funcionando (aulas #7 a #12). **Consumir API com
cookies entre origens diferentes é novidade hoje.**

## Como rodar
Dois projetos rodando ao mesmo tempo: o backend Express (biblioteca) numa
porta, e um novo projeto React (Vite) noutra.

```bash
npm install cors        # no backend
npm create vite@latest biblioteca-front -- --template react
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Rodar o backend (`npm run dev`) e o front (`npm run dev` dentro de
   `biblioteca-front`) ao mesmo tempo, em terminais separados.

## Marco mínimo da aula
A tela React lista os livros vindos da API (título + nome do autor).
