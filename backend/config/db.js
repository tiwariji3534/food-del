import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Chandan-food:7459923419@cluster0.ryb9b2w.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

// In line third we use export function bcz...
// we use export bcz we can access this function in server.js folder