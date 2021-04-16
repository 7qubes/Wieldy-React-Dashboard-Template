import React, { useState, useEffect } from "react";
// components
import Card from "./Card";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// BOM card data
import data from "./data/bomInfo.json";

const Cards = () => {
  const [bomData, setBOMData] = useState(data.bom);

  // window.addEventListener("click", console.log("window-click"));

  return (
    <CardsContainer>
      {bomData.map((data, index) => (
        <Card
          data={data}
          bomData={bomData}
          setBOMData={setBOMData}
          key={data.id}
          index={index}
        />
      ))}
    </CardsContainer>
  );
};

const CardsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Cards;
