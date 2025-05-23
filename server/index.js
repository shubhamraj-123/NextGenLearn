import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from "cors";
import connectDB from './database/db.js';
import userRoute from "./routes/user.route.js"
import courseRoute from "./routes/course.route.js"
import mediaRoute from "./routes/media.route.js"
import purchaseRoute from "./routes/purchaseCourse.route.js"
import courseProgressRoute from "./routes/courseProgress.route.js"
import contactRoute from "./routes/contact.route.js";

dotenv.config({});

// call database connection here
connectDB();

const app=express();

const PORT=process.env.PORT || 3000;


// default middleware
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors(
   {
    // origin:"http://localhost:5173",
    // origin:"https://next-gen-learn-jtda.vercel.app",
    origin: ["http://localhost:5173", "https://next-gen-learn-jtda.vercel.app"],
    credentials:true
}
))

// apis 
// create ho rha like endpoint user
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase",purchaseRoute);
app.use("/api/v1/progress",courseProgressRoute);
app.use("/api/v1/contact", contactRoute);

// "http://localhost:8080/home/api/v1/user/register" aise jata h api banne ke bad

// app.get("/home", (_,res) => {
//     res.status(200).json({
//         success:true,
//         message:"Hello I am coming from backend"
//     })
// }) 

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})