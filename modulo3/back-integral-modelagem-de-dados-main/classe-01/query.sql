CREATE TABLE produtos
(
  id serial primary key,
  nome varchar(100) not null,
  descricao text,
  preco int not null,
  quantidade_em_estoque int not null,
  categoria_id int references categorias(id)
);



CREATE TABLE categorias
(
  id serial primary key,
  nome varchar(50) not null
);


CREATE TABLE itens_do_pedido
(
  id serial primary key,
  pedido_id int references pedidos(id),
  quantidade int not null,
  produto_id int references produtos(id)
);

CREATE TABLE pedidos
(
  id serial primary key,
  valor int not null,
  cliente_cpf varchar(11) references clientes(cpf),
  vendedor_cpf varchar(11) references vendedores(cpf)
);

CREATE TABLE clientes
(
  cpf varchar(11) not null unique,
  nome varchar(150)
);

CREATE TABLE vendedores
(
  cpf varchar(11) not null unique,
  nome varchar(150)
);



INSERT INTO categorias
  (nome)
VALUES
  ('frutas'),
  ('verduras'),
  ('massas'),
  ('bebidas'),
  ('utilidades');


INSERT INTO produtos
  (nome, descricao, preco, quantidade_em_estoque, categoria_id)
VALUES
  ('Mamão', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
  ('Maçã', 'Fonte de potássio e fibras.', 90, 34, 1),
  ('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
  ('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
  ('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 1),
  ('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
  ('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
  ('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
  ('Refrigerante', 'coca cola lata Sabor original', 350, 189, 4),
  ('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
  ('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
  ('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
  ('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
  ('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
  ('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
  ('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
  ('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
  ('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);


INSERT INTO clientes
  (cpf, nome)
VALUES
  ('803.713.500-42', 'José Augusto Silva'),
  ('676.428.690-61', 'Antonio Oliveira'),
  ('631.933.100-34', 'Ana Rodrigues'),
  ('756.705.050-18', 'Maria da Conceição');

-- ALTER TABLE clientes ALTER COLUMN cpf TYPE
-- varchar
-- (14);


insert into vendedores
  (cpf, nome)
values
  ('825.398.410-31', 'Rodrigo Sampaio'),
  ('232.625.460-03', 'Beatriz Souza Santos'),
  ('280.071.550-23', 'Carlos Eduardo');

-- ALTER TABLE vendedores ALTER COLUMN cpf TYPE
-- varchar
-- (14);

insert into pedidos
  (valor, cliente_cpf, vendedor_cpf)
values
  (9650, '803.713.500-42', '280.071.550-23');

insert into itens_do_pedido
  (pedido_id, quantidade, produto_id)
values
  (1, 1, 1),
  (1, 1, 10),
  (1, 6, 11),
  (1, 1, 15),
  (1, 5, 2);

UPDATE produtos
SET quantidade_em_estoque = 122
WHERE id = 1;

UPDATE produtos
SET quantidade_em_estoque = 11
WHERE id = 10;

UPDATE produtos
SET quantidade_em_estoque = 494
WHERE id = 11;

UPDATE produtos
SET quantidade_em_estoque = 43
WHERE id = 15;

UPDATE produtos
SET quantidade_em_estoque = 29
WHERE id = 2;




INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
VALUES
  (6460, '631.933.100-34', '232.625.460-03');

insert into itens_do_pedido
  (pedido_id, quantidade, produto_id)
values
  (5, 10, 17),
  (5, 3, 18),
  (5, 5, 1),
  (5, 10, 5),
  (5, 2, 6);


UPDATE produtos
SET quantidade_em_estoque = 166
WHERE id = 17;

UPDATE produtos
SET quantidade_em_estoque = 87
WHERE id = 18;

UPDATE produtos
SET quantidade_em_estoque = 117
WHERE id = 1;

UPDATE produtos
SET quantidade_em_estoque = 78
WHERE id = 5;

UPDATE produtos
SET quantidade_em_estoque = 11
WHERE id = 6;




INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
VALUES
  (4120, '756.705.050-18', '232.625.460-03');

INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
VALUES
  (6, 1, 13),
  (6, 6, 12),
  (6, 5, 17);


UPDATE produtos
SET quantidade_em_estoque = 29
WHERE id = 13;

UPDATE produtos
SET quantidade_em_estoque = 472
WHERE id = 12;

UPDATE produtos
SET quantidade_em_estoque = 161
WHERE id = 17;


INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
VALUES
  (9370, '756.705.050-18', '825.398.410-31');


INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
VALUES
  (7, 1, 16),
  (7, 6, 18),
  (7, 1, 7),
  (7, 3, 1),
  (7, 20, 5),
  (7, 2, 6);


UPDATE produtos
SET quantidade_em_estoque = 54
WHERE id = 16;

UPDATE produtos
SET quantidade_em_estoque = 81
WHERE id = 18;

UPDATE produtos
SET quantidade_em_estoque = 4
WHERE id = 7;

UPDATE produtos
SET quantidade_em_estoque = 114
WHERE id = 1;

UPDATE produtos
SET quantidade_em_estoque = 58
WHERE id = 5;

UPDATE produtos
SET quantidade_em_estoque = 9
WHERE id = 6;



INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
VALUES
  (8229, '676.428.690-61', '825.398.410-31');

INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
VALUES
  (8, 8, 18),
  (8, 1, 8),
  (8, 3, 17),
  (8, 8, 5),
  (8, 2, 11);


UPDATE produtos
SET quantidade_em_estoque = 79
WHERE id = 18;

UPDATE produtos
SET quantidade_em_estoque = 18
WHERE id = 8;

UPDATE produtos
SET quantidade_em_estoque = 163
WHERE id = 17;

UPDATE produtos
SET quantidade_em_estoque = 50
WHERE id = 5;

UPDATE produtos
SET quantidade_em_estoque = 492
WHERE id = 11;





SELECT produtos.nome, categorias.nome
FROM produtos
  JOIN categorias ON produtos.categoria_id = categoria_id;



SELECT pedidos.id as pedido, vendedores.nome as nome_do_vendedor, clientes.nome as nome_do_cliente
FROM pedidos
  JOIN vendedores ON pedidos.vendedor_cpf = vendedores.cpf
  JOIN clientes ON pedidos.cliente_cpf = clientes.cpf;

SELECT categorias.nome, sum(produtos.quantidade_em_estoque) as soma_estoque
from categorias
  JOIN produtos on produtos.categoria_id = categorias.id
GROUP BY categorias.nome;

SELECT produtos.id, produtos.nome, sum(itens_do_pedido.quantidade)
FROM produtos
  JOIN itens_do_pedido ON itens_do_pedido.produto_id = produtos.id
GROUP BY produtos.id, produtos.quantidade_em_estoque;





-- ALTER TABLE pedidos ALTER COLUMN vendedor_cpf TYPE varchar(14);











