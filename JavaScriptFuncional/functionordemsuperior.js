function aplicarOperacao(numero, operacao) {
  return operacao(numero);
}

function triplo(numero) {
  return numero * 3;
}

console.log(aplicarOperacao(5, triplo));
