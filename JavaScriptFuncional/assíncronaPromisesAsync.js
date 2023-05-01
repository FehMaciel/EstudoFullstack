  // Exemplo usando Promises
fetch('https://jsonplaceholder.typicode.com/todos/1')
//"then" para manipular a resposta quando ela estiver pronta.
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// Exemplo usando Async/await
async function getTodo() {
try {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
}
getTodo();
