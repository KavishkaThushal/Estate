import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import useProperties from '../../hooks/useProperties'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import {PuffLoader} from 'react-spinners'
import './Properties.css'
function Properties() {
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
    <div className='Wrapper'>
       <SearchBar/>
      <div className='  innerWidth properties-container  '>
       
      
          {
            data.map((card,i)=>(<PropertyCard card={card} key={i}/>))
          }
       
      </div>
    </div>
  )
}

export default Properties