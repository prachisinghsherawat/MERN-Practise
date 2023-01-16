
const express = require('express')

const connect = require('./configs/db')

const cors = require('cors')
app.use(cors())

const app = express()
app.use(express.json())

const userController = require('./controllers/user-controller')
app.use('/users',userController)


app.listen(8080 , async()=>{

    try {
        await connect();
        console.log('listening port 8080')

    } catch (er) {
        console.log(er.message)
    }
})
