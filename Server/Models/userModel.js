import mongoose from 'mongoose'

const newSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        unique:true,
        required:true,
        
    },
    image:{
        type:String,
        
        
    },
    bookvisit:[{
          recidencyId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recidency',
            
          },
          date:{
            type:String
          },
          title:{
            type:String
          },
          price:{
            type:Number
          },
          image:{
            type:String
          }

    }],
    ownedrecidencies:[{
          id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recidency',
          },
          
    }],
    password:{
        type:String,
        required:true,
        
    },
   
    
},{timestamps:true})
const User= mongoose.model('User',newSchema)
export default User;