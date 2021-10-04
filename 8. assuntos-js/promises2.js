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

function baixaPagina(){
  const emCache = false;

  if(emCache){
    return Promise.resolve("Página em cache");
  } else {
    return wait("Baixando a página", 3);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log("Erro", e));