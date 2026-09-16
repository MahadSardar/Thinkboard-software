import dns from 'dns';
import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";

dns.setServers(["1.1.1.1", "8.8.8.8"]);


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;



//middleware
app.use(
    cors({
    origin:"https://thinkboard-software.vercel.app",
    credentials:true
})
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter)

// our simple custom middle layer
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
//     next();
// })

app.use("/api/notes",notesRoutes);
app.use("/api/auth",authRoutes)


connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server started on PORT:", PORT);
});
})




