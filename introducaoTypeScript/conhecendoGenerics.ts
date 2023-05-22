function imprimeElementos<A>(array: A[]): void {
  for (const elemento of array) {
    console.log(elemento);
  }
}

const numeros: number[] = [1, 2, 3, 4, 5];
const nomes: string[] = ["Alice", "Bob", "Charlie"];

imprimeElementos(numeros); // Saída: 1 2 3 4 5
imprimeElementos(nomes); // Saída: Alice Bob Charlie
