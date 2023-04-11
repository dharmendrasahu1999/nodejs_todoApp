import mongoose from "mongoose"
//ab schema banunga
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        select:false,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})
//ab model banunga ya collection
export const User=new mongoose.model("User",schema)