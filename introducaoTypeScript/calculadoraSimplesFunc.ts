/*let numeros: number[] = [1,2,0,4];

console.log(numeros)
console.log(numeros.length)
let i: number = 0;
for(i = 0; i <  numeros.length; i++){
  console.log(numeros[i]);
}*/

let numeros: number[];

function calcularSoma(numeros: number[]){
  console.log(numeros);
  console.log("Estes são os números do array")
  let media: number = 0;
  for(let i:number = 0; i < numeros.length; i++){
    media += numeros[i];
    console.log(numeros[i]);
  }
  console.log(`Soma: ${media}`)
  media = media / numeros.length
  console.log(`Média: ${media}`)
}

function calcularSub(numeros: number[]){
    let sub: number = 0;
    for(let i:number = 0; i < numeros.length; i++){
        sub -= numeros[i];
    }
    console.log(`Subtração: ${sub}`)
}


calcularSoma([1,2,3,4,5])
calcularSub([1,2,3,4,5])
