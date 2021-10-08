-- 1 - Faça uma query que retorna a quantidade de medicamentos da tabela farmacia.
SELECT medicamento FROM farmacia;

-- 2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado na tabela usuarios.
SELECT min(idade) FROM usuarios;
-- 3 - Faça uma query que retorna apenas a idade do usuario mais velho cadastrado na tabela usuarios.
SELECT max(idade) FROM usuarios;
-- 4 - Faça uma query que retorna a média de idade entre os usuários cadastrados na tabela usuarios com idade maior ou igual a 18 anos.
SELECT avg(idade) FROM usuarios WHERE idade >= 18;
-- 5 - Faça uma query que retorna a soma total do estoque de todos os medicamentos das categorias blue e black na tabela farmacia.
SELECT categoria, sum(estoque) FROM farmacia WHERE categoria = 'blue' OR categoria = 'black' GROUP BY categoria;
-- 6 - Faça uma query que retorna todas as categorias não nulas e a soma do estoque de todos os medicamentos de cada categoria na tabela farmacia.
SELECT categoria, sum(estoque) FROM farmacia  WHERE categoria IS NOT NULL GROUP BY categoria;
-- 7 - Faça uma query que retorna a soma do estoque disponível dos medicamentos sem categoria na tabela farmacia.
SELECT medicamento FROM farmacia WHERE medicamento IS NULL;
-- 8 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela farmacia.
SELECT count(*) FROM farmacia WHERE categoria IS NULL;
-- 9 - Faça uma query que retorna uma única coluna com a junção do nome do medicamento e a categoria entre parenteses de todos os registros em que a categoria não seja nula da tabela farmacia. Ex.: Endocet (green).
SELECT CONCAT(medicamento, ' (', categoria, ')') FROM farmacia  WHERE categoria IS NOT NULL;
-- 10 - Faça uma query que retorna uma única coluna com a junção do identificador e o nome do medicamento separado por um hífen e a categoria entre parenteses de todos os registros da tabela farmacia. Quando a categoria for nula, substituir por (sem categoria). Ex.: 1 - Endocet (green) ou 1 - Endocet (sem categoria).
SELECT CONCAT(id, '  -  ', medicamento, ' (', COALESCE(categoria, 'Sem categoria'), ')') FROM farmacia;
-- 11 - Faça uma query que retorna o nome, a idade e a data de cadastro no formato AAAA-MM-DD de todos os cadastros que aconteceram no ano de 2020, na tabela usuarios.
SELECT nome, idade, cast(cadastro AS date) FROM usuarios WHERE cast(cadastro AS date) BETWEEN cast('2020-01-01' AS date) AND cast('2020-12-31' AS date);
-- 12 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario menor de 18 anos possui cadastrado na tabela usuarios. O tempo precisa ser uma coluna que retorne a quantidade de anos, meses, dias, horas, minutos e segundos em um objeto. Ex.: {"years":2,"months":2,"days":19,"hours":8,"minutes":22,"seconds":19}.
SELECT nome, idade, email, AGE(cast(cadastro AS date)) FROM usuarios WHERE idade < 18;
-- 13 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario, maior ou igual a 60 anos, possui cadastrado na tabela usuarios. O tempo precisa ser uma coluna que retorne apenas a quantidade de anos, meses, dias em um objeto. Ex.: {"years":2,"months":2,"days":19}.
SELECT nome, idade, email, AGE(cast(cadastro AS date)) FROM usuarios WHERE idade >= 60;
-- 14 - Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria que não seja nula da tabela farmacia.
SELECT categoria, count(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;
-- 15 - Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde a idade seja maior ou igual a 18 anos, na tabela usuarios.
SELECT idade, count(*) FROM usuarios WHERE idade >= 18 GROUP BY idade;
-- 16 - Faça uma query que retorna as três categorias e a soma do estoque de todos os medicamentos de cada categoria, na tabela farmacia.
SELECT categoria, sum(estoque) FROM farmacia GROUP BY categoria ORDER BY categoria ASC LIMIT 3;