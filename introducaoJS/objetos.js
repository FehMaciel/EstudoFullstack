const pessoa = {
  nome: "Lucas",
  idade: 25,
  endereco: {
    rua: "Rua A",
    numero: 123
  }
};


console.log(pessoa.nome); // Lucas
console.log(pessoa["endereco"]["rua"]); // Rua A
