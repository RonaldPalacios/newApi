import { Schema, model } from "mongoose";


let Users = new Schema({
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
        type: String,
        required: true,
        trim: true,
    },
    usuario:{
        type: String,
        required: true,
        trim: true
    }
})



export default model('Users', Users)