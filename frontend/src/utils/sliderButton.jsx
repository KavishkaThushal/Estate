import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
export const SliderButtons =() => {
    const swiper = useSwiper();
    return(
        <div className="flexCenter " style={{backgroundColor:'red'}}>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>

        </div>
    );
};