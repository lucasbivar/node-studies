const Team = require("../models/TeamModel");
const Player = require("../models/PlayerModel")

class TeamsController{
  async showAllTeams(req, res){
    try{
      let filters = req.query;
      const teams = await Team.find(filters).populate("players");
      return res.status(200).json({
        success: true, 
        data: teams
      });
    }catch(err){
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }
  }

  async create(req, res){
    try{
      const team = await Team.create(req.body);
      return res.status(201).json({
        success: true,
        data: team
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
      const team = await Team.findByIdAndUpdate(id, newData, {new: true});
      return res.status(200).json({
        success: true,
        data: team
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
      const team = await Team.findByIdAndRemove(id);
      for(const player of team.players){
        await Player.findByIdAndRemove(player)
      }
      return res.status(200).json({
        success: true,
        message: `Team ${id} successfully removed.`
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
      const {id} = req.params;
      const team = await Team.findById(id).populate("players")
      return res.status(200).json({
        success: true, 
        data: team
      })
    }catch(err){
      return res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }
}

module.exports = TeamsController;