import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";




const connectDb=async()=>{
    try {
       const connectinInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n MPNGODB CONNECTED !! DB HOST :${connectinInstance.connection.host} `);
       
    } catch (error) {
        console.log("mongoDb connection error");
        process.exit(1)
        
    }
}

export default connectDb