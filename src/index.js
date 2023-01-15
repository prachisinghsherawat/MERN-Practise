const express = require('express')
const app = express()

app.use(express.json())

const connect = require('./configs/db')

const productController = require('./controllers/product-controller')
app.use('/',productController)

app.listen(8080 , async() => {

    try {
        await connect()
        console.log('listening port on 8080')
    } catch (er) {
        console.log(er.message)
    }
})