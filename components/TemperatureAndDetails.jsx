import React from "react";
import "./Temprature.css";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    // details,
    // icon,
    // temp,
    // temp_min,
    // temp_max,
    sunrise,
    sunset,
    // speed,
    // humidity,
    // feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div></div>

      <div className="sunDiv">
        <p className="sunrise">
          Sunrise:{" "}
          <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>

        <p className="sunrise">
          Sunset: <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
