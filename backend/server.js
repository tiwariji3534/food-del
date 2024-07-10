import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



// app config...

const app = express()
const port = process.env.PORT || 4000

// middleware..
app.use(express.json())    // frontend to backend
app.use(cors())            // backend to frontend

// DB Connection....
connectDB();

// Api endpoints
app.use("/api/food", foodRouter)                    // for upload image on backend
app.use("/images",express.static('uploads'))         // from backend to frontend image coming by using filename
app.use("/api/user",userRouter)                     // for user authentication
app.use("/api/cart",cartRouter)                    // for updation in user cart....
app.use("/api/order",orderRouter)                   // for order the item .....



// request data from server .. delete/ post/ upload.
app.get("/", (req,res)=>{
    res.send("API Working")      //displayed at end point
})  

// run express server...
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})



