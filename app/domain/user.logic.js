const User = require("../models/user.model");
const UserCommand = require("../commands/user.command");

class UserLogic {
  getUser(userId, callback) {
    // Lógica para obtener un usuario
    new UserCommand().findById(userId, callback).limit(1);
  }
  getUserLogin(login, callback) {
    let email = login.username;
    let password = login.password;
    new UserCommand().findOne({ email, password }, callback);
  }
  getUsers(callback) {
    // Lógica para obtener un usuario
    new UserCommand().find(callback);
  }
  createUser(userData, callback) {
    // Lógica para crear un usuario
    let user = new User(userData);
    new UserCommand().create(user, callback);
  }
  updateUser(userData, callback) {
    // Lógica para actualizar un usuario
    const user = new User(userData);
    new UserCommand().update(user.id, user, { new: true },  callback);
  }
  deleteUser(id, callback) {
    // Lógica para actualizar un usuario
    return new UserCommand().delete(id, callback);
  }
}

module.exports = UserLogic;
