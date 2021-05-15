const express = require("express")
const player = require('./routes/PlayerRoutes')
const team = require('./routes/TeamRoutes')
const PORT = process.env.PORT || 5000;


// initialize app with config options
const app = express()

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())


// set routes
app.use('/api', player) 
app.use('/api', team)


app.listen(PORT, ()=>{
	console.log('Server is listening on port 5000....');
})