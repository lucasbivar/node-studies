const mongoose = require("mongoose")

const connectToDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/teams-db", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
  }, () => {
    console.log("DB Connected!");
  })
}

module.exports = { connectToDatabase };