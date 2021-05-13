const {readFileSync, writeFileSync} = require("fs");
console.log("start");

const first = readFileSync("./08-content/first.txt", "utf-8");
const second = readFileSync("./08-content/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync(
  './08-content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  // if we don't pass the flag, the program will override the current file
  // { flag: 'a' }
);

console.log('done with this task')
console.log('starting the next one')