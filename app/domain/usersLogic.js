const User = require("../models/user");

const UsersCommand = require("../commands/usersCommand");
const UsersQuery = require("../queries/usersQuery");

class UsersLogic {
  async getUser(userId) {
    // Lógica para obtener un usuario
    const userData = await new UsersQuery().get(userId);
    const user = new User(userData);
    return user;
  }
  async getUsers() {
    // Lógica para obtener un usuario
    const userData = await new UsersQuery().getAll();
    const user = new User(userData);
    return user;
  }
  async createUser(userData) {
    // Lógica para crear un usuario
    const user = new User(userData);
    return await new UsersCommand().create(user);
  }
  async updateUser(userData) {
    // Lógica para actualizar un usuario
    const user = new User(userData);
    return await new UsersCommand().update(user.id, user);
  }
  async deleteUser(id) {
    // Lógica para actualizar un usuario
    const user = new User(userData);
    return await new UsersCommand().delete(id);
  }
}

module.exports = UsersLogic;
