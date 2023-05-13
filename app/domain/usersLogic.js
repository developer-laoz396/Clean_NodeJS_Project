const User = require('../models/user');

const UserCommand = require('../commands/usersCommand');
const UserQuery = require('../queries/usersQuery');

const userCommand = new UserCommand();
const userQuery = new UserQuery();

class UsersLogic {
  createUser(userData) {
    // Lógica para crear un usuario
    const user = new User(userData.id, userData.name, userData.email);
    userCommand.create(user);
  }

  getUser(userId) {
    // Lógica para obtener un usuario
    const userData = userQuery.get(userId);
    const user = new User(userData.id, userData.name, userData.email);
    return user;
  }
}

module.exports = UsersLogic;
