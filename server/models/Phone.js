const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        manufacturer: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true 
        },
        color: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imageFileName: {
            type: String,
        },
        screen:{
            type: String,
            required: true
        },
        processor: {
            type: String,
            required: true
        },
        ram: {
            type: Number,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        imageRaw: {
            data: Buffer,
            contentType: String
        }
    }
);

module.exports = mongoose.model("Phone", phoneSchema)