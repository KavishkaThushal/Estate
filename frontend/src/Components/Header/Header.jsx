import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { NavLink } from 'react-router-dom'
import {useAuth0} from "@auth0/auth0-react"
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import useUserDetails from '../../hooks/useUserDetails'
const Header = () => {
  // const[menuOpened,setMenuOpened] = useState(false)
  const { data, isError, isLoading } = useUserDetails();
  const token=localStorage.getItem('token')
  console.log(data)
const renderheader=()=>{
   if(token){
    return(
      <>
       <div>
         `Hi ${data}`
       </div>
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
            <a href="">Contact us</a>
            
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