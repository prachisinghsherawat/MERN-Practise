
const express = require('express')
const router = express.Router()

const Product = require('../models/product-model')

router.post('/products' , async(req,res) => {

    try {
        let product = Product.create(req.body);
        return res.status(200).send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.get('/products' , async(req,res) => {

    try {
        let product = Product.find().lean().exec();
        return res.status(200).send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.patch('/products/:id' , async(req,res) => {

    try {
        let product = Product.findByIdAndUpdate(req.params.id ,req.body ,{new : true}).lean().exec();
        return res.status(200).send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.delete('/products/:id' , async(req,res) => {

    try {
        let product = Product.findByIdAndDelete(req.params.id).lean().exec();;
        return res.status(200).send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})

module.exports = router;