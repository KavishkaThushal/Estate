import express from "express"
import dotenv from "dotenv"
//import cookieParser from "cookie-parse"
import cors from "cors"
import mongoose from "mongoose"
import { residencyRouter } from "./Routes/recidency.js"
import { userRouter } from "./Routes/user.js"
dotenv.config()

const app=express()
const port=process.env.PORT || 3000
// app.use(cookieParser())
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.URL).then(()=>{
    console.log('database connected successfully..')
  }).catch((err)=>{
    console.log('database connected unsuccessully',err)
  })
app.use('/api',residencyRouter)
app.use('/api',userRouter)
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})