import React, { useContext, useEffect, useRef } from "react";

import { useQuery } from "react-query";
import { getUserDetails } from "../utils/api";

import UserDetailContext from "../Context/Context"

const useUserDetails = () => {
  const { userDetails:{email}, setUserDetails } = useContext(UserDetailContext);
  // const queryRef = useRef();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["userData", email],
    queryFn: () => getUserDetails(email),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, user: data })),
    

  });


//   queryRef.current=refetch

//   useEffect(() => {
//    queryRef.current && queryRef.current();
//  },[]);



  return { data, isError, isLoading, refetch };
};

export default useUserDetails;
