# Aula #16: Revisando React com Pokémons (Benício, Caio, Nicolas)

## Objetivo
Revisar os fundamentos de React (componentes, props, estado, `useEffect`,
consumo de API externa) montando uma telinha de busca de Pokémon com a
[PokéAPI](https://pokeapi.co/) — sem banco de dados nenhum, é só front.

## O que a turma pratica
- `useState` e `useEffect` para buscar dados de uma API externa.
- Renderizar lista e detalhe a partir da resposta de uma API pública.
- Tratar estado de carregando / erro / não encontrado.

## Pré-requisito real
Turma já viu React básico e já consumiu a própria API da Biblioteca (aula
#13). **Hoje é revisão — nenhum conceito novo de propósito**, só prática
numa API diferente (pública, sem CORS configurado por vocês, sem login).

## Como rodar
Projeto novo e simples (Vite).

```bash
npm create vite@latest pokedex-revisao -- --template react
cd pokedex-revisao && npm install
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. API usada: `https://pokeapi.co/api/v2/pokemon/<nome-ou-numero>` (pública,
   não precisa de chave/token).

## Marco mínimo da aula
Campo de busca por nome/número de Pokémon mostrando nome, imagem e tipo(s).
