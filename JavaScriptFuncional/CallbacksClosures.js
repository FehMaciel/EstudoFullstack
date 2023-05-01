// Exemplo de callback
function showMessage(message, callback) {
  console.log(message);
  callback();
}

function sayHello() {
  console.log("Hello!");
}

showMessage("Hi!", sayHello);

// Exemplo de closure
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  }
}

const counter = createCounter();

counter(); // imprime 1
counter(); // imprime 2
counter(); // imprime 3
