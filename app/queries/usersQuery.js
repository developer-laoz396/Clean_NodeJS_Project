const { ObjectId } = require('mongodb');
const QueryDatabase = require('../../databases/queryDatabase');

class UsersQuery {
  async get(userId) {
    try {
      const db = await new QueryDatabase().connect();
      const collection = db.collection('users');
      
      const user = await collection.findOne({ _id: userId });
      if (user) {
        return user;
      } else {
        return { success: true, code : 404, error: 'User not found' }
      }
    } catch (error) {
      console.error('Error getting user:', error);
      return { success: true, code : 404, error: 'Error getting user:', error };
    }
  }
  async getAll() {
    try {
      const db = await new QueryDatabase().connect();
      const collection = db.collection('users');

      const users = await collection.find({});
      if (users) {
        return users;
      } else {
        return { success: true, code : 404, error: 'User not found' }
      }
    } catch (error) {
      console.error('Error getting user:', error);
      return { success: true, code : 500, error: 'Error getting user:', error };
    }
  }
}

module.exports = UsersQuery;
