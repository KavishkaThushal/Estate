import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';



import { slidersettings } from '../../utils/common';

import useProperties from '../../hooks/useProperties';
import {PuffLoader} from 'react-spinners'
import PropertyCard from '../PropertyCard/PropertyCard';

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
    
    
    

    return (
        <section className='r-wrapper'>
            
            <div className='paddings innerWidth r-container'>
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>

                    
                </div>

                
                 
                <Swiper className='s-swiper' slidesPerView={slidersettings.slidesPerView} spaceBetween={slidersettings.spaceBetween} breakpoints={slidersettings.breakpoints}>
                <SliderButtons/>
                    {data.response.slice(0,8).map((card, i) => {
                       return(<SwiperSlide key={i}>
                        <PropertyCard card={card} key={i} />
                     </SwiperSlide>) 
})}                  
                </Swiper>
            </div>
            
        </section>
        
    );
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

export default Residencies;

