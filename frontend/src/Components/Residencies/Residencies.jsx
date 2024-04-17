import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './Residencies.css';

import 'swiper/css';

import { slidersettings } from '../../utils/common';
 import PropertyCard from '../PropertyCard/PropertyCard';
import useProperties from '../../hooks/useProperties';
import {PuffLoader} from 'react-spinners'
const Residencies = () => {
    const {data,isError,isLoading}=useProperties()
    if(isError){
      return(
        <div className='wrapper'>
          <span>Error while fetching data</span>
        </div>
      )
  
    }
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
    
    const SliderButtons = () => {
        const swiper = useSwiper();
        return (
            <div className=" swiperContainer">
                <button onClick={()=>swiper.slidePrev()} className='swiperBtn'>&lt;</button>
                <button onClick={()=>swiper.slideNext()} className='swiperBtn'>&gt;</button>
            </div>
        );
    };
    

    return (
        <section className='r-wrapper'>
            
            <div className='paddings innerWidth r-container'>
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <SliderButtons  />

                <Swiper className='s-swiper' slidesPerView={slidersettings.slidesPerView} spaceBetween={slidersettings.spaceBetween} breakpoints={slidersettings.breakpoints}>
                
                    {data.response.slice(0,5).map((card, i) => {
                       return(<SwiperSlide key={i}>
                        <PropertyCard card={card} key={i} />
                     </SwiperSlide>) 
})}
                </Swiper>
            </div>
            
        </section>
        
    );
}

export default Residencies;

