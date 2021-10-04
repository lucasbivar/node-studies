const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
  //trim:true -> remove white spaces in the end and begin
  firstName: {
    type:String, 
    trim:true, 
    default:""
  },
  lastName: {
    type:String, 
    trim:true, 
    default:""
  },
  age: {
    type:Number, 
    default: 0
  },
  team: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Team"
  },
  position: {
    type:String, 
    trim: true, 
    default:"",
    lowercase: true
  }
})

module.exports = mongoose.model("Player", PlayerSchema)