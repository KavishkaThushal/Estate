import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
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