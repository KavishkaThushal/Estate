import React from 'react'
import './Login.css'
import Img from '../../../dist/log.jpg'
function Login() {
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
                    <input type='text' placeholder=''/>
                    </div>
                    
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Password</label>
                    <input type='password' placeholder=''/>
                    </div>
                    
                    <button className='log-button'>Sign In</button> 
                 </div>
             </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login