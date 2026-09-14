# Roteiro de Aula #17: React Hook Form e Axios

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação do `biblioteca-front` (aula #13)
- Duração: ~1h
- Pré-requisito: front consumindo a API + login por cookie (aula #13),
  formulário controlado na mão (aula #16).

## Objetivo
Um formulário de cadastro de livro usando React Hook Form (menos código,
validação embutida) e axios (em vez de `fetch` cru) para enviar pra API.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Por que uma lib de formulário em vez de `useState` por campo | Parte 0 |
| `register`, `handleSubmit`, `formState.errors` | Passo 1 |
| `axios.post` com `withCredentials` | Passo 2 |

---

## 0–10 min — Parte 0: o problema que o React Hook Form resolve

Pergunta: *"Na tela de login (aula #13), quantos `useState` vocês
precisaram pra 2 campos? Como isso escalaria pra um formulário com 6
campos?"* — React Hook Form deixa o formulário inteiro registrado sem um
`useState` por campo, e já vem com validação.

---

## 10–35 min — Passo 1: formulário com React Hook Form

**Eles fazem:**
1. `npm install react-hook-form`.
2. Criar `FormularioLivro.jsx`:
   ```jsx
   import { useForm } from 'react-hook-form';

   function FormularioLivro({ aoSalvar }) {
     const { register, handleSubmit, formState: { errors }, reset } = useForm();

     function onSubmit(dados) {
       aoSalvar(dados);
       reset();
     }

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register('titulo', { required: 'Título é obrigatório' })} placeholder="Título" />
         {errors.titulo && <span>{errors.titulo.message}</span>}

         <input {...register('ano_publicacao')} placeholder="Ano" />
         <input {...register('genero')} placeholder="Gênero" />

         <button type="submit">Salvar</button>
       </form>
     );
   }
   ```
   (Estrutura é boilerplate da lib — foco da turma é entender `register` e
   `errors`, não decorar a sintaxe.)

**Teste agora:** tentar enviar sem preencher `titulo` → mensagem de erro
aparece sem precisar escrever `if` nenhum. Preencher e enviar → `onSubmit`
recebe um objeto com todos os campos.

---

## 35–50 min — Passo 2: enviar com axios

**Eles fazem:**
1. `npm install axios`.
2. Na função `aoSalvar` (ou dentro do componente pai que lista os livros):
   ```js
   import axios from 'axios';

   async function cadastrarLivro(dados) {
     await axios.post('http://localhost:3000/livros', dados, { withCredentials: true });
     buscarLivros(); // recarrega a lista
   }
   ```

**Teste agora:** cadastrar um livro pelo formulário → ele aparece na lista
sem recarregar a página manualmente.

> ⚠️ Se a rota `POST /livros` estiver protegida por papel `bibliotecario`
> (aula #11), fazer login com um usuário desse papel antes de testar —
> senão vai dar `403`, o que também é um bom teste de que a proteção
> continua funcionando do lado do front.

---

## 50–55 min — PONTO DE PARADA
Se cadastro básico funciona, seguir pros desafios. Se travou na validação ou
no axios, esse já é o marco mínimo da aula.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] Formulário com React Hook Form valida `titulo` obrigatório.
- [ ] `axios.post` cadastra o livro na API e a lista atualiza.

## Se sobrar tempo
1. Adicionar validação de `ano_publicacao` como número
   (`{ valueAsNumber: true }` no `register`).
2. Reaproveitar o mesmo componente `FormularioLivro` para **editar** um
   livro existente (`defaultValues` do `useForm`).
3. Trocar todas as chamadas de `fetch` da aula #13 por `axios`, por
   consistência.

## Perguntas para conduzir a aula
- "O que o React Hook Form está fazendo por trás do `register`, que vocês
  faziam na mão com `useState` + `onChange`?"
- "Por que o `axios.post` também precisa de `withCredentials`, igual o
  `fetch` precisava de `credentials: 'include'`?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| Erro de validação não aparece | Esqueceu de renderizar `errors.<campo>` no JSX |
| `POST` dá 401/403 | Não fez login antes, ou o usuário não tem o papel exigido (aula #11) |
| Formulário não limpa depois de salvar | Faltou chamar `reset()` dentro do `onSubmit` |

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #18 — Tailwind e Inteligência Artificial
