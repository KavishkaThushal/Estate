import express from "express"
import {  bookVisit, cancelBooking, createUser, getAllBookings, getAllFav, toFav } from "../controllers/userController.js"
import jwtCheck from "../config/auth0Config.js"

const router=express.Router()

router.post("/register",createUser)
router.post("/bookvisit/:id",jwtCheck,bookVisit)
router.post("/allbookings",getAllBookings)
router.post("/removebookings/:id",jwtCheck,cancelBooking)

export {router as userRoute}