function multiplicador(x) {
  return function(y) {
    return x * y;
  };
}

const dobro = multiplicador(2);
console.log(dobro(5)); // 10
