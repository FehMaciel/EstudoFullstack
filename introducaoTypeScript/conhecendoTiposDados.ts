function saudacao(name: string, idade: number, isStudent: boolean): string {
    let msg: string = ""
      if (isStudent == true) {
          return msg = `Olá ${name}, você tem ${idade} anos, e você é estudante`;
      } else {
          return msg = `Olá ${name}, você tem ${idade} anos, e você não é estudante`;
      }
}
console.log(saudacao("Felippe", 19, true));
