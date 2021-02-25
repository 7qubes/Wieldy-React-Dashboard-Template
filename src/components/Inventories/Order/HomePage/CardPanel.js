import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ActiveOrdersCard from "./OrderCards/ActiveOrdersCard";
import ProductOnHandCard from "./OrderCards/ProductOnHandCard";
import FulfilledCard from "./OrderCards/FulfilledCard";

const CardPanel = () => {
  return (
    <div>
      <CardPanelRow className="card-panel-row">
        <CardContainer className="card-container">
          <ActiveOrdersCard />
        </CardContainer>
        <CardContainer className="card-container">
          <ProductOnHandCard />
        </CardContainer>
        <CardContainer className="card-container">
          <FulfilledCard />
        </CardContainer>
      </CardPanelRow>
    </div>
  );
};

const CardPanelRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0.5rem;
  /* background: lightcoral; */
`;

const CardContainer = styled(motion.div)`
  margin: 0 1.5rem;
`;

export default CardPanel;
