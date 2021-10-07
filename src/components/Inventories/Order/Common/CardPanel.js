import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import OrdersCardOne from "./OrderCards/OrdersCardOne";
import OrdersCardTwo from "./OrderCards/OrdersCardTwo";
import OrdersCardThree from "./OrderCards/OrdersCardThree";

const CardPanel = ({ cardNameOne, cardNameTwo, cardNameThree }) => {
  return (
    <div>
      <CardPanelRow className="card-panel-row">
        <CardContainer className="card-container">
          <OrdersCardOne cardNameOne={cardNameOne} />
        </CardContainer>
        <CardContainer className="card-container">
          <OrdersCardTwo cardNameTwo={cardNameTwo} />
        </CardContainer>
        <CardContainer className="card-container">
          <OrdersCardThree cardNameThree={cardNameThree} />
        </CardContainer>
      </CardPanelRow>
    </div>
  );
};

const CardPanelRow = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0rem;
`;

const CardContainer = styled(motion.div)`
  margin: 0 0.5rem;
`;

export default CardPanel;
