import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // โหลดตัวแปรจากไฟล์ .env

export default async function connectMongoDB() {
    try {
        const mongoURI = process.env.MONGO_DB_URI;
        if (!mongoURI) {
            throw new Error("MONGO_DB_URI is not defined in .env");
        }

        // เชื่อมต่อ MongoDB โดยไม่ใช้ตัวเลือกที่ถูกยกเลิก
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}
