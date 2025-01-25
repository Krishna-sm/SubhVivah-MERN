const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const schema = new mongoose.Schema({
    name:{
            type:String,
            required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        lower:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    },
    phoneNumber:{
        type:String,
        // required:[true,"Phone Number is required"],
        // unique:true
        default:""
    },
    type:{
        type:String,
        default:"user",
        enum:["user","admin","vendor"]
    }
})


// encrypt password
schema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next()
})



const model = mongoose.model("user",schema);
module.exports = model;
