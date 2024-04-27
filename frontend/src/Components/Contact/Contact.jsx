import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-contact">
       {/*left*/}
        <div className="flexColStart c-left">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact</span>
            <span className='secondaryText'>We always ready to help by providing the best services</span>
         <div className="flexColStart contactModes">
            {/*first*/}
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='c1'>Call</span>
                            <span>071300935</span>
                        </div>
                    </div>
                   <button className='flexCenter button'>Call Now</button>
                </div>

             {/*second*/}

             <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='c1'>Chat</span>
                            <span>071300935</span>
                        </div>
                    </div>
                   <button className='flexCenter button'>Chat Now</button>
                </div>
            </div>
            {/*third second row*/}
            <div className="flexStart row">
        
            <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='c1'>video Call</span>
                            <span>071300935</span>
                        </div>
                    </div>
                   <button className='flexCenter button'>Video Call Now</button>
                </div>

              {/*forth*/}

              <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='c1'>Message</span>
                            <span>071300935</span>
                        </div>
                    </div>
                   <button className='flexCenter button'>Message Now</button>
                </div>



            </div>
         </div>



        </div>
        {/*right*/}
        <div className="c-right">
            <div className="image-container">
                <img src='./contact.jpg' alt=''/>
            </div>
        </div>
      


        </div>
    </section>
  )
}

export default Contact