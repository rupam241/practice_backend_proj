import mongoose from "mongoose";
import {DB_NAME} from './constants.js'
import express from 'express';
import dotenv from "dotenv"
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config();


connectDb()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{

        console.log(`SRVER IS RUNNING ON THE ${process.env.PORT}`)

    })
})
.catch((err)=>{
    console.log("mongodb connection failed,",err)
})


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
          
//         });
//         app.on("error", (error) => {
//             console.log("ERR: ", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`APP IS LISTENING ON PORT ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.log(error);
//     }
// })();
