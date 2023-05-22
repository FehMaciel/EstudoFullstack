function test(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Método ${propertyKey} foi chamado com os argumentos: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Resultado: ${result}`);
    return result;
  };
}

class MinhaClasse {
  @test
  soma(a: number, b: number): number {
    return a + b;
  }
}

const minhaInstancia = new MinhaClasse();
minhaInstancia.soma(2, 3); // Saída: Método soma foi chamado com os argumentos: 2, 3 | Resultado: 5
