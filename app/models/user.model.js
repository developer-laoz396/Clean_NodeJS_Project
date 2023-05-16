const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // Propiedades del usuario
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    identificationType: {
      type: String,
      required: true,
      enum: ['CC', 'CE', 'PS'],
    },
    identification: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      match: [/^\d{10}$/, 'El número de teléfono proporcionado no es válido.'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'El correo electrónico proporcionado no es válido.'],
    },
    company: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      default: 'admin',
      enum: ['admin'],
    },
  },
  { collection: "user" }
);

// Constructor de la entidad User
function User(data) {
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.password = data.password;
  this.birthdate = data.birthdate;
  this.image = data.image;
  this.identificationType = data.identificationType;
  this.identification = data.identification;
  this.phone = data.phone;
  this.email = data.email;
  this.company = data.company;
  this.role = data.role;
}

// Método para convertir el objeto User en JSON
User.prototype.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
