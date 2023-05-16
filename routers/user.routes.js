let router = require('express').Router();
const UserController = require('../controllers/user.controller')

/**
 * @swagger
 * "/users/{id}":
 *   get:
 *     tags: [User]
 *     summary: "Gets the user by id."
 *     consumes: [application/json]
 *     produces: [application/json]
 *     parameters:
 *       - name: "id" 
 *         description: "Identifier of user."
 *         in: path
 *         required: true
 *         type: string 
 *         example: "5f6d712496a9e6c"
 *     responses:
 *       200:
 *         description: "success"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User list"
 *               type: user
 *               example: {
    "status": "success",
    "message": "Got users successfully!",
          "data": [
              {
            "role": "admin",
            "_id": "5f6d712496a9e6c",
            "firstName": "Roberto",
            "lastName": "Bolaños",
            "birthdate": "1986-09-11T05:00:00.000Z",
            "identificationType": "CC",
            "identification": "1205543302",
            "phone": "3209455663",
            "email": "roberto.bolaños@mail.com",
            "company": "Nothing"
        }
          ]
      }
 *       400:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User data is required"
 *               type: status
 *               example: {
    "status": "error",
    "message": "User data is required."
 }
 *       500:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "Error description"
 *               type: status
 *               example: {
    "status": "error",
    "message":  "{{Error description}}."
 }
 */
router.get('/:id', UserController.getUser);
/**
 * @swagger
 * "/users":
 *   get:
 *     tags: [User]
 *     summary: "Gets all users."
 *     consumes: [application/json]
 *     produces: [application/json] 
 *     responses:
 *       200:
 *         description: "success"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User list"
 *               type: user
 *               example: {
    "status": "success",
    "message": "Got users successfully!",
          "data": [
              {
                  "role": "admin",
                  "_id": "5f6d712496a9e6c",
                  "firstName": "Roberto",
                  "lastName": "Bolaños",
                  "birthdate": "1986-09-11T05:00:00.000Z",
                  "identificationType": "CC",
                  "identification": "1205543302",
                  "phone": "3209455663",
                  "email": "roberto.bolaños@mail.com",
                  "company": "Nothing"
              }
          ]
      }
 *       400:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User data is required"
 *               type: status
 *               example: {
    "status": "error",
    "message": "User data is required."
 }
 *       500:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "Error description"
 *               type: status
 *               example: {
    "status": "error",
    "message": "{{Error description}}."
 }
 */
router.get('/', UserController.getAll);
/**
 * @swagger
 * "/users":
 *   put:
 *     tags: [User]
 *     summary: "Update the user."
 *     consumes: [application/json]
 *     produces: [application/json]
 *     parameters:
 *       - name: "json" 
 *         description: "Object of user."
 *         in: body
 *         required: true
 *         type: object
 *         example:
 *             {
                  "role": "admin",
                  "id": "5f6d712496a9e6c",
                  "firstName": "Roberto",
                  "lastName": "Bolaños",
                  "birthdate": "1986-09-11T05:00:00.000Z",
                  "identificationType": "CC",
                  "identification": "1205543302",
                  "phone": "3209455663",
                  "email": "roberto.bolaños@mail.com",
                  "company": "Nothing",
                  "password": "MyPass123"
              }
 *     responses:
 *       200:
 *         description: "success"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User list"
 *               type: user
 *               example: {
    "status": "success",
    "message": "User updated successfully!",
          "id": ObjectId("5f6d712496a9e6c")
      }
 *       400:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User data is required"
 *               type: status
 *               example: {
    "status": "error",
    "message": "User data is required."
 }
 *       500:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "Error description"
 *               type: status
 *               example: {
    "status": "error",
    "message":  "{{Error description}}."
 }
 */
router.put('/', UserController.put);
/**
 * @swagger
 * "/users/auth":
 *   post:
 *     tags: [User]
 *     summary: "Gets the user authentication."
 *     consumes: [application/json]
 *     produces: [application/json]
 *     parameters:
 *       - name: "update" 
 *         description: "Object of category."
 *         in: body
 *         type: json 
 *         example:
*           {
               "username": "roberto.bolaños@mail.com",
               "password": "Ch1l1ndr1n4"
            }
 *     responses:
 *       200:
 *         description: "success"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User list"
 *               type: user
 *               example: {
    "status": "success",
    "message": "Got users successfully!",
          "data": [
             {
                  "role": "admin",
                  "_id": "5f6d712496a9e6c",
                  "firstName": "Roberto",
                  "lastName": "Bolaños",
                  "birthdate": "1986-09-11T05:00:00.000Z",
                  "identificationType": "CC",
                  "identification": "1205543302",
                  "phone": "3209455663",
                  "email": "roberto.bolaños@mail.com",
                  "company": "Nothing"
              }
          ]
      }
 *       400:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User data is required"
 *               type: status
 *               example: {
    "status": "error",
    "message": "User data is required."
 }
 *       500:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "Error description"
 *               type: status
 *               example: {
    "status": "error",
    "message": "{{Error description}}."
 }
 */
router.post('/auth', UserController.login);
/**
 * @swagger
 * "/users":
 *   post:
 *     tags: [User]
 *     summary: "Inserts the user."
 *     consumes: [application/json]
 *     produces: [application/json]
 *     parameters:
 *       - name: "json" 
 *         description: "Object of user."
 *         in: body
 *         required: true
 *         type: object 
 *         example: 
 *            {
                  "role": "admin",
                  "firstName": "Roberto",
                  "lastName": "Bolaños",
                  "birthdate": "1986-09-11T05:00:00.000Z",
                  "identificationType": "CC",
                  "identification": "1205543302",
                  "phone": "3209455663",
                  "email": "roberto.bolaños@mail.com",
                  "company": "Nothing",
                  "password": "MyPass123"
              }
 *     responses:
*       200:
 *         description: "success"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User list"
 *               type: user
 *               example: {
    "status": "success",
    "message": "User saved successfully!",
          "id": ObjectId("5f6d712496a9e6c")
      }
 *       400:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "User data is required"
 *               type: status
 *               example: {
    "status": "error",
    "message": "User data is required."
 }
 *       500:
 *         description: "error"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "Error description"
 *               type: status
 *               example: {
    "status": "error",
    "message":  "{{Error description}}."
 }
 */
router.post('/', UserController.post);

module.exports = router;