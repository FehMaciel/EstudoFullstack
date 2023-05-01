class Pessoa{
  //aqui são todos os atributos que a Pessoa Tem.
  constructor(nome, idade, profissao){
    //Aqui declara que cada variavel recebe ela mesma
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
  apresentar(){
    console.log("O funcionário " + this.nome + " tem " + this.idade + " anos e sua profissão é " + this.profissao + ", ela trabalha como " + this.cargo);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, cargo, profissao, salario) {
    super(nome, idade, profissao);
    this.cargo = cargo;
    this.salario = salario;
  }

  salarioPago(){
    console.log("Seu salario atualmente é de R$" + this.salario)
  }
 
}

const funcionario1 = new Funcionario('Maria', 25, 'Gerente', 'Engenheira', 10000);


funcionario1.apresentar();
funcionario1.salarioPago();

