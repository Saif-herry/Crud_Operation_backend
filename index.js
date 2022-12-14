const express= require('express');
const cors= require('cors');
require('dotenv').config();

const app= express();
app.use(express.json());
app.use(cors());

const connection= require('./config.js');
const crudRouter = require('./routes/Crud.routes.js');



app.get('/',(req,res)=>{
    res.send('WELCOME TO CRUD OPERATION WORLD');
})

app.use('/crud',crudRouter);




const PORT= process.env.PORT|| 8080;
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log('db connected');
    }catch(er){
        console.log('chk config',er);
    }
    console.log(`listening on port ${PORT}`)
})


/*
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const connection= require("./config")

app.get('/',(req,res)=>{
    res.send("Welcome from Crud Operation")
})

const PORT= process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
         await connection
         console.log('db connected')
    }
    catch(err){
         console.log('check config',err)
    }
    console.log(`listening on port ${PORT}`)
})
md mayan--->slack
*/