import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const client = new MongoClient(process.env.MONGO_URI)

export default async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to db');
        return client.db()
    } catch (error) {
        console.error('Error connecting to DB:', error);
        process.exit(1);
    }
}