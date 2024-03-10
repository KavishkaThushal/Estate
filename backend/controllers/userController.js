import asyncHandler from "express-async-handler"
import { prisma } from "../config/prismaConfig.js"


export const createUser=asyncHandler(async(req,res)=>{
    console.log("creating User")
     let {email}=req.body
     const userexist=await prisma.user.findUnique({where:{email:email}})
     if(!userexist){
        const user=await prisma.user.create({data:req.body})
        res.send({
            message:"User registered successfully",
            user:user
        })
     }else{
        res.status(201).send({message:"User already registered"})
     }
})
export const bookVisit=asyncHandler(async(req,res)=>{
   const {email,date}=req.body
   const {id}=req.params
   try {
      const alreadyBooked=await prisma.user.findUnique({
         where:{email},
         select:{bookedVisits:true}
      })
      if(alreadyBooked.bookedVisits.some((visit)=>visit.id===id)){
         res.status(400).json({message:"This residency is already booked by you"})
      }else{
         await prisma.user.update({
            where:{email},
            data:{
               bookedVisits:{push:{id,date}}
            }

         })
         res.send("your visit is booked successfully")
      }
   } catch (error) {
      throw new Error(error.message)
   }
})

export const getAllBookings=asyncHandler(async(req,res)=>{
  const {email}=req.body
  try {
     const bookings=await prisma.user.findUnique({
      where:{email},
      select:{bookedVisits:true}
     })
     res.status(200).send(bookings)
  } catch (error) {
     throw new Error(error.message)
  }
})
export const cancelBooking=asyncHandler(async(req,res)=>{
   const {email}=req.body
   const {id}=req.params
   try {
      const user=await prisma.user.findUnique({
         where:{email},
         select:{bookedVisits:true}
      })
      const index=user.bookedVisits.findIndex((visits)=> visits.id===id)
      if(index===-1){
         res.status(400).json({message:"Booking not found"})
      }else{
         user.bookedVisits.splice(index,1)
         await prisma.user.update({
            where:{email},
            data:{
               bookedVisits:user.bookedVisits
            }
         })
         res.send("Bokking cancelled successfully ")
      }
   } catch (error) {
      throw new Error(error.message)
   }
})
export const toFav=asyncHandler(async(req,res)=>{
   const {email}=req.body
   const {rid}=req.params
   try {
      const user=await prisma.user.findUnique({
         where:{email}
      })
      if(user.favResidenciesiD.includes(rid)){
         const updateUser=await prisma.user.update({
            where:{email},
            data:{
               favResidenciesiD:{
                  set:user.favResidenciesiD.filter((id)=> id !==rid)
               }
            }
         })
         res.send({message:"removed from favourites",user:updateUser})
      }else{
         const updateUser=await prisma.user.update({
            where:{email},
            data:{
               favResidenciesiD:{
                  push:rid
               }
            }
         })
         res.send({message:"udated favourite",user:updateUser})
      }
   } catch (error) {
      throw new Error(error.message)
   }
})

export const getAllFav=asyncHandler(async(req,res)=>{
   const {email}=req.body
   try {
      const favResd=await prisma.user.findUnique({
         where:{email},
         select:{favResidenciesiD:true}
      })
      res.status(200).send(favResd)
   } catch (error) {
      throw new Error(error.message)
   }
})