const database = require('../../databases/transactionDatabase');

class UsersCommand {
  async create(userData) {
    try {
      const db = await database.connect();
      const collection = db.collection('users');
      const result = await collection.insertOne(userData);
      console.log('User created:', result.insertedId);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }
}

module.exports = UsersCommand;
