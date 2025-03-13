import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';


dotenv.config()
const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))

let db;

connectDB().then((database) => {
    db = database;
    app.listen(process.env.PORT, ()=> {
        console.log(`App listening at http://localhost:${process.env.PORT}`);
    })
})

app.get('/store-picture', async (req, res) => {
    
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
        const data = await response.json();
        console.log('Fetched data:', data); 

        const existingPicture = await db.collection(process.env.COLLECTION_NAME).findOne({ date: data.date });
        if (!existingPicture) {
            await db.collection(process.env.COLLECTION_NAME).insertOne(data);
            console.log('Picture stored:', data.date); 
            res.json({ message: 'Picture stored successfully', data });
        } else {
            console.log('Picture already exists:', existingPicture.date); 
            res.json({ message: 'Picture already stored', data: existingPicture });
        }
    } catch (error) {
        console.error('Error storing/fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/', async (req, res) => {
    try {
        const pictures = await db.collection(process.env.COLLECTION_NAME).find().toArray();
        res.json(pictures)
    } catch (error) {
        console.error('Error retrieving data: ', error);
        res.status(500).json({ error: 'Internal server error' });
        
    }
})


