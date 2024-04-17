import express from "express"
import dotenv from "dotenv"
//import cookieParser from "cookie-parse"
import { fileURLToPath } from 'url';
import cors from "cors"
import mongoose from "mongoose"
import { residencyRouter } from "./Routes/recidency.js"
import { userRouter } from "./Routes/user.js"
import path from "path"
import { dirname } from 'path';
dotenv.config()

const app=express()
const port=process.env.PORT || 3000
// app.use(cookieParser())
app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose.connect(process.env.URL).then(()=>{
    console.log('database connected successfully..')
  }).catch((err)=>{
    console.log('database connected unsuccessully',err)
  })

const uploadsDirectory = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsDirectory));

app.use('/api',residencyRouter)
app.use('/api',userRouter)
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})