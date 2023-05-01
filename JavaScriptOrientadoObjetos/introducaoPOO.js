class Pessoa{
  //aqui são todos os atributos que a Pessoa Tem.
  constructor(nome, idade, profissao){
    //Aqui declara que cada variavel recebe ela mesma
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

const pessoa1 = new Pessoa('João', 30, 'Engenheiro');

console.log(pessoa1);

console.log(pessoa1.nome); // João
console.log(pessoa1.idade); // 30
console.log(pessoa1.profissao); // Engenheiro
