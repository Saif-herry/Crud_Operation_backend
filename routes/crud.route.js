const express = require('express');

const crudModel = require('../models/Crud.model');

const crudRouter = express.Router();

crudRouter.post('/post',async(req,res)=>{
    try{
        let data = await crudModel.create(req.body);
        res.status(200).send(data);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

crudRouter.get('/get',async(req,res)=>{
    try{
        let data = await crudModel.find();
        res.status(200).send(data);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports = crudRouter;
