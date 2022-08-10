import { Schema, model } from "mongoose";

let users = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: Number,
        required: true,
        trim: true,
    },
})

export default model('Users', users)