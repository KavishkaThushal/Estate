import express from "express"
import { createrecidency } from "../Controller/recidencyController.js"

const router=express.Router()

router.post('/createrecidency',createrecidency)

export {router as residencyRouter}