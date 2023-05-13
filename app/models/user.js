class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }

  toString() {
    return `User: ${this.id}, ${this.name}, ${this.email}`;
  }
}

module.exports = User;
