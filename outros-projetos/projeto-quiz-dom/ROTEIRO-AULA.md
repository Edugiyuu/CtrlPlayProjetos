# Projeto: Quiz Interativo com HTML e JavaScript

## Objetivo

Construir um quiz de perguntas e respostas para praticar JavaScript e manipulação do DOM. O projeto foi planejado para uma aula de aproximadamente 2 horas.

## O que o aluno pratica

- `document.getElementById()`
- `addEventListener()`
- `textContent`, `innerHTML`, `hidden` e `disabled`
- `document.createElement()` e `appendChild()`
- Arrays e objetos
- Funções, parâmetros, `if/else` e repetição com `forEach`
- Variáveis de estado: pergunta atual e quantidade de acertos

## Roteiro sugerido para 2 horas

### 0–15 minutos: apresentar o projeto

- Mostrar o quiz pronto.
- Pedir ao aluno para identificar os elementos da página.
- Explicar que o HTML será a estrutura e o JavaScript controlará o comportamento.

### 15–35 minutos: criar o HTML

- Criar título, pergunta, área de alternativas e botões.
- Adicionar ids aos elementos que serão manipulados.
- Selecionar os elementos com `getElementById()` e testar no console.

### 35–55 minutos: guardar as perguntas

- Criar um array com duas perguntas primeiro.
- Explicar objeto, propriedades, array de alternativas e índice da resposta correta.
- Criar `perguntaAtual` e `acertos`.

### 55–85 minutos: exibir uma pergunta

- Criar a função `mostrarPergunta()`.
- Alterar textos com `textContent`.
- Criar os botões com `createElement()`.
- Adicionar os botões à página com `appendChild()`.

### 85–105 minutos: corrigir a resposta

- Criar `verificarResposta()`.
- Comparar a escolha com a resposta correta.
- Mostrar uma mensagem e aumentar a pontuação.
- Desabilitar as alternativas depois da resposta.

### 105–120 minutos: finalizar e testar

- Programar o botão de próxima pergunta.
- Mostrar o resultado final.
- Programar o botão de reiniciar.
- Testar respostas certas, erradas e uma partida completa.

## Forma de conduzir

Não entregue todo o JavaScript de uma vez. Comece com duas perguntas e faça o aluno construir cada função. Depois que o fluxo funcionar, ele pode adicionar as outras perguntas.

Perguntas úteis durante a aula:

1. O que muda na página quando clicamos em uma alternativa?
2. Qual variável precisa mudar para avançar?
3. Por que desabilitamos os botões depois da resposta?
4. O que precisamos zerar para reiniciar o jogo?

## Desafios se sobrar tempo

1. Adicionar mais três perguntas.
2. Mostrar uma mensagem diferente para pontuação alta ou baixa.
3. Criar um botão para desistir e ver o resultado.
4. Embaralhar as perguntas.
5. Adicionar CSS em uma aula futura para destacar acerto e erro.

## Como executar

Abra `index.html` diretamente no navegador. Não é necessário instalar nada.
