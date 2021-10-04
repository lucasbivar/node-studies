// map sempre retorna um array com a mesma quantidade de elementos.
// retornar o obj com um obj diferente

// Dobrando os números

const numbers = [6, 10, 30, 90, 70, 50, 20];

const doubleNumbers = numbers.map(function(obj, indice, array){
  return obj;
})

console.log(doubleNumbers);



// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto



const group = [
  { name: "Fill", age: 62 },
  { name: "John", age: 12 },
  { name: "Ralph", age: 52 },
  { name: "Jake", age: 40 },
  { name: "Tay", age: 19 },
  { name: "Dac", age: 60 },
];

const names = group.map(obj => obj.name);

console.log(names);

const onlyAge = group.map(obj => {
  if (obj.age > 0) return obj.age;
});

console.log(onlyAge);

const addId = group.map((obj, indice) => {
  obj.id = (indice + 1) * 1000;
  return obj;
});

console.log(addId);