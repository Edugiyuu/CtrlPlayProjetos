-- Boletim da Escola — banco completo (SQLite)
-- ARQUIVO DO PROFESSOR. Não entregar para a turma: o ponto da aula é
-- exatamente eles escreverem isto. Use para conferir, e para ter o banco
-- pronto na sua máquina antes da aula.
--
-- Como usar: cole este arquivo inteiro numa aba de query do Beekeeper Studio
-- (conectado a um arquivo SQLite novo, ex.: escola.sqlite) e rode tudo.
--
-- Modelo:
--   professores 1──N materias
--   turmas      1──N alunos
--   alunos      N──N materias, resolvido pela tabela de junção notas
--
-- NENHUMA query deste arquivo usa JOIN: a turma não viu JOIN. Para ir de uma
-- tabela à outra, segue-se a chave na mão (SELECT ... WHERE id = <valor>).

-- Liga a checagem de chave estrangeira. No SQLite ela vem DESLIGADA, e vale
-- por conexão (não fica salva no arquivo). Sem esta linha, um INSERT com
-- professor_id inexistente passa sem erro.
PRAGMA foreign_keys = ON;

-- Drop na ordem inversa da criação: primeiro quem aponta, depois quem é
-- apontado.
DROP TABLE IF EXISTS notas;
DROP TABLE IF EXISTS alunos;
DROP TABLE IF EXISTS materias;
DROP TABLE IF EXISTS turmas;
DROP TABLE IF EXISTS professores;

CREATE TABLE professores (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL
);

-- FK professor_id: mora aqui, no lado do "muitos" (uma matéria tem UM
-- professor; um professor dá várias matérias).
CREATE TABLE materias (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  professor_id INTEGER NOT NULL,
  FOREIGN KEY (professor_id) REFERENCES professores(id)
);

CREATE TABLE turmas (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  ano INTEGER NOT NULL
);

CREATE TABLE alunos (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  turma_id INTEGER NOT NULL,
  FOREIGN KEY (turma_id) REFERENCES turmas(id)
);

-- Tabela de junção: resolve o N:N entre alunos e matérias. Cada linha é a nota
-- de UM aluno em UMA matéria. Tem dado próprio (valor, bimestre), o que a torna
-- uma tabela de verdade e não só uma "ligação": a nota não é do aluno nem da
-- matéria, é do encontro dos dois.
CREATE TABLE notas (
  id INTEGER PRIMARY KEY,
  aluno_id INTEGER NOT NULL,
  materia_id INTEGER NOT NULL,
  valor REAL NOT NULL,
  bimestre INTEGER NOT NULL,
  FOREIGN KEY (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY (materia_id) REFERENCES materias(id)
);

-- INSERTs na ordem das dependências: pai antes do filho.

INSERT INTO professores (id, nome) VALUES
  (1, 'Ana Beatriz Nunes'),
  (2, 'Carlos Menezes'),
  (3, 'Rita Salgado');

-- A professora 1 dá DUAS matérias: é o "muitos" do um-para-muitos aparecendo.
INSERT INTO materias (id, nome, professor_id) VALUES
  (1, 'Matemática', 1),
  (2, 'Física', 1),
  (3, 'História', 2),
  (4, 'Português', 3),
  (5, 'Biologia', 3);

INSERT INTO turmas (id, nome, ano) VALUES
  (1, '9º A', 2026),
  (2, '9º B', 2026);

-- Os alunos da turma são os alunos de verdade — eles se cadastram na aula.
INSERT INTO alunos (id, nome, turma_id) VALUES
  (1, 'Benício', 1),
  (2, 'Caio', 1),
  (3, 'Nicolas', 1),
  (4, 'Larissa', 2);

-- O aluno 1 tem nota em 3 matérias = 3 linhas aqui.
-- A matéria 1 (Matemática) tem nota de 3 alunos: é o outro lado do N:N.
INSERT INTO notas (id, aluno_id, materia_id, valor, bimestre) VALUES
  (1, 1, 1, 8.5, 1),
  (2, 1, 3, 7.0, 1),
  (3, 1, 4, 9.5, 1),
  (4, 2, 1, 5.5, 1),
  (5, 2, 3, 6.0, 1),
  (6, 3, 1, 10.0, 1),
  (7, 4, 2, 4.5, 1);

-- ---------------------------------------------------------------------------
-- Consultas de conferência (rodar uma por uma depois de criar tudo)
-- ---------------------------------------------------------------------------

-- Deve RECUSAR com "FOREIGN KEY constraint failed".
-- Se passar, o PRAGMA não está valendo nesta conexão.
-- INSERT INTO materias (nome, professor_id) VALUES ('Geografia', 99);

-- Seguir a chave, do filho pro pai (matéria -> professor)
-- SELECT * FROM materias WHERE id = 1;          -- professor_id = 1
-- SELECT * FROM professores WHERE id = 1;       -- Ana Beatriz Nunes

-- Seguir a chave, do pai pros filhos (professor -> matérias dele)
-- SELECT * FROM materias WHERE professor_id = 1;   -- Matemática e Física

-- A corrente de 3 saltos: de uma nota até o nome do professor
-- SELECT * FROM notas WHERE aluno_id = 1;       -- 3 linhas; pegar materia_id = 3
-- SELECT * FROM materias WHERE id = 3;          -- História, professor_id = 2
-- SELECT * FROM professores WHERE id = 2;       -- Carlos Menezes

-- E o outro lado da mesma nota: aluno -> turma
-- SELECT * FROM alunos WHERE id = 1;            -- Benício, turma_id = 1
-- SELECT * FROM turmas WHERE id = 1;            -- 9º A

-- Extras (sem JOIN)
-- SELECT * FROM notas WHERE valor < 6 ORDER BY valor ASC;
-- SELECT COUNT(*) FROM notas WHERE aluno_id = 1;
-- SELECT * FROM notas ORDER BY valor ASC LIMIT 1;
