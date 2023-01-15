const express = require('express');

const connect = require('./configs/db')

const productController = require('./controllers/product-controller')

const app = express()
app.use(express.json())

var cors = require('cors');
app.use(cors());

app.use('/products', productController)

app.listen(8080 , async() => {

    try {
        await connect()
        console.log('listening port 8080')
    } catch (e) {
        console.log(e.message)
    }
})