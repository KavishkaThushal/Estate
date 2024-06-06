import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { bookVisit, getpro, removeBook, } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import "./Property.css";
import { FaBed } from 'react-icons/fa';
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../../components/Map/Map";

import BookingModal from "../../components/BookingModal/BookingModal";

import { Button } from "@mantine/core";
import { toast } from "react-toastify";

import { storeContext } from "../../utils/ContextStore";
import useBookings from "../../hooks/useBookings";

const OwnProperty = () => {
  const { pathname } = useLocation();
 
   const id = pathname.split("/").slice(-1)[0];
   const userDataJSON = localStorage.getItem('userData');

  const userData = JSON.parse(userDataJSON);
  const email = userData?.email;
    
  const bookingdetails = useBookings();
   const { data, isLoading, isError } = useQuery(["resd", id], () =>
   getpro(id)
   
 );
 


  const [modalOpened, setModalOpened] = useState(false);


  const {
    bookings,
        setBookings,
  } = useContext(storeContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBook( email,id),
    
    onSuccess: () => {
      
      setBookings((prev) => ([
      
        Object.entries(prev).filter((booking) => booking.recidencyId !== id),
      ]));


      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }
  const imgPath=`http://localhost:7000/uploads/${data.response?.image}`
  return (
    <div className="property-wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        

        {/* image */}
        <img src={imgPath } alt="home image" />

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText" style={{ fontSize: "1.5rem" }}>{data.response?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.2rem" }}>
                $ {data.response?.price}
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.response?.facilities[0].bathrooms} Bathrooms</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data.response?.facilities[0].parkings} Parking</span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
              <FaBed size={20} color="#1F3E72" />
                <span>{data.response?.facilities[0].bedrooms} Room/s</span>
              </div>
            </div>

            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data.response?.description}
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data.response?.address}{" "}
                {data.response?.city}{" "}
                {data.response?.country}
              </span>
            </div>

            {/* booking button */}
            {bookings?.map((booking) => 
            booking.
recidencyId).includes(id) ? (
              <>
                <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  <span>Cancel booking</span>
                </Button>
                <span>
                  Your visit already booked for date{" "}
                  {bookings?.filter((booking) => booking?.recidencyId === id)[0].date}
                </span>
                
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  setModalOpened(true);
                }}
              >
                Book your visit
              </button>
            )}

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={email}
              title={data.response?.title}
              price={data.response?.price}
              image={data.response?.image}
            />
          </div>

          {/* right side */}
          <div className="map">
            <Map
              address={data.response?.address}
              city={data.response?.city}
              country={data.response?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnProperty;
