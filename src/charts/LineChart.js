import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "./Data";
import "./Line.css"
function LineChart({items}) {
  return <>

  <div className="lineDiv">
  < Line data={{

    labels: items.map((data)=> data.title),
    datasets:[
        {
            label: "Hourly Forecast",
            data: items.map((data) => data.temp),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 1,
        }
    ] 
  }} 
  
  
   />
  </div>
  </>;
}

export default LineChart;
