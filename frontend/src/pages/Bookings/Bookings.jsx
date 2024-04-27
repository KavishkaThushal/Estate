import React, { useContext, useState } from "react";

import { PuffLoader } from "react-spinners";



import useBookings from "../../hooks/useBookings";
import OwnPropertyCard from '../../Components/OwnPropertyCard/OwnPropertyCard'
import "./Booking.css"
import { useQuery } from "react-query";
import { getRecDetails, getpro } from "../../utils/api";
import BookingShow from "../../Components/BookingShow/BookingShow";
const Bookings = () => {
  const { data, isError, isLoading } = useBookings();
  const [filter, setFilter] = useState("");
        
 console.log(data?.bookings)
    

   
  // const { prodata, proisError, proisLoading } = useQuery(["propertid",id],()=>{
  //    getpro(id)
  // });
   
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <div className="book-properties-wrapper">
    <div className='book-title primaryText'>Booking Recidencies
     </div> 
 <div className="  book-properties-container">
    


   <div className=" book-properties">

       
       
   {data?.bookings.map((book, i) => (
    <div key={i} className="booking-container">
        <div className="booking-img-container">
            <img src={book.image} alt="residency image" />
        </div>
        <div className="booking-left">
            <span className="booking-title">{book.title}</span>
            <div className="booking-content">
                <span>price: Rs.{book.price}</span>
                <span>date: {book.date}</span>
            </div>
        </div>
    </div>
))}

   
        

     

   </div>
 </div>
</div>
  );
};

export default Bookings;
