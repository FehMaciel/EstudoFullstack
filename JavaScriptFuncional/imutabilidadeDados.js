// Exemplo de imutabilidade de dados em objetos
const person = {
  name: "Alice",
  age: 25,
  address: {
    street: "Main Street",
    city: "New York",
    country: "USA"
  }
};

//ele meio que cria um clone o "Object.assign"({}, person, { age: 26 })
const updatedPerson = Object.assign({}, person, { age: 26, name: "Alice Silva" });
const casaPerson = Object.assign({}, person, { age: 26, name: "Alice Silva Oliveira", address: {street: "Santo André",city: "SP", country: "BR"} });

console.log(person.age); // 25
console.log(updatedPerson.age); // 26
console.log(person.name); // 25
console.log(updatedPerson.name); // 26
console.log(casaPerson.name); // 26
//console.log(person.andress.street); // 26
console.log(person); // 26
console.log(casaPerson); // 26

// Exemplo de imutabilidade de dados em arrays
const numbers = [1, 2, 3, 4];

const updatedNumbers = [...numbers, 5];

console.log(numbers); // [1, 2, 3, 4]
console.log(updatedNumbers); // [1, 2, 3, 4, 5]
