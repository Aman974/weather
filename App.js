import "./App.css";

import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  console.log("weather:", weather);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        }
      );
    };

    fetchWeather();
  }, [query, units]);

  return (
    <>
      <div className="App">
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <h1 className="name">
              {" "}
              {weather.name} - {weather.country}
            </h1>
            <h2 className="temp">{weather.temp + "°C"}</h2>

            <Forecast
              title="Hourly forecast"
              items={weather.hourly}
              className="forecast"
            />
            <div className="forecast2">
              <Forecast title="Daily forecast" items={weather.daily} />
            </div>

            <div>
              <TemperatureAndDetails weather={weather} />
            </div>

            <div className="weatherPH">
              <div className="weatherP">
                Pressure: {weather.pressure + "hpa"}
              </div>
              <div className="weatherH">Humidity: {weather.humidity + "%"}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
