import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
         } from 'react-accessible-accordion'
import './Value.css'
import data from '../../utils/accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useState } from 'react'


const Value = () => {

    const [isOpen, setOpen] = React.useState(false);

    const [isOpena, setOpena] = React.useState(false);

    const [isOpenb, setOpenb] = React.useState(false);
  return (
    <div>
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left */}
                <div className="v-left">
                    <div className="image-container ">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* right */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, aliquam.

                    </span>

                   
                        
                                    <div  className="accordion-wrapper">
      
                                    <div 
                                      className={`accordion-title ${isOpen ? "open" : ""}`}
                                      onClick={() => setOpen(!isOpen) } 
                                      >
                                      Best interest rates on the market
                                    </div>
                                    <div 
                                    className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                                      <div className="accordion-content">Exercitation in fugiat est ut ad ea cupidatat ut in 
                                      cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum 
                                      consequat esse adipisicing eu reprehenderit enim.
                                      </div>
                                    </div>
                                  </div>
                                
                   

<div  className="accordion-wrapper">
      
      <div 
        className={`accordion-title ${isOpena ? "open" : ""}`}
        onClick={() => setOpena(!isOpena) } 
        >
        Prevent unstable prices
      </div>
      <div 
      className={`accordion-item ${!isOpena ? "collapsed" : ""}`}>
        <div className="accordion-content">Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
         occaecat ut occaecat consequat est
         minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </div>
      </div>
    </div>

                       
                


    <div  className="accordion-wrapper">
      
      <div 
        className={`accordion-title ${isOpenb ? "open" : ""}`}
        onClick={() => setOpenb(!isOpenb) } 
        >
        Best price on the market
      </div>
      <div 
      className={`accordion-item ${!isOpenb ? "collapsed" : ""}`}>
        <div className="accordion-content">Exercitation in fugiat est ut ad ea cupidatat 
        ut in cupidatat occaecat ut occaecat consequat est minim 
        minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </div>
      </div>
    </div>

                       
                   


                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Value

