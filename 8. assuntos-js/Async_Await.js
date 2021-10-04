function random(min = 0, max = 5) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no erro");
        return;
      }

      resolve(msg.toLocaleUpperCase() + " Passei na promise");
      return;
    }, tempo);
  });
}

// espera("Fase 1", random())
//   .then(valor => {
//     console.log(valor);
//     return espera("Fase 2", random());
//   })
//   .then(fase => {
//     console.log(fase);
//     return espera("Fase 3", random());
//   })
//   .then(fase => {
//     console.log(fase);
//   })
//   .catch(e => console.log(e));

//Async / Await

async function executa() {
  try {
    const fase1 = await espera("Fase 1", random());
    console.log(fase1);
    const fase2 = await espera("Fase 2", random());
    console.log(fase2);
    const fase3 = await espera("Fase 3", random());
    console.log("Terminado a fase: ", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();