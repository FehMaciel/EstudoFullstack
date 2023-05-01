// Função Simples
function calculaOperacao(a, b, op){
  if(op == '+'){
    return a + b;
  }
  if(op == '-'){
    return a - b;
  }
  if(op == '*'){
    return a * b;
  }
  if(op == '/'){
    return a / b;
  } 
}

console.log(calculaOperacao(5, 3, '+'));

// END Fução Simples

// Fuções Simples
function soma(a,b) {
  return a+b;
}

function subtracao(a,b) {
  return a-b;
}
function multiplicacao(a,b) {
  return a*b;
}
function divisao(a,b) {
  return a/b;
}

console.log(soma(5,3));
console.log(subtracao(5,3));
console.log(multiplicacao(5,3));
console.log(divisao(5,3));

// END Fuções Simples


// Fuções Ordem Superior
function calculaOperacao(a,b,funcao){
  return funcao(a,b);
}

function soma(a,b) {
  return a+b;
}

function subtracao(a,b) {
  return a-b;
}
function multiplicacao(a,b) {
  return a*b;
}
function divisao(a,b) {
  return a/b;
}

console.log(calculaOperacao(7,3,multiplicacao));

// END Fuções Ordem Superior
