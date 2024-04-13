import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import './SearchBar.css'
function SearchBar() {
  return (
    <div className=" searchConatiner " >
        <HiLocationMarker size={25} color="var(--blue)"/>
        <input type='text' className='searchInput'/>
        <button className="button">Search</button>
                     
                    
                    
                  </div>
  )
}

export default SearchBar