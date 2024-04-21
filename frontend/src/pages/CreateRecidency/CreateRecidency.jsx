import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { bookVisit, getpro, } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import "./CreateRecidency.css";

import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../../components/Map/Map";
import Img from '../../../dist/log.jpg'
//import useAuthCheck from "../../hooks/useAuthCheck";
//import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/BookingModal/BookingModal";

import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import UserDetailContext from "../../Context/Context";

const CreateRecidency = () => {
  
 
  
  
  


 


  //const { validateLogin } = useAuthCheck();
 // const { user } = useAuth0();






  return (
    <div className="property-wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        

        {/* image */}
        <img src={Img} alt="home image" />

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
            <div style={{display:'flex',flexDirection:'column'}} className="head-containers">
                    <label>Title</label>
                    <input type="text" placeholder="Enter your title"/>
                    </div>
                  
            <div style={{display:'flex',flexDirection:'column'}} className="head-containers">
                    <label>Value</label>
                    <input type="text" placeholder="Enter your value"/>
                    </div>
                  
              

              
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <input type="number" maxlength="2"  /><span> Bathrooms</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <input type="number" maxlength="2"  /><span> Parking</span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <input type="number" maxlength="2"  /><span> Room/s</span>
              </div>
            </div>

            {/* description */}

            <span className=" description-container" style={{ textAlign: "justify" }}>
            <label>Description</label>
            <textarea  rows="4" cols="50" placeholder="Enter description here"></textarea>

           
            </span>

            {/* address */}

            <div className="flexStart address-form" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} color="#1F3E72"/>
              <div style={{display:'flex',flexDirection:'column'}} className="address-container" >
              <label>Address</label>
              <input type="text" className="address"/>
              </div>
              <div style={{display:'flex',flexDirection:'column'}} className="address-container">
              <label>City</label>
              <input type="text" />
              </div>
              <div style={{display:'flex',flexDirection:'column'}} className="address-container">
              <label>Country</label>
              <input type="text" />
              </div>
            </div>

   

          </div>

          
         
        </div>
      </div>
    </div>
  );
};

export default CreateRecidency;
