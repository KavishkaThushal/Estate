import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const[menuOpened,setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return { display:!menuOpened && 'none'}
    }
  }

  



  return (
    <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">

           <img className="h-logo" src="./logo.png" alt="logo"  />
           
           <OutsideClickHandler onOutsideClick={()=> {setMenuOpened(false)}}>

           <div className="flexCenter h-menu show" style={getMenuStyles(menuOpened)}>

            <NavLink to='/properties'>Properties</NavLink> 
            <a href="">Contact us</a>
            
            <button className='button'>
            <a href="">Login</a>
            </button>
            
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