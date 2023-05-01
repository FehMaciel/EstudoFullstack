/*//sintaxe
function primeiraFuncao() {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log("Esperou isso Aqui");
        resolve();
      }, 1000);
  })
}

//Importante conter o async, se não retorna um erro:  caught SyntaxError: await is only valid in async functions and the top level bodies of modules
async function segundaFuncao() {
  console.log("Iniciou");
  // O await pausa a operação do codigo ate que ele termene a execução, neste exemplo ele espera primeiraFuncao() retornar para ele proseguir console.log("Terminou");
  await primeiraFuncao();
  console.log("Terminou");
}

segundaFuncao();*/

//Pratico


function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
  //"then" para manipular o resultado
  .then((data) => data.json())
  // Se houver algum erro, a exceção será capturada usando "catch".
  .catch((err) => console.log(err))
}

async function showUserName(id){
  console.log("Buscando usuario...");
  const user = await getUser(id);
  console.log(`O nome do usuario é: ${user.data.first_name}`);
  console.log("Usuario localizado");
}

showUserName(3);
