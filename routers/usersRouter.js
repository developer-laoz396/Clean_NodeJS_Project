const express = require("express");
const router = express.Router();

const UsersLogic = require("../app/domain/usersLogic");

// Ruta para crear un usuario
router.post("/", (req, res) => {
  const userData = req.body;
  new UserLogic().execute(userData);
  res.sendStatus(201);
});

// Ruta para obtener un usuario

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = new UsersLogic().getUser(userId);
  res.json(user);
});

module.exports = router;
