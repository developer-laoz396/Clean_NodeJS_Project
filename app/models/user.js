class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    toString() {
      return `User: ${this.id}, ${this.name}, ${this.email}`;
    }
  }

  module.exports = User;
