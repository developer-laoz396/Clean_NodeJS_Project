const express = require('express');
const router = express.Router();

const UserLogic = require('../app/domain/usersLogic');

// Ruta para crear un usuario
router.post('/', (req, res) => {
  const userData = req.body;
  UserLogic.execute(userData);
  res.sendStatus(201);
});

// Ruta para obtener un usuario
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = UserLogic.execute(userId);
  res.json(user);
});

module.exports = router;
