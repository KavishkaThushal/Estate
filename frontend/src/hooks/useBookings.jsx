import React, { useContext, useEffect, useRef } from "react";

import { useQuery } from "react-query";

import { getAllBookings } from "../utils/api";
import { storeContext } from "../utils/ContextStore";

const useBookings = () => {
  const userDataJSON = localStorage.getItem('userData');

  const userData = JSON.parse(userDataJSON);
  const email = userData?.email;
 
  const { setBookings, } = useContext(storeContext);
 const queryRef=useRef()

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(email),
    onSuccess: (data) =>
      //console.log(data)
       setBookings(data.bookings ),
   
      
      
    
    
  });
  queryRef.current=refetch

  useEffect(() => {
   queryRef.current && queryRef.current();
 }, [email]);



  return { data, isError, isLoading, refetch };
};

export default useBookings;
