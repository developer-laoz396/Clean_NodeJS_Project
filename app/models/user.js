class User {
  constructor(data) {
    this.name = data?.name;
    this.email = data?.email;
    this.password = data?.password;
  }

  toString() {
    return `User: ${this.name}, ${this.email}, ${this.password}`;
  }
}

module.exports = User;
