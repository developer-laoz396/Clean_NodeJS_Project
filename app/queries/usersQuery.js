const { ObjectId } = require('mongodb');
const QueryDatabase = require('../../databases/queryDatabase');

class UsersQuery {
  async get(userId) {
    try {
      const db = await new QueryDatabase().connect();
      const collection = db.collection('users');
      const user = await collection.findOne({ _id: new ObjectId(userId) });
      return user;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  }
}

module.exports = UsersQuery;
