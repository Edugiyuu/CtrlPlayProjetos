# Roteiro de Aula #16: Revisando React com Pokémons

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: novo, front puro (React + Vite) consumindo a PokéAPI
- Duração: ~1h
- Pré-requisito: React básico, já consumiram uma API própria (aula #13).
  **Aula de revisão — sem conteúdo novo de propósito.**

## Objetivo
Reforçar `useState`/`useEffect`/consumo de API antes de ir pra aulas mais
avançadas de formulário (aula #17). Trocar de projeto (Biblioteca → Pokémon)
ajuda a ver que o padrão se repete em qualquer API.

## Conceitos da aula (revisão)
| Conceito | Onde aparece |
|---|---|
| `useState` para input controlado | Passo 1 |
| `useEffect`/chamada assíncrona ao clicar em buscar | Passo 2 |
| Renderização condicional (carregando / erro / dado) | Passo 3 |

---

## 0–10 min — Aquecimento
Pergunta: *"Quais dessas coisas vocês já fizeram na Biblioteca: pedir dado
pra API, mostrar numa lista, mostrar mensagem de carregando?"* — deixe a
turma perceber que hoje é o mesmo padrão, API diferente.

---

## 10–20 min — Passo 1: campo de busca

**Eles fazem:**
1. Criar um `<input>` controlado (`useState` para o texto digitado) e um
   botão "Buscar".
2. Ao clicar, guardar o texto digitado (nome ou número do Pokémon) em outro
   estado, ex. `pokemonBuscado`.

**Teste agora:** digitar algo e clicar em Buscar não faz nada visível ainda
— só o `console.log(pokemonBuscado)` deve mudar.

---

## 20–40 min — Passo 2: buscar na PokéAPI

**Eles fazem:**
```js
async function buscarPokemon(nome) {
  setCarregando(true);
  setErro(null);
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
    if (!resposta.ok) throw new Error('Pokémon não encontrado');
    const dados = await resposta.json();
    setPokemon(dados);
  } catch (e) {
    setErro(e.message);
    setPokemon(null);
  } finally {
    setCarregando(false);
  }
}
```
Chamar essa função no clique do botão (não precisa de `useEffect` aqui, já
que a busca acontece por ação do usuário, não ao carregar a página).

**Teste agora:** buscar `pikachu` → deve vir um objeto grande no console.
Buscar `pokemonquenaoexiste123` → deve cair no `catch`.

---

## 40–55 min — Passo 3: mostrar o resultado na tela

**Eles fazem**, renderização condicional:
- Se `carregando` → mostrar "Buscando...".
- Se `erro` → mostrar a mensagem de erro.
- Se `pokemon` → mostrar nome (`pokemon.name`), imagem
  (`pokemon.sprites.front_default`) e tipos
  (`pokemon.types.map(t => t.type.name)`).

**Teste agora:** buscar um Pokémon válido mostra nome + imagem + tipos;
buscar um inválido mostra a mensagem de erro, sem quebrar a tela.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] Busca por nome mostra nome, imagem e tipo(s) do Pokémon.
- [ ] Busca por algo inexistente mostra erro, sem tela branca/quebrada.

## Se sobrar tempo
1. Mostrar mais dados: altura, peso, habilidades (`pokemon.abilities`).
2. Guardar um "histórico" das últimas 5 buscas (lista de nomes clicáveis).
3. Colorir o card de acordo com o tipo do Pokémon (ex.: fogo = vermelho).

## Perguntas para conduzir a aula
- "O que muda entre chamar a API da Biblioteca e chamar a PokéAPI?"
- "Por que a gente trata `carregando`, `erro` e `pokemon` como três estados
  separados em vez de um só?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| Busca com maiúscula não funciona | PokéAPI espera nome em minúsculas na URL |
| Tela fica em "Buscando..." pra sempre | Esqueceu o `finally` com `setCarregando(false)` |
| Erro não aparece, tela quebra | Faltou o `if (!resposta.ok)` — `fetch` não rejeita sozinho em 404 |

## Registro pós-aula
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #17 — React Hook Form e Axios (Biblioteca)
