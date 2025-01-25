const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    // address,zipcode,f......
},
{
    timestamps:true
})

const model =mongoose.model("profile",schema)

module.exports = model;