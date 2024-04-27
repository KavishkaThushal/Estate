import React from 'react'
import './PropertyCard.css';
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import {useNavigate} from 'react-router-dom'
function PropertyCard({card}) {
    
  const navigate=useNavigate()
  const imgPath=`http://localhost:7000/uploads/${card?.image}`
  return (
    <div className=" r-card small" onClick={()=>(navigate(`../properties/${card._id}`))}>
        
    <img src={imgPath} alt='home'  />
   
    <span className='secondaryText r-price small '>
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
    </span>
    <span >{truncate(card.title,{length:30})}</span>
    <span className="secondaryText small">{truncate(card.description,{length:50})}</span>
</div>
  )
}

export default PropertyCard