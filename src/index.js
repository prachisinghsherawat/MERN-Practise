const express = require('express');
const connect = require('./configs/db')

const app = express()
app.use(express.json())


app.listen(8080 , async() => {

    try {
        await connect()
        console.log('listening port 8080')
    } catch (e) {
        console.log(e.message)
    }
})