
import Recidency from '../Models/recidencyModel.js'
import User from '../Models/userModel.js'

export const createrecidency=async (req,res)=>{
    try {
        const {title,description,price,address,country,city,facilities,image,userEmail}=req.body
        const newRecidency=new Recidency({title,description,price,address,country,city,facilities,image,userEmail})
         const response=await newRecidency.save()
         
         if(response){
            const respo=await User.findOneAndUpdate({email:userEmail},{
                $push: {
                    ownedrecidencies: {
                        id: response._id,  
                    }
                }
            })
            
            return res.status(201).send({success:true,message:"created successfull."})  
         }
         
         

        
    } catch (error) {
        console.log(error)
        return res.status(401).send({success:false,message:"created unsuccessfull."})  
    }
}

