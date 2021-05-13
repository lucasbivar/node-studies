const {readFile, writeFile} = require("fs");
const { read } = require("fs/promises");

console.log("start");

readFile("./08-content/first.txt", "utf-8", (err, result) =>{
  if(err){
    console.log(err);
    return;
  }
  const first = result;
  readFile("./08-content/second.txt", "utf-8", (err, result) => { 
    if(err){
      console.log(err);
      return;
    }
    const second = result;
    writeFile("./08-content/result-async.txt",
    `Here is the result : ${first}, ${second}`,
    (err, result)=>{
      if(err){
        console.log(err);
        return;
      }
      console.log("done with this task");
    });
  });  
});

console.log("starting next task");

// async vs sync
// sync  - execute line by line, and wait each function finish to go to the next
// async - execute the programa line by line, but not wait all functions finish  

// we can use promises instead, the code stay more tidy