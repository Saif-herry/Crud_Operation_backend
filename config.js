const mongoose= require('mongoose');
require('dotenv').config();


const connection= mongoose.connect(process.env.MONGO_URL)


module.exports=connection;

/*
const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect(process.env.PORT)

module.exports = connection

//.env
PORT=8080
MONGO_URL = ''

//index.js
const express = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const connection = require("./config")

app.get('/',(req,res)=>{
    res.send("Welcome from crud Operation")
})

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
     console.log('check config',err)      
    }
    console.log(`listening on port ${PORT}`)
})

//models

const mongoose = require('mongoose')

const CrudSchema = new mongoose.Schema({
    "name":"String",
    "age":Number,
    "City":"String"
})

const CrudModel = mongoose.model('crud1',CrudSchema)

module.exports = CrudModel

//routes

const express = require('mongoose')

const CrudModel = require('./models/Crud.model')

const CrudRouter = express.Router()

CrudRouter.get('/',async(req,res)=>{
    try{
         const user = await CrudModel.find()
         res.send(user)
    }
    catch(err){
        console.log({message:err.message})

    }
})

CrudRouter.post('/post',async(req,res)=>{
    const {name,age,city} = req.body;
    try{
         const user = await CrudModel.create({name,age,city})
         user.save();
         res.status(200).send(user)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})


CrudRouter.delete('delete/:id',async(req,res)=>{
    const userId = req.params.id
    try{
        const user = await CrudModel.findByIdAndDelete(_id:userId)
        res.status(200).send(user)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

CrudRouter.update('edit/:id',async(req,res)=>{
    try{
        const user = CrudModel.finfByIdAndUpdate(req.params.id,req.body)
        user.save()
        res.status(200).send(user)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

module.exports = CrudRouter


*/