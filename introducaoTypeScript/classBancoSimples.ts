class Banco {
  saldo: number;
  registro: string;
  nome: string;
  dep: number; // Propriedade para armazenar o valor do depósito
  result: number; // Propriedade para armazenar o novo saldo

  constructor(saldo: number, registro: string, nome: string) {
    this.saldo = saldo;
    this.registro = registro;
    this.nome = nome;
  }

  depositar(dep: number): void {
    this.dep = dep; // Armazena o valor do depósito na propriedade 'dep'
    this.result = this.saldo + this.dep; // Calcula o novo saldo e armazena na propriedade 'result'
    console.log(`O usuário ${this.nome} possui um saldo de R$${this.saldo}, e foi realizado um depósito de R$${this.dep}.`);
    console.log(`Novo Saldo R$${this.result}`);
  }
}

const pessoa1 = new Banco(2500, "325698156", "Felippe");

pessoa1.depositar(1000);
