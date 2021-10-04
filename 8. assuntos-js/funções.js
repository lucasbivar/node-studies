// Declaração de função (function hoisting)
function falaOi(){
  console.log("Function hoisting");
}

// First-class objects (Objetos de primeira classe)
const falaXau = function(){
  console.log("First-class")
}

// Arrow function
const Arrow = () => {
  console.log("Arrow");
}

falaOi();
falaXau();
Arrow();

const obj = {
  falar(){
    console.log("oi oi oi");
  }
}

obj.falar();
