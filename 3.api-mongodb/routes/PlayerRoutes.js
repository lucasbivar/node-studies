const express = require("express")
const router = express.Router()
const PlayersController = require("../controllers/PlayersController")

const playersController = new PlayersController();

/**
 * @swagger
 * tags:
 * - name: "Players"
 *   description: "Everything about players"
 * 
*/

/**
 * @swagger
 * /players:
 *  get:
 *    tags:
 *    - "Players"
 *    description: Use to request all players
 *    summary: Get all players
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Internal Error
 *    parameters:
 *      - name: firstName
 *        in: query
 *        description: First name
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name: lastName
 *        in: query
 *        description: Last name
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name: team
 *        in: query
 *        description: Player team
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name: age
 *        in: query
 *        description: Players with age greater than specified
 *        required: false
 *        schema:
 *          type: integer
 *          format: int64
 *      - name: position
 *        in: query
 *        description: Player position
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 */ 
router.get("/players", playersController.showAllPlayers);

/**
 * @swagger
 * /players:
 *  post:
 *    tags:
 *    - "Players"
 *    description: Use to create a new player
 *    summary: Add a new player
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *    - name: "body"
 *      in: "body"
 *      description: "Created player object"
 *      schema:
 *        type: "Object"
 *        properties:
 *          firstName:
 *            type: "string"
 *          lastName:
 *            type: "string"
 *          age:
 *             type: "integer"
 *          team:
 *             type: "string"
 *          position:
 *             type: "string"
 *    responses:
 *      '201':
 *        description: Successfully added
 *      '400':
 *        description: Invalid input
 */ 
router.post("/players", playersController.create);

/**
 * @swagger
 * /players/{id}:
 *  put:
 *    tags:
 *    - "Players"
 *    description: Use to edit a player
 *    summary: Edit existent player
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: id of the player tha need to be updated
 *      required: true
 *    - in: "body"
 *      name: "body"
 *      description: "Properties to be updated (it's not obligatory pass all properties)"
 *      schema:
 *        type: "Object"
 *        properties:
 *          firstName:
 *            type: "string"
 *          lastName:
 *            type: "string"
 *          age:
 *             type: "integer"
 *          team:
 *             type: "string"
 *          position:
 *             type: "string"
 *    responses:
 *      '201':
 *        description: Successfully updated
 *      '400':
 *        description: Invalid input
 */
router.put("/players/:id", playersController.update);

/**
 * @swagger
 * /players/{id}:
 *  delete:
 *    tags:
 *    - "Players"
 *    description: Use to delete a player
 *    summary: Delete a player
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: id of the player to be deleted
 *      required: true 
 *    responses:
 *      '200':
 *        description: Successfully deleted
 *      '400':
 *        description: Error
 */
router.delete("/players/:id", playersController.delete);

/**
 * @swagger
 * /players/{id}:
 *  get:
 *    tags:
 *    - "Players"
 *    description: Use to request player by ID
 *    summary: Get player by ID
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Internal Error
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: id of the player to be recovered
 *      required: true 
 */ 
router.get("/players/:id", playersController.showById);

module.exports = router
