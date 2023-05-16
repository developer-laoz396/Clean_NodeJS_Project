const db = require('../../databases/connection.database');
const User = require('../models/user.model');

class UsersQuery {
  constructor() {
    new db().connect();
  }
  getAll(callback) {
    User.find(callback);
  }
  findById(id, callback) {
    User.findById(id, callback).limit(1);
  }
  findOne(body, callback) {
    let email = body.username;
    let password = body.password;
    User.findOne({ email, password }, callback);
  }
}

module.exports = UsersQuery;
