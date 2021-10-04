// filter sempre retorna um array com a mesma quantidade de elementos ou menos.
// true se quero adicionar o obj num array
// false quando não quero

const numeros = [5, 50, 80, 1, 6, 5, 4, 9, 6, 10, 30, 90, 70, 50, 20];

const numerosFiltrados = numeros.filter((obj, indice, array) => obj > 10
);
console.log(numerosFiltrados);



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Vinia", idade: 12 },
  { nome: "Ralph", idade: 52 },
  { nome: "Messiano", idade: 40 },
  { nome: "Taylera", idade: 19 },
  { nome: "Drugsysh", idade: 60 },
];

const pessoasComNomeGrande = pessoas.filter(obj =>
  obj.nome.length >= 5);

console.log(pessoasComNomeGrande);

const pessoasCom50ouMais = pessoas.filter(obj =>
  obj.idade > 50);

console.log(pessoasCom50ouMais);

const pessoasComA = pessoas.filter(obj =>
  obj.nome.toLocaleLowerCase().endsWith("a"));

console.log(pessoasComA);