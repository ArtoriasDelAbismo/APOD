import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function testDBConnection() {
    try {
        await client.connect();
        console.log('Connected to MongoDB!');
        await client.db().command({ ping: 1 });
        console.log('Ping successful');
    } catch (err) {
        console.error('Error connecting to DB:', err);
    } finally {
        await client.close();
    }
}

testDBConnection();
