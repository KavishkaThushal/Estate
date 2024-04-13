import React from 'react'
import './PropertyCard.css';
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import {useNavigate} from 'react-router-dom'
function PropertyCard({card}) {

  const navigate=useNavigate()
  return (
    <div className=" r-card small" onClick={()=>(navigate(`../properties/${card.id}`))}>
         <AiFillHeart size={24} color='white' />
    <img src={card.image} alt='home'  />
   
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