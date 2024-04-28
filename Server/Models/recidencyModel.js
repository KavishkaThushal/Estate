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
            default:0
        },
        bathrooms:{
            type:Number,
            default:0
        },
        parkings:{
            type:Number,
            default:0
        },
        
        
    }],
    userEmail:{
        type:String
    }
    
   
    
},{timestamps:true})
const Recidency= mongoose.model('Recidency',newSchema)
export default Recidency;