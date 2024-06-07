import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import OwnPropertyCard from '../../Components/OwnPropertyCard/OwnPropertyCard'

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  console.log(data);
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

  const filteredProperties = data?.response.filter((property) => {
    const title = property?.title?.toLowerCase() || "";
    const city = property?.city?.toLowerCase() || "";
    const country = property?.country?.toLowerCase() || "";

    return title.includes(filter.toLowerCase()) ||
           city.includes(filter.toLowerCase()) ||
           country.includes(filter.toLowerCase());
  });

  return (
    <div className="properties-wrapper">
      <SearchBar filter={filter} setFilter={setFilter} className='property-search' />
      <div className="properties-container">
        <div className="properties">
          {
            filteredProperties.map((card, i) => (
              <OwnPropertyCard card={card} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;
