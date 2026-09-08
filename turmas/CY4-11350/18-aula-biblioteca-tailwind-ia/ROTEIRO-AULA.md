# Roteiro de Aula #18: Tailwind e Inteligência Artificial

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação do `biblioteca-front` + backend da Biblioteca
- Duração: ~1h30
- Pré-requisito: front da Biblioteca listando livros (aulas #13/#17).

## Objetivo
Aplicar Tailwind na tela existente e adicionar um botão que gera um resumo
de livro via IA, chamado **pelo backend** (nunca direto do front).

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Classes utilitárias vs. CSS tradicional | Parte 0 |
| Setup do Tailwind num projeto Vite | Passo 1 |
| Por que a chave de API de IA nunca pode ir pro front | Parte 0 e Passo 2 |
| Rota de backend que chama uma API externa | Passo 2 |

---

## 0–10 min — Parte 0: dois conceitos rápidos

**Tailwind:** em vez de escrever `.card { padding: 16px; border-radius: 8px; }`
num arquivo CSS, vocês escrevem `class="p-4 rounded-lg"` direto no HTML/JSX —
cada classe já é um estilo pronto.

**Onde a chave de API de IA pode ficar:** pergunta: *"Se a gente colocasse a
chave da API de IA direto no código do React, o que qualquer pessoa
conseguiria fazer abrindo o DevTools do navegador?"* (Resposta: roubar a
chave e usar o crédito de vocês. **Toda chave secreta fica só no backend**,
igual o `JWT_SECRET` da aula #10.)

---

## 15–40 min — Passo 1: instalar e usar Tailwind

**Eles fazem, no `biblioteca-front`:**
1. `npm install -D tailwindcss @tailwindcss/vite`.
2. Configurar o plugin no `vite.config.js` (boilerplate, pode ser dado):
   ```js
   import tailwindcss from '@tailwindcss/vite';
   export default defineConfig({
     plugins: [react(), tailwindcss()],
   });
   ```
3. No `index.css` (ou `main.css`), adicionar `@import "tailwindcss";` e
   importar esse arquivo no `main.jsx`.
4. Estilizar a lista de livros: cada livro vira um card
   (`class="p-4 rounded-lg shadow bg-white"`), o título em destaque
   (`class="text-lg font-bold"`), o autor menor (`class="text-sm text-gray-500"`).

**Teste agora:** a lista de livros já não parece mais uma lista HTML crua —
tem espaçamento, cantos arredondados, hierarquia visual.

---

## 40–45 min — PONTO DE PARADA
Se a tela já está com Tailwind aplicado, seguir para a IA. Se está gastando
muito tempo ajustando visual, definir "bonito o suficiente" e seguir — a IA
é o segundo conceito da aula, não pode ficar de fora.

---

## 45–80 min — Passo 2: resumo de livro via IA (no backend)

**Eles fazem, no backend da Biblioteca:**
1. Criar conta/chave numa API de IA (o professor decide qual, conforme o
   que a escola já usa/libera) e guardar em `.env` (`IA_API_KEY=...`).
2. Criar a rota `POST /livros/:id/resumo`:
   ```js
   async function gerarResumo(req, res) {
     const livro = await Livro.findByPk(req.params.id, { include: Autor });
     if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });

     const resposta = await clienteIA.gerar(
       `Escreva um resumo de até 3 frases do livro "${livro.titulo}", de ${livro.Autor.nome}.`
     );

     res.json({ resumo: resposta });
   }
   ```
   (A chamada exata ao SDK de IA muda conforme o provedor escolhido — dê
   esse trecho pronto, é integração de biblioteca externa, não conceito.)
3. No front, um botão "Gerar resumo" no card do livro que chama essa rota
   via axios e mostra o texto retornado.

**Teste agora:** clicar em "Gerar resumo" num livro → aparece um texto curto
gerado na hora. Conferir no Network do DevTools que a chave de API **não
aparece em lugar nenhum** da requisição feita pelo navegador (só o backend
fala com a IA).

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] Tela da Biblioteca usando classes Tailwind, sem CSS solto novo.
- [ ] Botão "Gerar resumo" funciona, chamando a IA a partir do **backend**.
- [ ] Explicar por que a chave de API não pode estar no front.

## Se sobrar tempo
1. Adicionar um estado de "gerando..." enquanto espera a resposta da IA.
2. Guardar o resumo gerado no próprio banco (`Livro.resumo`), pra não gerar
   de novo toda vez.
3. Deixar a tela responsiva com as classes de breakpoint do Tailwind
   (`sm:`, `md:`).

## Perguntas para conduzir a aula
- "Por que faz mais sentido a chamada de IA passar pelo backend em vez do
  front chamar direto?"
- "O que muda no HTML quando vocês trocam CSS por classes utilitárias — fica
  mais fácil ou mais difícil de ler?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| Classes Tailwind não aplicam nada | Faltou o `@import "tailwindcss"` no CSS principal ou o plugin no `vite.config.js` |
| Rota de resumo dá 500 | Chave de API ausente/errada no `.env` do backend, ou `dotenv.config()` não foi chamado |
| Resumo demora e a tela "trava" | Faltou estado de carregando — a chamada é assíncrona, a tela devia refletir isso |

## Registro pós-aula
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: fim do módulo — decidir com a turma o que revisar/aprofundar
