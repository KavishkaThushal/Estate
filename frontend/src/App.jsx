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


function App() {
  const queryClient=new QueryClient()
  const [userDetails,setUserDetails]=useState({
    favourite:[],
    bookings:[],
    token:null
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
