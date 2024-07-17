import mongoose from "mongoose";

const usershemma = new mongoose.Schema({
    name:{
        type:String,

    },
     lastname:{
        type:String,

    },
    Email:{
        type:String,
        required:[true , 'please add Email']
    }
}, {
    timestamps:true
})
const user = mongoose.models.User || mongoose.model('User', usershemma);

export default user


















