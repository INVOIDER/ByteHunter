const express = require('express')
const {MongoClient} = require('mongodb')
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express()
const dbClient = new MongoClient(process.env.DB_URL);


const startDB = async () =>{
    try{
        await dbClient.connect()
        const db = dbClient.db("maindb")
        await db.command({ ping: 1 }).then(res => console.log("DB status: ",res));
    } catch (e){
        console.log(e)
    }
}

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`)
    startDB();
});