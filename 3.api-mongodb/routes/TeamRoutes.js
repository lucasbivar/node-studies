const express = require("express")
const router = express.Router();
const TeamsController = require("../controllers/TeamsController")

const teamsController = new TeamsController();

/**
 * @swagger
 * tags:
 * - name: "Teams"
 *   description: "Everything about soccer teams"
 * 
*/


/**
 * @swagger
 * /teams:
 *  get:
 *    tags:
 *    - "Teams"
 *    description: Use to request all teams
 *    summary: Get all teams
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Internal Error
 *    parameters:
 *      - name: name
 *        in: query
 *        description: Team name
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name: coach
 *        in: query
 *        description: Coach name
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name: stadium
 *        in: query
 *        description: Stadium name
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name: year
 *        in: query
 *        description: Foundation year
 *        required: false
 *        schema:
 *          type: integer
 *          format: int64
 */ 
router.get("/teams", teamsController.showAllTeams)

/**
 * @swagger
 * /teams:
 *  post:
 *    tags:
 *    - "Teams"
 *    description: Use to create a new team
 *    summary: Add a new team
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Created team object"
 *      schema:
 *        type: "Object"
 *        properties:
 *          name:
 *            type: "string"
 *          year:
 *            type: "integer"
 *          coach:
 *             type: "string"
 *          stadium:
 *             type: "string"
 *    responses:
 *      '201':
 *        description: Successfully added
 *      '400':
 *        description: Invalid input
 */ 
router.post("/teams", teamsController.create)

/**
 * @swagger
 * /teams/{id}:
 *  put:
 *    tags:
 *    - "Teams"
 *    description: Use to edit a team
 *    summary: Edit existent team
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: id of the team tha need to be updated
 *      required: true
 *    - in: "body"
 *      name: "body"
 *      description: "Properties to be updated (it's not obligatory pass all properties)"
 *      schema:
 *        type: "Object"
 *        properties:
 *          name:
 *            type: "string"
 *          year:
 *            type: "integer"
 *          coach:
 *             type: "string"
 *          stadium:
 *             type: "string"
 *    responses:
 *      '201':
 *        description: Successfully updated
 *      '400':
 *        description: Invalid input
 */
router.put("/teams:id", teamsController.update)

/**
 * @swagger
 * /teams/{id}:
 *  delete:
 *    tags:
 *    - "Teams"
 *    description: Use to delete a team
 *    summary: Delete a team
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: id of the team to be deleted
 *      required: true 
 *    responses:
 *      '200':
 *        description: Successfully deleted
 *      '400':
 *        description: Error
 */
router.delete("/teams/:id", teamsController.delete)

/**
 * @swagger
 * /teams/{id}:
 *  get:
 *    tags:
 *    - "Teams"
 *    description: Use to request team informations by ID
 *    summary: Get team by ID
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Error
 *    parameters:
 *      - name: id
 *        in: "path"
 *        description: Team ID
 *        required: true
 */ 
router.get("/teams/:id", teamsController.showById)

module.exports = router;