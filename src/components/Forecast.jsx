import React from "react";
import { iconUrlFromCode } from "../services/weatherService";
import "./Forecast.css";
function Forecast({ title, items }) {
  
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <hr />

      <div className="forecast1">
        {items.map((item) => (
          <div className="forecast2">
            <p className="forecast"> {item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt="" className="forecast" />
            <p className="forecast">{`${item.temp.toFixed()}° C`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
