import mongoose, { Error } from "mongoose"
import { configDotenv } from 'dotenv';
configDotenv();
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB connected : ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`Error: ${Error}`)
        process.exit(1)
    }
}