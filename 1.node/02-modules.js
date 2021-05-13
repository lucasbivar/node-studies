// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./03-names");
// const {john, peter}  = require("./03-names");
console.log(names);
const {john, peter} = names;

const sayHi = require("./04-utils");
console.log(sayHi);
sayHi("Lucas");
sayHi(john);
sayHi(peter);


const data = require("./05-alternative-flavor");
console.log(data);

require("./06-mind-grenade");
