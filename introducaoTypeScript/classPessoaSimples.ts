class Pessoa{
    nome: string;
    idade: number;
    
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade
    }
    
    apresentar(): void{
        console.log(`Olá me chamo ${this.nome}, e tenho ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa("Felippe", 19);

pessoa1.apresentar();
