const numeros = [100, 150, 340, 260, 470, 216, 340, 140, 120];

const [um, dois] = numeros;

const [one, ...rest] = numeros;

console.log(um, dois);

console.log(one, rest);