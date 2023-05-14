const { ObjectId } = require('mongodb');
const TransactionDatabase = require("../../databases/transactionDatabase");

class UsersCommand {
  async create(userData) {
    try {
      const db = await new TransactionDatabase().connect();
      const collection = db.collection("users");

      const result = await collection.insertOne(userData);
      return result;
    } catch (error) {
      console.error("Error updating user:", error);
      return { success: true, code: 500, error: 'Error getting user:', error };
    }
  }
  async update(id, userData) {
    try {
      const db = await new TransactionDatabase().connect();
      const collection = db.collection("users");

      const result = await collection.replaceOne({ _id: new ObjectId(id) }, userData);
      return result;
    } catch (error) {
      console.error("Error updating user:", error);
      return { success: true, code: 500, error: 'Error getting user:', error };
    }
  }
  async delete(id) {
    try {
      const db = await new TransactionDatabase().connect();
      const collection = db.collection("users");

      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      return result;
    } catch (error) {
      console.error("Error updating user:", error);
      return { success: true, code: 500, error: 'Error getting user:', error };
    }
  }
}

module.exports = UsersCommand;
