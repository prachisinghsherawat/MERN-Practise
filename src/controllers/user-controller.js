
const express = require('express')
const router = express.Router()

const Users = require('../models/user-model')

router.post("/", async(req,res)=>{
    try {
        let users = await Users.create(req.body)
        return res.status(200).send(users)
        
    } catch (er) {
        return res.status(400).send(er.message)
    }
})

router.get("/", async(req,res)=>{
    try {
        let users = await Users.find().lean().exec()
        return res.status(200).send(users)
        
    } catch (er) {
        return res.status(400).send(er.message)
    }
})

router.patch("/:id", async(req,res)=>{
    try {
        let users = await Users.findByIdAndUpdate(req.params.id , req.body,{new:true}).lean().exec()
        return res.status(200).send(users)
        
    } catch (er) {
        return res.status(400).send(er.message)
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        let users = await Users.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(users)
        
    } catch (er) {
        return res.status(400).send(er.message)
    }
})

module.exports = router;
