/*  Como solicitado para a opção 1: "Desenvolva uma SQL que pegue todas as vendas de um produto dentro de um período,
ex todas as vendas do produto XPTO feitas fevereiro de 2024." */


/* Solução para o desafio abaixo. */


SELECT * FROM sales
WHERE product_id = (SELECT product_id FROM products WHERE name = 'XPTO')
AND sale_date BETWEEN '2024-02-01' AND '2024-02-29';