const numeros = [1, 2, 3, 4, 5];

//Os métodos "map", "filter" e "reduce" são funções de ordem superior que permitem transformar, filtrar e reduzir arrays.


const soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log(soma); // 15
