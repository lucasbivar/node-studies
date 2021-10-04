// Some todos os números (reduce)
// Retorne um array com os pares (Filter)

const numeros = [5, 50, 80, 1, 6, 5, 4, 9, 6, 10, 30, 90, 70, 50, 20];

const total = numeros.reduce((contador, obj, indice, array) => {
  if (obj % 2 === 0) {
    contador.push(obj);
  }

  return contador;

}, []);

console.log(total);

// Retorne um array com o dobro dos valores (map)

const numerosDobro = numeros.reduce((contador, obj) => {
  contador += obj * 2;

  return contador;
});

console.log(numerosDobro);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Vinia", idade: 12 },
  { nome: "Ralph", idade: 52 },
  { nome: "Messiano", idade: 40 },
  { nome: "Taylera", idade: 63 },
  { nome: "Drugsysh", idade: 6 },
];

const maisVelha = pessoas.reduce((contador, obj) => {
  if(contador.idade > obj.idade) return contador;

  return obj; // else
});

console.log(maisVelha);