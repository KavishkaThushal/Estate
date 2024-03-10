import express from "express"
import {  bookVisit, cancelBooking, createUser, getAllBookings, getAllFav, toFav } from "../controllers/userController.js"

const router=express.Router()

router.post("/register",createUser)
router.post("/bookvisit/:id",bookVisit)
router.post("/allbookings",getAllBookings)
router.post("/removebookings/:id",cancelBooking)
router.post("/tofav/:rid",toFav)
router.post("/allfav",getAllFav)
export {router as userRoute}