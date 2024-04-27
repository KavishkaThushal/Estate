import React from 'react'
import { ownRecidencies } from '../../utils/api';
import { useQuery } from "react-query";
import './MyRecidencies.css'
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { PuffLoader } from 'react-spinners';
import OwnPropertyCard from '../../Components/OwnPropertyCard/OwnPropertyCard'
function MyRecidencies() {
  const userDataJSON = localStorage.getItem('userData');

  const userData = JSON.parse(userDataJSON);
  const email = userData.email;
console.log(email)
  const { data, isLoading, isError } = useQuery("myresd", () =>
  ownRecidencies(email)
);
 console.log(data?.response[0].image)
   
 if (isError) {
  return (
    <div className="wrapper">
      <span>Error while fetching data</span>
    </div>
  );
}

if (isLoading) {
  return (
    <div className="wrapper flexCenter" style={{ height: "60vh" }}>
      <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
      />
    </div>
  );
}
  return (
    <div className="Own-properties-wrapper">
       <div className='Own-title'>Own Recidencies
        </div> 
    <div className="  Own-properties-container">
       


      <div className=" Own-properties">
        {
           data?.response.map((card, i)=> (<OwnPropertyCard card={card} key={i}/>))

          // data
          //   .filter(
          //     (property) =>
          //       property.title.toLowerCase().includes(filter.toLowerCase()) ||
          //       property.city.toLowerCase().includes(filter.toLowerCase()) ||
          //       property.country.toLowerCase().includes(filter.toLowerCase())
          //   )
          //   .map((card, i) => (
          //     <PropertyCard card={card} key={i} />
          //   ))
        }
      </div>
    </div>
  </div>
  )
}

export default MyRecidencies