import React, { useContext, useEffect, useRef } from "react";
import UserDetailContext from "../context/UserDetailContext";
import { useQuery } from "react-query";

import { getAllBookings } from "../utils/api";

const useBookings = () => {
  const { userDetails:{email}, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(email),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data })),
    
    staleTime: 30000,
  });
   queryRef.current=refetch

   useEffect(() => {
    queryRef.current && queryRef.current();
  }, []);



  return { data, isError, isLoading, refetch };
};

export default useBookings;
