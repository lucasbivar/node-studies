const express = require("express")
const api = require('./routes/api')

// initialize app with config options
const app = express()

// set routes
app.use('/api', api) // sample API Routes


app.listen(5000, ()=>{
	console.log("Server ON!");
})