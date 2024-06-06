import React from 'react'
import './Header.css'
import companyLogo from "../../../dist/logo.png"


import { Link, NavLink, useNavigate } from 'react-router-dom'

import ProfileMenu from '../ProfileMenu/ProfileMenu'

const Header = () => {
 
  
     const userData=JSON.parse(localStorage.getItem('userData'))
     


    const navigate = useNavigate()
  
const renderheader=()=>{
   if(userData?.token){
    return(
      <ProfileMenu name={userData?.name}/>
    )
   }else{
    return(
      <>
       <NavLink to='/register'>Regsiter</NavLink> 
       <button className='button' onClick={()=>(navigate('/login'))}>
            Login
            </button>
      </>
    )
   }
}

  return (
    <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">

           <Link to='/'><img className="h-logo" src={companyLogo } alt="logo"  /> </Link>
           
      

           <div className="flexCenter h-menu show" >
           
            <NavLink to='/properties'>Properties</NavLink> 
            <NavLink to='/contact'>Contact us</NavLink> 
            
            {renderheader()}
            
           
            
           </div>
          

           

        </div>
    </section>
  )
}

export default Header