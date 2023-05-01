const numeros = [1, 2, 3, 4, 5];

//Os métodos "map", "filter" e "reduce" são funções de ordem superior que permitem transformar, filtrar e reduzir arrays.
const dobrados = numeros.map((numero) => {
  return numero * 2;
});

console.log(dobrados); // [2, 4, 6, 8, 10]
