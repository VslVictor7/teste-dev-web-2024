/*  Como solicitado para a opção 1: "Desenvolva uma SQL para listar os produtos mais vendidos em um intervalo de tempo, exemplo: produtos mais vendido em fevereiro de 2024." */


/* Solução para o desafio abaixo. */

SELECT s.quantity 
FROM products p
INNER JOIN sales s ON p.product_id = s.product_id
WHERE s.sale_date BETWEEN '2024-02-01' AND '2024-02-29'
GROUP BY s.quantity
ORDER BY s.quantity DESC