import React, { useContext, useState } from 'react'
import './Register.css'
import Img from '../../../dist/log.jpg'
import { RiUpload2Line } from 'react-icons/ri';
import { useMutation } from 'react-query';
import { createUser } from '../../utils/api';
import { toast } from 'react-toastify';
import UserDetailContext from '../../Context/Context';
function Register() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')

  const {setUserDetails,
  } = useContext(UserDetailContext);

    
  const { mutate: register, isLoading: loading } = useMutation({
    mutationFn: () => createUser(name,email,password,confirmPassword),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        email: email,
      }));
       
      toast.success("Register successfully", { position: "bottom-right" });
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
                Welcome  <span>Discover premier residences designed for luxury living</span>
                </div>
                
                 <div className='inut-fields'>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Name</label>
                    <input type='text' placeholder='' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Email</label>
                    <input type='text' placeholder='' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Password</label>
                    <input type='password' placeholder='' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Confirm Password</label>
                    <input type='text' placeholder='' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </div>
                    <button className='upload-btn'>
                    <div className='upload-img'>
                    <RiUpload2Line size={20} />
                    <span>Upload your profile image</span>
                    </div>
                    </button>
                    <button className='register-button' onClick={register}>Sign Up</button> 
                 </div>
             </div>
            </div>
            
        </div>
    </div>
  )
}

export default Register