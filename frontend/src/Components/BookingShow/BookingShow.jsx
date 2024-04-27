import React from 'react'
import "./BookingShow.css"
import { useQuery } from 'react-query'
import { getRecDetails } from '../../utils/api'


function BookingShow({id}) {
    console.log(id)
    const {data,isError,isLoading}=useQuery(["bookId",id],()=>{
        getRecDetails(id)
    })
   
    console.log(data)
    console.log(isError)
    console.log(isLoading)
  return (
    <div>BookingShow</div>
  )
}

export default BookingShow