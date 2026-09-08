# Aula #17: React Hook Form e Axios (Benício, Caio, Nicolas)

## Objetivo
Trocar os formulários "na mão" (`useState` por campo) por **React Hook
Form**, e o `fetch` por **axios**, num formulário de cadastro de livro que
fala com a API da Biblioteca Digital.

## O que a turma pratica
- Configurar `react-hook-form` num formulário com validação.
- Configurar `axios` com `withCredentials` para reaproveitar o login por
  cookie (aula #12).
- Mostrar erro de validação por campo.

## Pré-requisito real
Front da Biblioteca já lista livros e faz login (aula #13). Já fizeram
formulário controlado na mão (aula #16). **React Hook Form e axios são
novidade hoje.**

## Como rodar
Continuação do `biblioteca-front` (aula #13).

```bash
npm install react-hook-form axios
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Backend da Biblioteca rodando ao mesmo tempo (aulas #7–#12).

## Marco mínimo da aula
Formulário de cadastro de livro usando React Hook Form, validando campo
obrigatório, e enviando via axios pra API — livro aparece na lista depois.
