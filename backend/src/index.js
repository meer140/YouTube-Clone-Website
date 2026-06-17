import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB from "./db/index.js";

connectDB();






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