class Carro {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }
    
    acelerar(): void{
        console.log(`O ${this.modelo}, da marca ${this.marca}, esta acelerando!`);
    }
}

const meuCarro = new Carro("Toyota", "Corolla");
const meuCarroPasseio = new Carro("Audi", "A4");

console.log(meuCarro.marca);
console.log(meuCarro.modelo);

meuCarro.acelerar();
meuCarroPasseio.acelerar();
