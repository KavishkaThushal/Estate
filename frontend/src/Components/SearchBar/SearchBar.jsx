import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import './SearchBar.css'
function SearchBar({filter,setFilter}) {
  return (
    <div className=" searchConatiner " >
        <HiLocationMarker size={25} color="#5a73d7" style={{marginLeft:'5px'}}/>
        <input type='text' className='searchInput' value={filter} onChange={(e)=>(setFilter(e.target.value))}/>
        <button className="search-button">Search</button>
                     
                    
                    
                  </div>
  )
}

export default SearchBar