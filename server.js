const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const app = express();
const stockRouter = require("./router/router")

mongoose.connect(
    process.env.DB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) =>{
        if(err){
            console.log("Database not connected")
        }else{
            console.log("Database connected")
        }
    } 
)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/stock",stockRouter)

app.listen(8000,()=>{
    console.log("server connected");
})