import React from "react";


const WeatherData = () => {
    const API_KEY = "f858aa678c1a8ab2eb4f4612ae93c3a4";
    const BASE_URL = "https://api.openweathermap.org/data/2.5";

  // https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric


  const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid:API_KEY });

    return fetch(url)
    .then((res) => res.json())
    // .then((data) => data)
  };

 

  
//   const fetchWeather = async () => {
//     const data = await getFormattedWeatherData({q: "delhi"})
//     console.log('data:', data)

  
    
//   }


//   fetchWeather()
  
   const formatCurrentWeather = (data) => {
        const {
            coord: {lat, lon},
            main: {temp, feels_like, humidity,pressure,},
            dt,
            sys: {country, sunrise, sunset},
            weather, 
            wind: {speed},

        } = data

        const {main: details,icon} = weather(0) 

        return{
            lat, lon, temp, feels_like, humidity,pressure,country, sunrise, sunset,speed,dt, weather, details, icon
        }
   }

//   const getFormattedWeatherData = async (searchParams) => {
//     const formattedCurrentWeather = await getWeatherData 
//     ("weather", searchParams).then(formatCurrentWeather)

//     return formattedCurrentWeather
// }


// return(
//     <div></div>
//     ) 
};
export default WeatherData;



export {WeatherData}
