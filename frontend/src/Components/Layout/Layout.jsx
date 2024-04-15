import React, { useContext, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Outlet, createHashRouter } from 'react-router-dom'
import {useAuth0} from "@auth0/auth0-react"
import {useMutation} from "react-query"
import { createUser } from '../../utils/api'
import UserDetailContext from '../../Context/Context'
function Layout() {
  const {isAuthenticated,user}=useAuth0()
  const {setUserDetails}=useContext(UserDetailContext)
  const {mutate}=useMutation({
    mutationKey:[user?.email],
    mutationFn:()=>createUser(user?.email)

  })
  useEffect(()=>{
    isAuthenticated && mutate()
  },[isAuthenticated])
  return (
    <>
    <div>
    <Header/>
    <Outlet/>
    </div>
    <Footer/> 
    </>
  )
}

export default Layout