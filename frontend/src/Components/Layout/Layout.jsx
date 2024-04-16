import React, { useContext, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Outlet, createHashRouter } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import {useMutation} from "react-query"
import { createUser } from '../../utils/api'
import UserDetailContext from '../../Context/Context'
function Layout() {
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);
  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => {createUser(user?.email, token)
      console.log(token)},
  });
 
  
  useEffect(() => {
    const getTokenAndRegsiter = async () => {

      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "http://localhost:9000",
          scope: "openid profile email",
        },
      });
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      
      mutate(res)
      
    };

       isAuthenticated && getTokenAndRegsiter();
       
  }, [isAuthenticated]);
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