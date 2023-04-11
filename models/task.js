import mongoose from "mongoose"
//ab schema banunga
const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        deafult:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        //ref User dala he kyunki wo hamare collection ka nam he yaad se
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})
//ab model banunga ya collection
export const Task=new mongoose.model("Task",schema)