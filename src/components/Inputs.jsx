import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import "./Input.css";
const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div>
      <input
        type="text"
        className="inputBox"
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
      />


      <button onClick={handleSearchClick} className="searchIcon">
        {<FaSearch />}
       
      </button>
    </div>
  );
};

export default Inputs;
