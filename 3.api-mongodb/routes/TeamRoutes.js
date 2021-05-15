const express = require("express")
const router = express.Router();
const TeamsController = require("../controllers/TeamsController")

const teamsController = new TeamsController();

router.get("/team", teamsController.showAllTeams)

router.post("/team", teamsController.create)

router.put("/team:id", teamsController.update)

router.delete("/team/:id", teamsController.delete)

router.get("/team/:id", teamsController.showById)

module.exports = router;