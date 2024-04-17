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
// export const getProperty=async(id)=>{
//     try {
//         const response=await api.get(`/residency/${id}`,{
//             timeout:10*1000
//         })
//         if(response.status===400||response.status===500){
//             throw response.data
//         }
//         return response.data
//     } catch (error) {
//         toast.error("Something went wrong.")
//     }
// }

export const createUser = async (name,email,image,password,confirmPassword) => {
    try {
      await api.post(
        "/register",
        { name,email,image,password,confirmPassword,},
        
      );
    } catch (error) {
    
      toast.error("Something went wrong, Please try again");
      console.log(error)
     
    }
  };


  export const bookVisit = async (email,id) => {
    try {
      await api.post(
        `/booking/${id}`,
        {
          email,
        },
        
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };