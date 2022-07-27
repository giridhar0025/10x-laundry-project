const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        maxlength:10,
        minlength:10
        
    },
    password:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
        
    },
    district:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        
    },
    pincode:{
        type:Number,
        required:true,
        
    },
})
const userModel=mongoose.model("users",userSchema)
module.exports=userModel