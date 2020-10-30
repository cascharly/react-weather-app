import React from "react";
import "./App.css";
import WeatherCard from "./components/weatherCard/component";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=fb1362db4fc9d77dbd51ebcca2fed300"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then(res=>{
    console.log('The temp is : ' + res.main.temp)
  })
  return (
    <div className="App">
      <WeatherCard temp={-15} condition="Clear" city="Sydney" country="AU" />
      <WeatherCard temp={15} condition="Clouds" city="Melbourne" country="AU" />
      <WeatherCard temp={30} condition="Fog" city="London" country="GB" />
    </div>
  );
}

export default App;
