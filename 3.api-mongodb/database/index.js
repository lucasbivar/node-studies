const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/teams-db", {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose;