
import Recidency from '../Models/recidencyModel.js'
import User from '../Models/userModel.js'

export const createrecidency=async (req,res)=>{

    try {
        const {title,description,price,address,country,city,bathrooms,parkings,rooms,userEmail}=req.body
       
        const newRecidency=new Recidency({title,description,price,address,country,city,facilities:[{
            rooms: parseInt(rooms),
            bathrooms: parseInt(bathrooms),
            parkings: parseInt(parkings), 
        }],image:req.file.originalname,userEmail})
         const response=await newRecidency.save()
         
         if(response){
            const respo=await User.findOneAndUpdate({email:userEmail},{
                $push: {
                    ownedrecidencies: {
                        id: response._id,  
                    }
                }
            })
            
            return res.status(201).send({success:true,message:"created successfull.",imageName: req.file.originalname,imagePath:req.file.path})  
         }
         
         

        
    } catch (error) {
        console.log(error)
        return res.status(401).send({success:false,message:"created unsuccessfull."})  
    }
}

export const booking=async (req,res)=>{
    const {id,email,date}=req.body
     
     
    try {
        

        const response=await User.findOneAndUpdate({email},{
            $push: {
                bookvisit: {
                    recidencyId:id,
                    date:date,  
                }
            }
        })
        if(response) return res.status(201).send({success:true,message:"Booking successfull."})  
    } catch (error) {
        return res.send({success:false,message:"Server Error."})
    }
}

export const removeBooking=async (req,res)=>{
    try {
        const {email}=req.body
        const {id}=req.params
        const response=await User.findOneAndUpdate({email},{
            $pull: {
                bookvisit: {
                    recidencyId:id,  
                }
            }
        })
        if(response) return res.status(201).send({success:true,message:"Booking remove successfull."})  
    } catch (error) {
        return res.send({success:false,message:"Server Error."})
    }
}

export const getAll=async (req,res)=>{
    try {
        const response=await Recidency.find()
        if(response)return res.status(201).send({success:true,message:"successfull.",response}) 
    } catch (error) {
        return res.status(401).send({success:false,message:"Server error."})   
    }
}
export const getAllOwnRecidencies=async (req,res)=>{
    try {
        const {email}=req.body
        const response=await Recidency.find({userEmail:email})
        if(response)return res.status(201).send({success:true,message:"successfull.",response}) 
    } catch (error) {
        return res.status(401).send({success:false,message:"Server error."})   
    }
}

export const getAllBooking=async (req,res)=>{
    try {
        const {email}=req.body
        const response=await User.findOne({email})
        
        if(response)return res.status(201).send({success:true,message:"successfull.",bookings:response.bookvisit}) 
    } catch (error) {
        return res.status(401).send({success:false,message:"Server error."})   
    }
}
export const getProperty=async(req,res)=>{
    try {
        const {id}=req.body
        const response=await Recidency.findOne({_id:id})
        if(response)return res.status(201).send({success:true,message:"successfull.",response}) 

    } catch (error) {
        return res.status(401).send({success:false,message:"Server error."})   
    }
}
export const getImg=async(req,res)=>{
    try {
        const {title}=req.body
        const response=await Recidency.findOne({title})
        if(response)return res.status(201).send({success:true,message:"successfull.",response}) 

    } catch (error) {
        return res.status(401).send({success:false,message:"Server error."})   
    }
}

