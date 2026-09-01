const express = require("express");
const path = require("path");

const app = express();
const porta = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let proximoId = 4;

let cartasPokemon = [
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Eletrico",
    hp: 60
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fogo",
    hp: 50
  },
  {
    id: 3,
    nome: "Squirtle",
    tipo: "Agua",
    hp: 70
  }
];

app.get("/cartas", (req, res) => {
  res.json(cartasPokemon);
});

app.get("/cartas/:id", (req, res) => {
  const id = Number(req.params.id);
  const carta = cartasPokemon.find((item) => item.id === id);

  if (!carta) {
    return res.status(404).json({ mensagem: "Carta nao encontrada." });
  }

  res.json(carta);
});

app.post("/cartas", (req, res) => {
  const novaCarta = {
    id: proximoId,
    nome: req.body.nome,
    tipo: req.body.tipo,
    hp: Number(req.body.hp)
  };

  if (!novaCarta.nome || !novaCarta.tipo || !novaCarta.hp) {
    return res.status(400).json({ mensagem: "Preencha nome, tipo e hp." });
  }

  cartasPokemon.push(novaCarta);
  proximoId++;

  res.status(201).json(novaCarta);
});

app.patch("/cartas/:id", (req, res) => {
  const id = Number(req.params.id);
  const carta = cartasPokemon.find((item) => item.id === id);

  if (!carta) {
    return res.status(404).json({ mensagem: "Carta nao encontrada." });
  }

  if (req.body.nome !== undefined) {
    carta.nome = req.body.nome;
  }

  if (req.body.tipo !== undefined) {
    carta.tipo = req.body.tipo;
  }

  if (req.body.hp !== undefined) {
    carta.hp = Number(req.body.hp);
  }

  res.json(carta);
});

app.delete("/cartas/:id", (req, res) => {
  const id = Number(req.params.id);
  const quantidadeAntes = cartasPokemon.length;

  cartasPokemon = cartasPokemon.filter((item) => item.id !== id);

  if (cartasPokemon.length === quantidadeAntes) {
    return res.status(404).json({ mensagem: "Carta nao encontrada." });
  }

  res.status(204).send();
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
