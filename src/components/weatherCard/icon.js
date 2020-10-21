import React from "react";
import styled from "@emotion/styled";

const Icon = () => {
  const Icon = styled.img`
    height: 80px;
  `;

  return <Icon src="./img/cloudy.png" alt="Weather Icon" />;
};

export default Icon;
