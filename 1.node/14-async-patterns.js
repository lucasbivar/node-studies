const {readFile, writeFile} = require("fs").promises;

// const util = require("util");
// const writeFilePromise = util.promisify(writeFile)
// const readFilePromise = util.promisify(readFile);

// const getText = (path) =>{
//   return new Promise((resolve, reject)=>{
//     readFile(path, "utf8", (err, data)=>{
//       if(err){
//         reject(err);
//       }else{
//         resolve(data);
//       }
//     });
//   });
// }


const start = async () =>{
  try {
    const first = await readFile("./08-content/first.txt", "utf8");
    const second = await readFile("./08-content/second.txt", "utf8");
    await writeFile("./08-content/result-mind-grenade.txt", `THIS IS AWESOME : ${first} ${second}`);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
}
// getText("./08-content/first.txt")
// .then(result => console.log(result))
// .catch(err => console.log(err));

start();