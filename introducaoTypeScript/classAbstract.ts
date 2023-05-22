abstract class Animal {
  abstract emitirSom(): void;

  mover(): void {
    console.log('O animal está se movendo.');
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log('O cachorro está latindo.');
  }
}

const meuCachorro = new Cachorro();
meuCachorro.emitirSom(); // Output: O cachorro está latindo.
meuCachorro.mover(); // Output: O animal está se movendo.
