import express from 'express';
import 'dotenv/config';
import connectDb from './utils/connectDb.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import notesRouter from './routes/generate.route.js';
import pdfRouter from './routes/pdf.route.js';
import creditRouter from './routes/credits.route.js';
import { stripeWebhook } from './controllers/credits.controller.js';
import dns from 'dns'
dns.setServers(['1.1.1.1','8.8.8.8'])

const PORT =process.env.PORT || 5000;

const app = express();



app.post(
    "/api/credits/webhook",
    express.raw({type:"application/json"}),
    stripeWebhook
)

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {origin:"https://notegenius-ai-1.onrender.com",
        credentials:true,
        methods:["GET","POST","PUT","DELETE","OPTIONS"]
    }

))

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/notes",notesRouter);
app.use("/api/pdf",pdfRouter);
app.use("/api/credit",creditRouter)



app.get('/',(req,res)=>{
    res.json({message:"ExamNotes AI Backend is running"});
})

app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
    connectDb();
})