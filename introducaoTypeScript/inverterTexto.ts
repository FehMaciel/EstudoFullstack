function inverterTexto<S>(texto: S){
    if(typeof texto === "string"){
        return texto.split("").reverse().join("") as S;
    }else {
        throw new Error("Tipo não suportado para inversão.");
    }
}

const textoInvertido = inverterTexto("Felippe");

console.log("Texto Invertido: ", textoInvertido);
