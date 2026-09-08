const perguntas = [
  {
    texto: "Qual linguagem usamos para estruturar uma página web?",
    alternativas: ["CSS", "HTML", "JavaScript"],
    correta: 1
  },
  {
    texto: "Qual comando seleciona um elemento pelo id?",
    alternativas: ["getElementById", "createElement", "addEventListener"],
    correta: 0
  },
  {
    texto: "Qual evento acontece quando apertamos um botão?",
    alternativas: ["change", "click", "load"],
    correta: 1
  },
  {
    texto: "Qual propriedade altera o texto de um elemento?",
    alternativas: ["textContent", "valueOf", "console.log"],
    correta: 0
  },
  {
    texto: "Qual palavra cria uma variável que pode mudar?",
    alternativas: ["const", "let", "function"],
    correta: 1
  }
];

const quiz = document.getElementById("quiz");
const progresso = document.getElementById("progresso");
const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const mensagem = document.getElementById("mensagem");
const botaoProxima = document.getElementById("proxima");
const resultado = document.getElementById("resultado");
const pontuacao = document.getElementById("pontuacao");
const botaoReiniciar = document.getElementById("reiniciar");

let perguntaAtual = 0;
let acertos = 0;

function mostrarPergunta() {
  const item = perguntas[perguntaAtual];

  progresso.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
  pergunta.textContent = item.texto;
  alternativas.innerHTML = "";
  mensagem.textContent = "";
  botaoProxima.disabled = true;

  item.alternativas.forEach(function (alternativa, indice) {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", function () {
      verificarResposta(indice);
    });
    alternativas.appendChild(botao);
  });
}

function verificarResposta(indiceEscolhido) {
  const indiceCorreto = perguntas[perguntaAtual].correta;
  const botoes = alternativas.querySelectorAll("button");

  botoes.forEach(function (botao) {
    botao.disabled = true;
  });

  if (indiceEscolhido === indiceCorreto) {
    mensagem.textContent = "Resposta correta!";
    acertos++;
  } else {
    const respostaCorreta = perguntas[perguntaAtual].alternativas[indiceCorreto];
    mensagem.textContent = `Resposta incorreta. A resposta era: ${respostaCorreta}.`;
  }

  botaoProxima.disabled = false;
}

function mostrarResultado() {
  quiz.hidden = true;
  resultado.hidden = false;
  pontuacao.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}

botaoProxima.addEventListener("click", function () {
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

botaoReiniciar.addEventListener("click", function () {
  perguntaAtual = 0;
  acertos = 0;
  quiz.hidden = false;
  resultado.hidden = true;
  mostrarPergunta();
});

mostrarPergunta();
