import React from "react";

function WeatherCard(props) {
  return (
    <div className="card">
      <div className="location">
        <h1 className="city">Sydney</h1>
        <h3 className="country">AU</h3>
      </div>
      <img className="icon" src="./img/cloudy.png" alt="Weather Icon" />
      <h1 className="temp">20 °C</h1>
      <h3 className="condition">Clouds</h3>
    </div>
  );
}

export default WeatherCard;