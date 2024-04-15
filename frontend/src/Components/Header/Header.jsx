import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { NavLink } from 'react-router-dom'
import {useAuth0} from "@auth0/auth0-react"
import ProfileMenu from '../ProfileMenu/ProfileMenu'
const Header = () => {
  const[menuOpened,setMenuOpened] = useState(false)
  const {loginWithRedirect,isAuthenticated,user,logout}=useAuth0()


  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return { display:!menuOpened && 'none'}
    }
  }

  

console.log(isAuthenticated)

  return (
    <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">

           <img className="h-logo" src="./logo.png" alt="logo"  />
           
           <OutsideClickHandler onOutsideClick={()=> {setMenuOpened(false)}}>

           <div className="flexCenter h-menu show" style={getMenuStyles(menuOpened)}>

            <NavLink to='/properties'>Properties</NavLink> 
            <a href="">Contact us</a>
            
            {
              isAuthenticated===true?
              (<ProfileMenu user={user} logout={logout}/>):(<button className='button' onClick={loginWithRedirect}>
            <a href="">Login</a>
            </button>)}
            
           </div>
           </OutsideClickHandler>

           <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
           </div>

        </div>
    </section>
  )
}

export default Header