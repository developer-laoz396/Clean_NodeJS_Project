require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = `mongodb://${process.env.TRANSACTION_DB_HOST}:${process.env.TRANSACTION_DB_PORT}`;
const dbName = process.env.TRANSACTION_DB_NAME;

class TransactionDatabase {
  async connect() {
    try {
      const client = new MongoClient(url);
      await client.connect();
      const db = client.db(dbName);
      console.log('Connected to MongoDB');
      return db;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
}

module.exports = TransactionDatabase;
