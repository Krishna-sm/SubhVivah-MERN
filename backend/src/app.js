const express = require("express")
const { HandlingNotFound } = require("./middlewares/Handling404.middleware")
const ApiError = require("./utils/ApiError")
const app = express()
const morgan =require("morgan")
const cors = require("cors")
// middlewaress
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan("dev"))

//routes
app.use("/api/v1",require("./routes"))


// 404 page
app.use("*",()=>{
    throw new ApiError(404,"Page not found")
})

app.use(HandlingNotFound)

//server
module.exports = app