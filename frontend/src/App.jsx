import { Accordion } from "react-accessible-accordion";

import Website from "./pages/Website";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Suspense, useState } from "react";
import Layout from "./Components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { MantineProvider } from '@mantine/core';

import Login from "./pages/LogIn/Login";
import Register from "./pages/Register/Register";
import CreateRecidency from "./pages/CreateRecidency/CreateRecidency";
import MyRecidencies from "./pages/MyRecidencies/MyRecidencies";
import OwnProperty from "./pages/Property/OwnProperty";
import Bookings from "./pages/Bookings/Bookings";
import Contact from "./components/Contact/Contact";
import { StoreProvider } from "./utils/ContextStore";

function App() {
  const queryClient=new QueryClient()
  // const [userDetails,setUserDetails]=useState({
  //   bookings:[],
  //   email:null,
  //   user:null,
    
  // })

  return (
    <StoreProvider>
    <MantineProvider>
    <QueryClientProvider client={queryClient}>
      
   <BrowserRouter>
   <Suspense fallback={<div>Loading....</div>}>
     <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Website/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
      <Route path="/myrecidencies" >
      <Route index element={<MyRecidencies/>}/>
      <Route path=":propertyownId" element={<OwnProperty/>}/>
        </Route>
      
      <Route path="/register" element={<Register/>}/>
      <Route path="/createrecidency" element={<CreateRecidency/>}/>
      <Route path="/properties" element={<Properties/>}/>
        
      </Route>
     </Routes>
     </Suspense>
   </BrowserRouter>
   <ToastContainer/>

   </QueryClientProvider>
   </MantineProvider>
   </StoreProvider>
  );
}

export default App;
