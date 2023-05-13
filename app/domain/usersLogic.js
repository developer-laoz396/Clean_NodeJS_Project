const User = require("../models/user");

const UsersCommand = require("../commands/usersCommand");
const UsersQuery = require("../queries/usersQuery");

class UsersLogic {
  createUser(userData) {
    // Lógica para crear un usuario
    const user = new User(userData);
    new UsersCommand().create(user);
  }

  getUser(userId) {
    // Lógica para obtener un usuario
    const userData = new UsersQuery().execute(userId);
    const user = new User(userData);
    return user;
  }
}

module.exports = UsersLogic;
