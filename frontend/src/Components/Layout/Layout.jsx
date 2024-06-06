
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

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