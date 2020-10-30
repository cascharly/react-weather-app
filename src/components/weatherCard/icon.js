import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    height: 80px;
  `;

  var icon = "";

  switch (props.condition) {
    case "Clouds":
      icon = `./img/cloudy.png`;
      break;
    case "Clear":
      icon = `./img/sunny.png`;
      break;
    case "Haze":
      icon = `./img/foggy.png`;
      break;
    case "Hail":
      icon = `./img/raining.png`;
      break;
    case "Fog":
      icon = `./img/foggy.png`;
      break;
    case "Tornado":
      icon = `./img/windy.png`;
      break;
    case "Dust":
      icon = `./img/foggy.png`;
      break;
    case "Mist":
      icon = `./img/foggy.png`;
      break;
    case "Snow":
      icon = `./img/snowy.png`;
      break;
    case "Rain":
      icon = `./img/raining.png`;
      break;
    case "Drizzle":
      icon = `./img/drip.png`;
      break;
    case "Thunderstorm":
      icon = `./img/lightning.png`;
      break;
    default:
      icon = `./img/foggy.png`;
      break;
  }

  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
