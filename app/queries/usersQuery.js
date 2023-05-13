const QueryDatabase = require('../../databases/queryDatabase');

class UsersQuery {
  async execute(userId) {
    try {
      const db = await new QueryDatabase().connect();
      const collection = db.collection('users');
      const user = await collection.findOne({ _id: userId });
      console.log('User found:', user);
      return user;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  }
}

module.exports = UsersQuery;
