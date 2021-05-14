 const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./08-content/big.txt', { highWaterMark: 90000 })//change the default chunck size (64kB)
// const stream = createReadStream('../08-content/big.txt', { encoding: 'utf8' })

//createReadStream extends EventEmitter
const stream = createReadStream('./08-content/big.txt')

// read the big text in chuncks, if we console log the result without utf8 encoding,
// we can se 3 chunks (2 with 65.486 and 1 with 37.768)
stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))