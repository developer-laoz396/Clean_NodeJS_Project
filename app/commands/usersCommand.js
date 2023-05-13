const { ObjectId } = require('mongodb');
const TransactionDatabase = require("../../databases/transactionDatabase");

class UsersCommand {
  async create(userData) {
    try {
      const db = await new TransactionDatabase().connect();
      const collection = db.collection("users");
      const result = await collection.insertOne(userData);
      return result.insertedId;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }
  async update(id, userData) {
    try {
      const db = await TransactionDatabase().connect();
      const collection = db.collection("users");
      const result = await collection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: userData }
      );
      return result.modifiedCount;
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
}

module.exports = UsersCommand;
