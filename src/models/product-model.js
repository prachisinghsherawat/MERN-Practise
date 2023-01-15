
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(

    {
        image : {type: String , required: true},
        name : {type: String , required:true },
        price : {type: Number , required:true },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Products',productSchema)