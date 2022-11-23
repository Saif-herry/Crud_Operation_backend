const express = require('express');
const cors = require('cors');
const connection  = require('./config');
const crudRouter = require('./routes/crud.route');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/crud',crudRouter);

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
        await connection
        console.log('connected to db');

    }
    catch(err){
        console.log('db',err);
    }
    console.log(`Listening on ${PORT}`);
})