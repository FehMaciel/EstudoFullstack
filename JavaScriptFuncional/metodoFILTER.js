const numeros = [1, 2, 3, 4, 5];

//Os métodos "map", "filter" e "reduce" são funções de ordem superior que permitem transformar, filtrar e reduzir arrays.

const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(pares); // [2, 4]
