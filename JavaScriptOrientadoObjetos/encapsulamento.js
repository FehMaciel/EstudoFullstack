class ContaBancaria {
  constructor() {
    this._saldo = 0;
    this._limite = 1000;
  }

  getSaldo() {
    return this._saldo;
  }

  getLimite() {
    return this._limite;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  sacar(valor) {
    if (valor <= this._saldo + this._limite) {
      this._saldo -= valor;
      return true;
    } else {
      return false;
    }
  }
}

let minhaConta = new ContaBancaria();
console.log(minhaConta.getSaldo()); // 0
console.log(minhaConta.getLimite()); // 1000

minhaConta.depositar(500);
console.log(minhaConta.getSaldo()); // 500

minhaConta.sacar(300);
console.log(minhaConta.getSaldo()); // 200

minhaConta.sacar(1000);
console.log(minhaConta.getSaldo()); // -800
console.log(minhaConta.getLimite()); // 1000

minhaConta.sacar(100);
console.log(minhaConta.getSaldo()); // -800
console.log(minhaConta.getLimite()); // 1000
