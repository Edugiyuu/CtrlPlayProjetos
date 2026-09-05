-- Biblioteca Digital — versão relacional (SQLite)
-- Mesmo domínio do projeto que a turma já vem construindo com MongoDB,
-- só que aqui modelado em tabelas para comparar os dois mundos.
--
-- Como usar: cole este arquivo inteiro numa aba de query do Beekeeper Studio
-- (conectado a um arquivo SQLite novo) e rode tudo de uma vez.

DROP TABLE IF EXISTS emprestimos;
DROP TABLE IF EXISTS livros;
DROP TABLE IF EXISTS autores;
DROP TABLE IF EXISTS alunos;

CREATE TABLE autores (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  nacionalidade TEXT
);

CREATE TABLE livros (
  id INTEGER PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor_id INTEGER NOT NULL,
  ano_publicacao INTEGER,
  genero TEXT,
  disponivel INTEGER NOT NULL DEFAULT 1, -- 1 = sim, 0 = não
  FOREIGN KEY (autor_id) REFERENCES autores(id)
);

CREATE TABLE alunos (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  turma TEXT
);

CREATE TABLE emprestimos (
  id INTEGER PRIMARY KEY,
  livro_id INTEGER NOT NULL,
  aluno_id INTEGER NOT NULL,
  data_emprestimo TEXT NOT NULL,
  data_devolucao TEXT,
  FOREIGN KEY (livro_id) REFERENCES livros(id),
  FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

INSERT INTO autores (id, nome, nacionalidade) VALUES
  (1, 'J.K. Rowling', 'Britânica'),
  (2, 'J.R.R. Tolkien', 'Britânica'),
  (3, 'Machado de Assis', 'Brasileira'),
  (4, 'Isaac Asimov', 'Americana'),
  (5, 'Agatha Christie', 'Britânica');

INSERT INTO livros (id, titulo, autor_id, ano_publicacao, genero, disponivel) VALUES
  (1, 'Harry Potter e a Pedra Filosofal', 1, 1997, 'Fantasia', 1),
  (2, 'Harry Potter e a Câmara Secreta', 1, 1998, 'Fantasia', 0),
  (3, 'O Hobbit', 2, 1937, 'Fantasia', 1),
  (4, 'O Senhor dos Anéis', 2, 1954, 'Fantasia', 0),
  (5, 'Dom Casmurro', 3, 1899, 'Romance', 1),
  (6, 'Memórias Póstumas de Brás Cubas', 3, 1881, 'Romance', 1),
  (7, 'Eu, Robô', 4, 1950, 'Ficção Científica', 0),
  (8, 'Fundação', 4, 1951, 'Ficção Científica', 1),
  (9, 'Assassinato no Expresso do Oriente', 5, 1934, 'Mistério', 1),
  (10, 'E Não Sobrou Nenhum', 5, 1939, 'Mistério', 1);

INSERT INTO alunos (id, nome, turma) VALUES
  (1, 'Benício', 'CY4-Sábado'),
  (2, 'Caio', 'CY4-Sábado'),
  (3, 'Nicolas', 'CY4-Sábado');

INSERT INTO emprestimos (id, livro_id, aluno_id, data_emprestimo, data_devolucao) VALUES
  (1, 2, 1, '2026-08-10', NULL),
  (2, 4, 2, '2026-08-15', NULL),
  (3, 7, 3, '2026-08-20', '2026-08-27'),
  (4, 1, 2, '2026-08-22', '2026-08-29'),
  (5, 9, 1, '2026-08-25', NULL);
