import React, { useState } from 'react'
import './Login.css'
import Img from '../../../dist/log.jpg'
import { useMutation } from 'react-query'
import { login } from '../../utils/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const { mutate: loginUser, isLoading: loading } = useMutation({
    mutationFn: () => login(email,password),
    onSuccess: () => {
      toast.success("Login successfully", { position: "bottom-right" });
     navigate(-1)
    },
  });


  return (
    <div className='Log-wrapper'>
        <div className='log-container'>
            <div className='left-log'>
            <img src={Img}/>
            </div>
            <div className='right-log'>
            <div className='logIn-form'>
                <div className='title-head-form'>
                Welcome Back <span>Enter your email and password to access your account</span>
                </div>
                
                 <div className='inut-fields'>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Email</label>
                    <input type='text' placeholder=''onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Password</label>
                    <input type='password' placeholder=''  onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    
                    <button className='log-button' onClick={loginUser}>Sign In</button> 
                 </div>
             </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login