# Aula #18: Tailwind e Inteligência Artificial (Benício, Caio, Nicolas)

## Objetivo
Deixar a tela da Biblioteca (aula #13/#17) com uma aparência decente usando
**Tailwind CSS**, e adicionar um recurso simples de **IA**: gerar um resumo
curto de um livro a partir do título, chamando uma API de IA.

## O que a turma pratica
- Instalar e configurar Tailwind num projeto Vite.
- Estilizar componentes com classes utilitárias (sem escrever CSS à mão).
- Chamar uma API de IA a partir do backend (nunca do front — chave de API
  não pode vazar pro navegador) e mostrar o resultado na tela.

## Pré-requisito real
Front da Biblioteca funcionando (aulas #13/#17). **Tailwind e integração com
IA são novidade hoje.**

## Como rodar
Continuação do `biblioteca-front` (Tailwind) + do backend Express (rota de
IA).

```bash
# no front
npm install -D tailwindcss @tailwindcss/vite

# no backend
npm install openai   # ou o SDK da IA escolhida
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. A chave de API da IA fica só no `.env` do **backend**, nunca no front.

## Marco mínimo da aula
Tela da Biblioteca com Tailwind aplicado (nada de CSS solto) e um botão
"Gerar resumo" que mostra um texto curto vindo da IA para o livro selecionado.
