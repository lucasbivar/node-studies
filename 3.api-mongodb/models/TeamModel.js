const mongoose = require("../database")

const TeamSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true,
    default: ""
  },
  year:{
    type: Number,
    default: 0
  },
  coach:{
    type: String,
    trim: true,
    default: ""
  },
  stadium:{
    type: String,
    trim: true,
    default: ""
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player" }]
})

module.exports = mongoose.model("Team", TeamSchema);