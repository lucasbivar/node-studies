const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

//use logger and authorize as middleware in all routes in order
app.use([logger, authorize])

//use logger and authorize as middleware in routs tha start with "/api"
// app.use("/api",[logger, authorize])

// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  //we can access properties in all middlewares
  console.log(req.user)
  res.send('Items')
})

app.all("*", (req, res)=>{
  res.send("Erro");
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
