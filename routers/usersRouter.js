const express = require("express");
const router = express.Router();

const UsersLogic = require("../app/domain/usersLogic");

// Ruta para crear un usuario
router.post("/", async (req, res) => {
  const userData = req.body;
  let result = await new UsersLogic().createUser(userData);
  res.json(result);
});

// Ruta para actualizar un usuario
router.put("/", async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;
  let result = await new UsersLogic().updateUser(userId, userData);
  res.json(result);
});

// Ruta para actualizar un usuario
router.delete("/", async (req, res) => {
  const userId = req.params.userId;
  let result = await new UsersLogic().deleteUser(userId);
  res.json(result);
});

// Ruta para obtener todos los usuarios
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = new UsersLogic().getUser(userId);
  res.json(user);
});

// Ruta para obtener un usuario
router.get("/", async (req, res) => {
  const users = new UsersLogic().getUsers();
  res.json(users);
});

module.exports = router;
