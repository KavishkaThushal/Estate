import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { bookVisit, createrecidencies, getpro,  } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import "./CreateRecidency.css";

import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../../components/Map/Map";

//import useAuthCheck from "../../hooks/useAuthCheck";
//import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/BookingModal/BookingModal";
import ReactImagePickerEditor from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import UserDetailContext from "../../Context/Context";
import { useEffect } from "react";

import defaultImg from '../../../dist/camera.png'
const CreateRecidency = () => {
  
     const navigate=useNavigate()
  
     const [title,setTitle]=useState('')
     const [value,setValue]=useState(null)
     const [bathrooms,setBathrooms]=useState(null)
     const [parking,setParking]=useState(null)
     const [rooms,setRooms]=useState(null)
     const [description,setDescription]=useState('')
     const [address,setAddress]=useState('')
     const [city,setCity]=useState('')
     const [country,setCountry]=useState('')
      
    
     const [path,setPath]=useState(null)
     const userDataJSON = localStorage.getItem('userData');

      const userData = JSON.parse(userDataJSON);
      const email = userData.email;

     const [file, setFile] = useState(null);
     
    const initialImage = '';
 
    // const handleImageUpload = async (dataUri) => {
    //   // Upload the image to the server
    //   try {
    //     console.log(`image url:${dataUri}`)
    //     const imageUrl = await uploadImage(dataUri); // Assuming uploadImage is your API function to upload image
    //     setImageSrc(imageUrl); // Set the uploaded image URL
    //   } catch (error) {
    //     console.error('Error uploading image:', error);
    //     toast.error('Failed to upload image');
    //   }
    // };
      

  
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('price', value);
      formData.append('bathrooms', bathrooms);
      formData.append('parkings', parking);
      formData.append('rooms', rooms);
      formData.append('description', description);
      formData.append('address', address);
      formData.append('city', city);
      formData.append('country', country);
      formData.append('userEmail', email);
  
      const { mutate: uploadImg, isLoading: loading } = useMutation({
        mutationFn: () => createrecidencies(formData),
        onSuccess: (data) => {
                      
        setPath(`http://localhost:7000/uploads/${data?.imageName}`)
        
           toast.success("Create successfully", { position: "bottom-right" });
           
           navigate(-1)
        
        },
      });
    
  
   


    

    const renderUplaodBtn=()=>{
      return(
        <>
        <div>
          <button className="create-Btn" onClick={uploadImg}>upload me</button>
        </div>
        </>
      )
    }





const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};


   
  return (
    <div className="property-wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        

        {/* image */}

        <div className="img-container">
        <label htmlFor="file-upload" className="img-label">
        {!file? <img src={defaultImg } alt="my img" className="default-img"/> : <img src={path} alt="my img" className="img-img"/>}
      </label>
      <input id="file-upload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
       {/* {file? <img src={defaultImg } alt="my img" className="default-img"/> : <img src={path} alt="my img" className="img-img"/>}
       <input type="file" onChange={handleFileChange} /> */}
        </div>
        
       
          
        
        
          
         
        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
            <div style={{display:'flex',flexDirection:'column'}} className="head-containers">
                    <label>Title</label>
                    <input type="text" placeholder="Enter your title" onChange={(e)=>(setTitle(e.target.value))}/>
                    </div>
                  
            <div style={{display:'flex',flexDirection:'column'}} className="head-containers">
                    <label>Value</label>
                    <input type="text" placeholder="Enter your value" onChange={(e)=>(setValue(e.target.value))}/>
                    </div>
                  
              

              
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <input type="number" maxlength="2"  onChange={(e)=>(setBathrooms(e.target.value))}/><span> Bathrooms</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <input type="number" maxlength="2" onChange={(e)=>(setParking(e.target.value))} /><span> Parking</span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <input type="number" maxlength="2" onChange={(e)=>(setRooms(e.target.value))} /><span> Room/s</span>
              </div>
            </div>

            {/* description */}

            <span className=" description-container" style={{ textAlign: "justify" }}>
            <label>Description</label>
            <textarea  rows="4" cols="50" placeholder="Enter description here" onChange={(e)=>(setDescription(e.target.value))}></textarea>

           
            </span>

            {/* address */}

            <div className="flexStart address-form" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} color="#1F3E72"/>
              <div style={{display:'flex',flexDirection:'column'}} className="address-container" >
              <label>Address</label>
              <input type="text" className="address" onChange={(e)=>(setAddress(e.target.value))}/>
              </div>
              <div style={{display:'flex',flexDirection:'column'}} className="address-container">
              <label>City</label>
              <input type="text" onChange={(e)=>(setCity(e.target.value))}/>
              </div>
              <div style={{display:'flex',flexDirection:'column'}} className="address-container">
              <label>Country</label>
              <input type="text" onChange={(e)=>(setCountry(e.target.value))}/>
              </div>
            </div>
            
   

          </div>

          
          
        </div>
        
      </div>
      {file? renderUplaodBtn():''}
    </div>
  );
};

export default CreateRecidency;
