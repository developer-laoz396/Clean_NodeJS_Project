const db = require('../../databases/connection.database');
const User = require('../models/user.model');

class UserCommand {
  constructor() {
    new db().connect();
  }
  create(body, callback) {
    let user = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      birthdate: body.birthdate,
      image: body.image,
      identificationType: body.identificationType,
      identification: body.identification,
      phone: body.phone,
      email: body.email,
      company: body.company,
      role: body.role
    });
    user.save(callback);
  }
  update(id, body, callback) {
    User.findByIdAndUpdate(id, body, { new: true }, callback);
  }
  delete(id, callback) {
    User.findByIdAndDelete(id, { new: true }, callback);
  }
}

module.exports = UserCommand;
