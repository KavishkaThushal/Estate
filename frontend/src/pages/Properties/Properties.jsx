import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

import OwnPropertyCard from '../../Components/OwnPropertyCard/OwnPropertyCard'
const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  
  const [filter, setFilter] = useState("");
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
    <div className="properties-wrapper">
      <SearchBar filter={filter} setFilter={setFilter} className='property-search' />
      <div className="  properties-container">
        

        <div className=" properties">
          {
             data?.response.filter(
                  (property) =>
                     property.title.toLowerCase().includes(filter.toLowerCase()) ||
                     property.city.toLowerCase().includes(filter.toLowerCase()) ||
                   property.country.toLowerCase().includes(filter.toLowerCase())
                 ).map((card, i)=> (<OwnPropertyCard card={card} key={i}/>))

            
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;
