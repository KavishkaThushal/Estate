import bcrypt from "bcrypt"
import User from "../Models/userModel.js"
import jwt from "jsonwebtoken"

export const createUser=async (req,res)=>{
    try {
        const {name,email,image,password,confirmPassword,}=req.body
        console.log(password)
        if (password !== confirmPassword) {
            return res.send({success:false,message:"Passwords do not match."})
          }else{
            const hashedPassword=bcrypt.hashSync(password,10)
            const newUser=new User({name,email,image,password:hashedPassword})
            const response=await newUser.save()
            if(response){
              const token = jwt.sign({ userId: response._id}, process.env.SECRETKEY);
              return res.cookie('access_token',token,{httpOnly:true}).status(200).send({token,success:true,message:"signup successfull."})
            }
           
           
          }
    } catch (error) {
        if(error.code===11000){
            return res.send({success:false,message:"Email is already in use."})
          }else{
            return res.send({success:false,message:"Server Error."})
          }
       
    }
}