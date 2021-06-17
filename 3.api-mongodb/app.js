const express = require("express")
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const player = require('./routes/PlayerRoutes')
const team = require('./routes/TeamRoutes')

const PORT = process.env.PORT || 5000;


// initialize app with config options
const app = express()

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())


// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
	swaggerDefinition: {
		info : {
			version: "1.0.0",
			title: "Soccer Team API",
			description: 'Simple Soccer Team API Information',
			"license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
      },
			contact: {
				name: "Lucas Bivar",
				url: "https://github.com/lucasbivar",
				email: "lucasbivarfonseca@hotmail.com"
			},
			servers: [ {
				"url": "http://localhost:5000",
				"description": "Development server"
			}]
		},
		"host": "localhost:5000",
    "basePath": "/api",
	},
	apis: ['./routes/*.js']
}


// set routes
app.use('/api', player) 
app.use('/api', team)

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, ()=>{
	console.log('Server is listening on port 5000....');
})