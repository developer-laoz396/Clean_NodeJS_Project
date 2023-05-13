const express = require("express");
const router = express.Router();

const UsersLogic = require("../app/domain/usersLogic");

// Ruta para crear un usuario
router.post("/", async (req, res) => {
  const userData = req.body;
  await new UsersLogic().createUser(userData);
  res.sendStatus(201);
});


// Ruta para actualizar un usuario
router.put("/", async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;
  await new UsersLogic().updateUser(userId, userData);
  res.sendStatus(201);
});

// Ruta para obtener un usuario
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = new UsersLogic().getUser(userId);
  res.json(user);
});

module.exports = router;
