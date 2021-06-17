const Player = require("../models/PlayerModel")
const Team = require("../models/TeamModel");

class PlayersController{
  async showAllPlayers(req, res){
    try {
      let filters = req.query;
      //how to query a profile between 40 and 40
      //$gt - greater than
      //$lt - less than
      //Profile.find({age: {$gt: 30, $lt:40}})
      if(filters.age != null){
        // filters["age"] =  {$gt: filters.age-1} -> greater or equal
        filters["age"] =  {$gt: filters.age}
      }	
      const player = await Player.find(
        filters
      ).populate("team");
      return res.status(200).json({
        success: true, 
        data: player
      })
    }catch(err){
      return res.status(400).json({
        success: false, 
        message: err.message
      })
    }
  }

  async create(req, res){
    try{ 
      const playerData = req.body
      const team = await Team.findOne({name:playerData.team});
      if(playerData.team == null || team == null){
        throw new Error("Team not unspecified or not exist.");
      }
      playerData.team = team._id;
      const player = await Player.create(playerData)
      await Team.findByIdAndUpdate(team._id, {$push: {players: player._id}});
      const playerUpdated = await Player.findById(player._id).populate("team")
      return res.status(200).json({
        success: true, 
        data: playerUpdated
      })
    }catch(err){
      return res.status(400).json({
        success: false, 
        message: err.message
      })
    }
  }

  async update(req, res){
    try{
      const {id} = req.params;
      const newData = req.body;
      if(newData.team != null){
        throw new Error("You don't have permission to change the team.")
      }
      const player = await Player.findByIdAndUpdate(id, newData, {new: true}).populate("team");
      return res.status(200).json({
        success: true,
        message: player
      })
    }catch(err){
      return res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }

  async delete(req, res){
    try{
      const {id} = req.params;
      await Player.findByIdAndRemove(id);
      return res.status(200).json({
        success: true,
        message: `Player ${id} successfully removed.`
      })
    }catch(err){
      return res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }

  async showById(req, res){
    try{
      var {id} = req.params;
      var player = await Player.findById(id)
      if(player != null){
        player = await Player.findById(id).populate("team")
      }
      return res.status(200).json({
        success: true, 
        data: player
      })
    }catch(err){
      return res.status(400).json({
        success: false,
        message: `Profile ${id} not found.`
      })
    }
  }
}

module.exports = PlayersController;