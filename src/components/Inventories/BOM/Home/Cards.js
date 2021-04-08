import React, { useState, useEffect } from "react";
// components
import Card from "./Card";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// route
import { Link, useLocation } from "react-router-dom";
// BOM card data
import data from "./data/bomInfo.json";

const Cards = () => {
  const [bomData, setBOMData] = useState(data.bom);
  const location = useLocation();

  return (
    <Link to={`${location.pathname}/testtable`}>
      <CardsContainer>
        {bomData.map((data) => (
          <Card
            data={data}
            bomData={bomData}
            setBOMData={setBOMData}
            key={data.id}
          />
        ))}
      </CardsContainer>
    </Link>
  );
};

const CardsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Cards;
