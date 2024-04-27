import { Accordion } from "react-accessible-accordion";

import Website from "./pages/Website";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Suspense, useState } from "react";
import Layout from "./Components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Property from "./pages/Property/Property";
import { MantineProvider } from '@mantine/core';
import UserDetailContext from "./Context/Context";
import Login from "./pages/LogIn/Login";
import Register from "./pages/Register/Register";
import CreateRecidency from "./pages/CreateRecidency/CreateRecidency";
import MyRecidencies from "./pages/MyRecidencies/MyRecidencies";
import OwnProperty from "./pages/Property/OwnProperty";


function App() {
  const queryClient=new QueryClient()
  const [userDetails,setUserDetails]=useState({
    bookings:[],
    email:null,
    user:null,
    
  })

  return (
    <UserDetailContext.Provider value={{userDetails,setUserDetails}}>
    <MantineProvider>
    <QueryClientProvider client={queryClient}>
      
   <BrowserRouter>
   <Suspense fallback={<div>Loading....</div>}>
     <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Website/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/myrecidencies" >
      <Route index element={<MyRecidencies/>}/>
      <Route path=":propertyownId" element={<OwnProperty/>}/>
        </Route>
      
      <Route path="/register" element={<Register/>}/>
      <Route path="/createrecidency" element={<CreateRecidency/>}/>
      <Route path="/properties" >
        <Route index element={<Properties/>}/>
        <Route path=":propertyId" element={<Property/>}/>
        
      </Route>
      </Route>
     </Routes>
     </Suspense>
   </BrowserRouter>
   <ToastContainer/>

   </QueryClientProvider>
   </MantineProvider>
   </UserDetailContext.Provider>
  );
}

export default App;
