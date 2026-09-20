const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

let db;

const connectDB = async () => {
    await client.connect();

    db = client.db(process.env.DB_NAME);

    console.log('MongoDB connected');
};

const getDB = () => {
    if (!db) {
        throw new Error('Database is not connected');
    }

    return db;
};

module.exports = {
    connectDB,
    getDB
};