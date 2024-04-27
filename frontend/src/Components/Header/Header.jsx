import React, { useContext, useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { NavLink, useNavigate } from 'react-router-dom'
import {useAuth0} from "@auth0/auth0-react"
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import useUserDetails from '../../hooks/useUserDetails'
import UserDetailContext from '../../Context/Context'
const Header = () => {
 
  const { data, isError, isLoading,refetch } = useUserDetails();
     const userData=JSON.parse(localStorage.getItem('userData'))
     
    const { userDetails:{user}, setUserDetails } = useContext(UserDetailContext);

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

           <img className="h-logo" src="./logo.png" alt="logo"  />
           
           {/* <OutsideClickHandler onOutsideClick={()=> {setMenuOpened(false)}}> */}

           <div className="flexCenter h-menu show" >
           
            <NavLink to='/properties'>Properties</NavLink> 
            <NavLink to='/contact'>Contact us</NavLink> 
            
            {renderheader()}
            
            {/* {
              isAuthenticated===true?
              (<ProfileMenu user={user} logout={logout}/>):(<button className='button' onClick={loginWithRedirect}>
            <a href="">Login</a>
            </button>)} */}
            
           </div>
           {/* </OutsideClickHandler> */}

           <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
           </div>

        </div>
    </section>
  )
}

export default Header