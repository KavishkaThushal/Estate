import axios from 'axios'
import dayjs from 'dayjs'

import {toast} from 'react-toastify'

export const api=axios.create({
    baseURL:"http://localhost:7000/api",
})

export const getAllProperties=async ()=>{
    try {
        const response=await api.get("/getall",{
            timeout:10*1000
        })
        if(response.status===400||response.status===500){
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("Something went wrong.")
    }
}


export const createUser = async (name,email,password,confirmPassword) => {
    try {
     const response= await api.post(
        "/register",
        {name,email,password,confirmPassword},
        
      );
      const user = {
        token: response.data.token,
        email: email,
        name:name
      };
      const userData=JSON.stringify(user)
        localStorage.setItem('userData',userData)
       
    
      
    } catch (error) {
    
      toast.error("Something went wrong, Please try again");
      console.log(error)
     
    }
  };

  export const login=async(email,password)=>{

    try {
      const response= await api.post(
        "/login",
        {email,password},
        
      );
      if(response.data.success===true){
        
        const user = {
          token: response.data.token,
          email: email,
          name:response.data.data.name
        };
        const userData=JSON.stringify(user)
          localStorage.setItem('userData',userData)
      }
      
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      console.log(error)
    }
  }


  export const bookVisit = async (email,id,date) => {
    try {
      await api.post(
        `/booking/${id}`,
        {
          email,
          date: dayjs(date).format("DD/MM/YYYY")
        },
        
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };

  export const removeBook = async (email,id) => {
    try {
      await api.post(
        `/removebooking/${id}`,
        {
          email,
        },
        
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };

  export const getpro=async(id)=>{
    try {
      const response=await api.post("/getProperty",{id})
      
      return response.data
      
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      console.log(error)
      throw error;
    }
  }

  export const getAllBookings=async(email)=>{
    try {
      const response=await api.post("/getallbookings",{email})
      
      return response.data
      
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      console.log(error)
      throw error;
    }
  }
  
  export const getUserDetails=async(email)=>{
    try {
      const response=await api.post("/userdetails",{email})
      
      return response.data
      
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      console.log(error)
      throw error;
    }
  }

  export const createrecidencies=async(formData)=>{
      
  
    try {
      const response = await api.post('/createrecidency', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      return response.data
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      console.log(error)
      throw error;
    }

  }

  export const imgDisplay=async(title)=>{
    try {
      
      const response=await api.post("/getrecidencyimg",{title})
      console.log(response.data)
      return response.data
     
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      console.log(error)
      throw error;
    }
  }