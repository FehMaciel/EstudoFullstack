function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Método chamado: ${key}`);
    const result = originalMethod.apply(this, args);
    return result;
  };

  return descriptor;
}

function measureTime(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.time(`Tempo de execução: ${key}`);
    const result = originalMethod.apply(this, args);
    console.timeEnd(`Tempo de execução: ${key}`);
    return result;
  };

  return descriptor;
}

function saudacao(target: any, key: string, descriptor: PropertyDescriptor){
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Olá Seja Bem vindo`);
    const result = originalMethod.apply(this, args);
    return result;
  }
}

class Calculadora {
  @saudacao
  @log
  @measureTime
  somar(a: number, b: number): number {
    return a + b;
  }

  @saudacao
  @log
  @measureTime
  subtrair(a: number, b: number): number {
    return a - b;
  }
}

const calculadora = new Calculadora();
console.log(calculadora.somar(2, 3)); // Saída: "Método chamado: somar", "Tempo de execução: somar" e "5"
console.log(calculadora.subtrair(10, 5)); // Saída: "Método chamado: subtrair", "Tempo de execução: subtrair" e "3"
