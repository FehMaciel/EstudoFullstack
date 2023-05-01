class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  som() {}

  correr() {}
}

class Cachorro extends Animal {
  som() {
    console.log("Au au");
  }

  correr() {
    console.log("Cachorro correndo");
  }
}

class Gato extends Animal {
  som() {
    console.log("Miau");
  }

  correr() {
    console.log("Gato correndo");
  }
}

let meuCachorro = new Cachorro("Rex", 3);
meuCachorro.som(); // "Au au"
meuCachorro.correr(); // "Cachorro correndo"

let meuGato = new Gato("Frajola", 2);
meuGato.som(); // "Miau"
meuGato.correr(); // "Gato correndo"
