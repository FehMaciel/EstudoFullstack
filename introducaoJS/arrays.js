const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1
console.log(numeros[2]); // 3

numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

numeros.pop();
console.log(numeros); // [1, 2, 3, 4, 5]

numeros.splice(2, 1, 8);
console.log(numeros); // [1, 2, 8, 4, 5]
