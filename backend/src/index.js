import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
.then(()=>{
    let port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log("Server is listening at port : ", port);
    })
})
.catch((err)=>{
    console.log("MongoDB connection error.")
})






/*const app = express()

(async () =>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.listen(process.env.PORT, () => {
           console.log("App is listening at ",process.env.PORT)
       })
    }catch(error){
      console.error("Error : ", error)
    }
})()*/