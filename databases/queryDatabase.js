require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.QUERY_DB_CONN;
const dbName = process.env.QUERY_DB_NAME;

class QueryDatabase {
  async connect() {
    try {
      const client = new MongoClient(url);
      await client.connect();
      const db = client.db(dbName);
      return db;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
}

module.exports = QueryDatabase;
