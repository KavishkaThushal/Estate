import mongoose from 'mongoose'

const newSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
        
    },
    price:{
        type:Number,
        
        
    },
    address:{
        type:String,
        
        
    },
    country:{
        type:String,
        
        
    },
    image:{
        type:String,
        
        
    },
    facilities:[{
        rooms:{
            type:Number,
        },
        bathrooms:{
            type:Number,
        },
        beds:{
            type:Number,
        },
        
        
    }],
    userEmail:{
        type:String
    }
    
   
    
},{timestamps:true})
const Recidency= mongoose.model('Recidency',newSchema)
export default Recidency;