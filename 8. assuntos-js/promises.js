function wait(msg, time) {
  return new Promise((resolve, reject) => {

    if(typeof msg != "string"){ 
      reject("Bad value");
      return;
    }

    setTimeout(() => {
      resolve(msg);
    }, time);
  });

}

function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

wait("Frase 1", random(1, 3))
  .then(resposta => {
    console.log(resposta);
    return wait("Frase 2", random(1, 5))
  .then(resposta => {
    console.log(resposta);
    return wait("Frase 3", random(1, 3))
  .then(resposta => {
    console.log(resposta);
  })
  })
  }).catch(e => {
    console.log("ERROR", e);
  });



const promises = [
  wait("Promisse 1", 3),
  wait("Promisse 2", 2),
  wait("Promisse 3", 5),
  wait("Promisse 4", 1),

];


Promise.all(promises) // Resolve tudo
  .then((valor) => {
    console.log("Rodando o all");
    console.log(valor);
  })
  .catch((e) => {
    console.log("ERROR", e);
  })

  
Promise.race(promises) // Resolve a mais rápida
  .then((valor) => {
    console.log("Rodando o race");
    console.log(valor);
  })
  .catch((e) => {
    console.log("ERROR", e);
  })

