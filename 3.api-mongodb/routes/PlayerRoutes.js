const express = require("express")
const router = express.Router()
const PlayersController = require("../controllers/PlayersController")

const playersController = new PlayersController();

router.get("/player", playersController.showAllPlayers);

router.post("/player", playersController.create);

router.put("/player/:id", playersController.update);

router.delete("/player/:id", playersController.delete);

router.get("/player/:id", playersController.showById);

module.exports = router
