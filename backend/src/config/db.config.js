const mongoose = require("mongoose")

exports.ConnectDB= async()=>{
    try {
       await mongoose.connect("mongodb+srv://wedToMe:RBoSDXhF7kebuq0e@mernstackkrishna.15kdm6r.mongodb.net/wedToMe")
        console.log(`the db is connect with ${mongoose.connection.host}`);
        
    } catch (error) {
        mongoose.disconnect()
        process.exit(1)
    }
}