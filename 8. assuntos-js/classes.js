class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }
}

const p1 = new Pessoa("Vini", "Medeiros");

console.log(p1.nome);

console.log(p1.falar());


function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);

};

const p2 = new Pessoa2("Joana", "Medeiros");

console.log(p2.falar());
