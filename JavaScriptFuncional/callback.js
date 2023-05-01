function exibir(num) {
  console.log("A Operação resultou em: " + num);
}
function soma(a, b, cb) {
  op = a + b;
  //console.log(op);
  cb(op);
}

function multiplicar(a, b, cb) {
  op = a * b;
  //console.log(op); 
  cb(op);
}

soma(5,5, exibir);
multiplicar(5,5, exibir);
