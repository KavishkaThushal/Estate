import React from 'react'
import {Menu} from '@mantine/core'
import { useNavigate } from 'react-router-dom'

import './ProfileMenu.css'
const ProfileMenu = ({name}) => {
    
  
   
    const navigate = useNavigate()

  return (
    <Menu >
       <Menu.Target>
        <button className='menu-btn'>{`Hi! ${name}`}</button>
       </Menu.Target>
        <Menu.Dropdown >
            <Menu.Item onClick={()=> navigate("./myrecidencies", {replace: true})}>
                My recidencies
            </Menu.Item>

            <Menu.Item onClick={()=> navigate("./bookings", {replace: true})}>
                Bookings
            </Menu.Item>
            <Menu.Item onClick={()=> navigate("./createrecidency", {replace: true})}>
                Create your Recidency
            </Menu.Item>

            <Menu.Item onClick={()=>{
                localStorage.clear();
                window.location.reload();
            }}>
                Logout
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu