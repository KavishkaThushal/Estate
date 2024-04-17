import express from "express"
import { createUser, login } from "../Controller/userController.js"

const router=express.Router()

router.post('/register',createUser)
router.post('/login',login)
export {router as userRouter}