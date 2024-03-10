import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { userRoute } from "./routes/userRoute.js"
import { residencyRoute } from "./routes/residencyRoute.js"
dotenv.config()

const app=express()
const port=process.env.PORT || 3000
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use('/api/user',userRoute)
app.use('/api/residency',residencyRoute)
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})