import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./LineSun.css";
import { formatToLocalTime } from "../services/weatherService";

function LineChartSun({ weather: { sunrise, sunset, timezone } }) {
  console.log('sunrise:',)
  return (
    <>
      <div className="lineDiv">
        <Line
          data={{
            labels: [
              formatToLocalTime(sunrise, timezone, "h:mm a"),
              formatToLocalTime(sunset, timezone, "h:mm a"),
            ],
            datasets: [
              {
                label: "Hourly Forecast",
                data: [5.3,7.2],
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 1,
              },
            ],
           
            
          }}
        />
      </div>
    </>
  );
}

export default LineChartSun;
