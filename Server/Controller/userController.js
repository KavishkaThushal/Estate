import bcrypt from "bcrypt"
import User from "../Models/userModel.js"
import jwt from "jsonwebtoken"

export const createUser=async (req,res)=>{
    try {
        const {name,email,password,confirmPassword}=req.body
        console.log(password)
        if (password !== confirmPassword) {
            return res.send({success:false,message:"Passwords do not match."})
          }else{
            const hashedPassword=bcrypt.hashSync(password,10)
            const newUser=new User({name,email,password:hashedPassword})
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

export const login=async (req,res)=>{
  try {
    const {email,password}=req.body
    const validUser=await User.findOne({email})
    if(!validUser)return res.send({success:false,message:"User not found."})

    const validPassword=bcrypt.compareSync(password,validUser.password)
    if(!validPassword)return res.send({success:false,message:"Incorrect Password."})
    if(validUser && validPassword){
      const token = jwt.sign({ userId: validUser._id}, process.env.SECRETKEY);
      return res.cookie('access_token',token,{httpOnly:true}).status(200).send({token,data:validUser,success:true,message:"signin successfull."})
    }
    
    
  } catch (error) {
    return res.send({success:false,message:"Server Error."})
  }
}

export const userDetails=async(req,res)=>{
  try {
    const {email}=req.body
    const validUser=await User.findOne({email})
    if(!validUser){
      return res.send({success:false,message:"User not found."})
  }else{
    return res.send({success:true,message:"User found.",data:validUser.name})
  }
  } catch (error) {
    return res.send({success:false,message:"Server Error."})
  }
}