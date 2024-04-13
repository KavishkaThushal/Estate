import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import SearchBar from '../SearchBar/SearchBar'


const Hero = () => {
  return (
    <section className="hero-wrapper">
      
        <div className="paddings innerWidth flexCenter hero-container">
            <video className= "hero-video" src='./video.mp4' muted autoPlay loop type="video/mp4"></video>
            {/*left*/}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                  <div className="orange-circle"></div>
                <motion.h1
                initial={{y: "2rem",opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{
                  duration:2,
                  type:"spring"
                }}
                >Discover
                   <br/> Most Suitable 
                    <br/>Property
                </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                  <span className='h-span'>
                    Easy Way To Reach Your Dream Home. 
                  </span>
                </div>
                  <SearchBar/>
  
                  <div className="flexCenter stat">
                    <div className="flexColCenter stats">
                      <span>
                      <CountUp start={8800} end={9000} duration={4}/>
                       <span>+</span>   
                      </span>
                      <span className='secondaryText'>
                        Premium Products
                      </span>

                    </div>

                    <div className="flexColCenter stats">
                      <span>
                      <CountUp start={8800} end={9000} duration={4}/>
                      <span>+</span>
                          
                      </span>
                      <span className='secondaryText'>
                        Happy Coustermers
                      </span>

                    </div>

                    <div className="flexColCenter stats">
                      <span>
                      <CountUp end={28} />
                       <span>+</span>   
                      </span>
                      <span className='secondaryText'>
                        Award winning
                      </span>

                    </div>
                  </div>

                </div>
            
          {/*right*/}
            <div className="flexCenter hero-right">
                 <div className="image-container">
                  {/* <img src='./hero-image.png' alt=''/> */}
                 </div>
         

            </div>

        </div>
    </section>
  )
}

export default Hero