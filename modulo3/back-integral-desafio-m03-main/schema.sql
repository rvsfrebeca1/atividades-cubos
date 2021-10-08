-- DROP TABLE IF EXISTS usuarios CASCADE
CREATE TABLE usuarios
(
  id serial PRIMARY KEY,
  nome varchar(60) NOT NULL,
  nome_loja varchar(120) NOT NULL,
  email varchar(200) NOT NULL UNIQUE,
  senha text NOT NULL
);
-- DROP TABLE IF EXISTS produtos CASCADE
CREATE TABLE produtos
(
  id serial PRIMARY KEY,
  usuario_id int references usuarios (id),
  nome varchar(120),
  quantidade int NOT NULL,
  categoria text,
  preco int NOT NULL,
  descricao text,
  imagem text
);
