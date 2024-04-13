import React from 'react'
import './Property.css'
import {useQuery} from 'react-query'
import {useLocation} from 'react-router-dom'
import { getProperty } from '../../utils/api'
import {PuffLoader} from 'react-spinners'
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai'
import { FaShower } from 'react-icons/fa'
import { MdLocationPin, MdMeetingRoom } from 'react-icons/md'
import Map from '../../Components/Map/Map'
//import { MdLocation } from 'react-icons/md'

function Property() {
  const {pathname}=useLocation()
  const id=pathname.split('/').slice(-1)[0]
 
    const {data,isLoading,isError}=useQuery(["resd",id],()=>getProperty(id))
    if(isLoading){
        
            return(
                <div className='wrapper flexCenter' style={{height:"60vh"}}>
                  <PuffLoader
                  height="80"
                  width="80"
                  radius={1}
                  color="#4066ff"
                  aria-label="puff-loading"/>
                </div>
              )
      
    }
   
    if(isError){
        return(
            <div className='wrapper'>
                <div className='flexCenter paddings'>
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        )
    }
   
  return (
    <div className='Wrapper'>
        <div className='flexColStart paddings innerWidth property-container'>
            <div className='like'>
            <AiFillHeart size={24} color='white' />
            </div>
            <img src={data?.image} alt='home image'/>
            <div className='flexCenter property-details'>
                {/* left */}
                <div className='flexColStart left'>
                    <div className='flexStart head'>
                        <span className='primaryText' style={{fontSize:'1.3rem'}}>{data?.title}</span>
                        <span className='orangeText' style={{fontSize:'1.3rem'}}>${data?.price}</span>
                        </div>
                   <div className="flexStart facilities">
                    <div className=" facility">
                        <FaShower size={18} color='#1F3E72'/>
                        <span className='facilityContent'>{data?.facilities?.bathrooms} Bathrooms</span>
                    </div>
                    <div className=" facility">
                        <AiTwotoneCar size={18} color='#1F3E72'/>
                        <span className='facilityContent'>{data?.facilities?.parking} Parkings</span>
                    </div>
                    <div className=" facility">
                        <MdMeetingRoom size={18} color='#1F3E72'/>
                        <span className='facilityContent'>{data?.facilities?.bedrooms} Rooms</span>
                    </div>
                   </div>
                   <span className="secondaryText" style={{textAlign:"justify"}}>
                    {data?.description}
                   </span>
                    <div className="flexStart" style={{gap:"0.5rem"}}>
                        <MdLocationPin size={18} color='#1f3e72'/>
                        <span className="secondaryText">
                           {`${data?.address} ${data?.city} ${data?.country}` } </span>
                    </div>
                    <button className="button">
                        Book your visit
                    </button>
                </div>
                {/* right */}
                <div className='map'>
                    <Map
                    address={data?.address}
                    city={data?.city}
                    country={data?.country}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Property