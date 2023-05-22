function inverter<T>(valor: T): T {
  if (typeof valor === "string") {
    return valor.split("").reverse().join("") as T;
  } else if (typeof valor === "number") {
    const reversedNumber = parseFloat(valor.toString().split("").reverse().join(""));
    return reversedNumber as T;
  } else {
    throw new Error("Tipo não suportado para inversão.");
  }
}

const textoInvertido = inverter("Olá, mundo!"); // Retorna "!odnum ,álO"
const numeroInvertido = inverter(12345); // Retorna 54321

console.log(textoInvertido);
console.log(numeroInvertido);
