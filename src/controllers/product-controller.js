
const express = require('express')
const router = express.Router()

const Product = require('../models/product-model')


router.post('', async(req,res) => {

    try {
        let products = Product.create(req.body)
        return res.status(200).send(products)

    } catch (er) {
        return res.status(400).send(er.message)
    }
})

router.get('', async(req,res) => {

    try {
        let products = Product.find().lean().exec()
        return res.status(200).send(products)

    } catch (er) {
        return res.status(400).send(er.message)
    }
})

router.patch('/:id',async(req,res)=>{

    try {
        let products = Product.findByIdAndUpdate(req.params.id , req.body , {new:true}).lean().exec()
        return res.status(200).send(products)

    } catch (error) {
        return res.status(400).send(er.message)
    }
})

router.patch('/:id',async(req,res)=>{

    try {
        let products = Product.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(products)

    } catch (error) {
        return res.status(400).send(er.message)
    }
})

module.exports = router;
