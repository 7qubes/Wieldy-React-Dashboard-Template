import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import OnHandProductCard from "./BOMDashboardCards/OnHandProductCard";
import TotalCostCard from "./BOMDashboardCards/TotalCostCard";
import TotalLeadTimeCard from "./BOMDashboardCards/TotalLeadTimeCard";

const CardPanel = () => {
  return (
    <div>
      <CardPanelRowTop className="card-panel-row">
        <CardContainer className="card-container">
          <OnHandProductCard />
        </CardContainer>
        <CardContainer className="card-container">
          <TotalCostCard />
        </CardContainer>
        <CardContainer className="card-container">
          <TotalLeadTimeCard />
        </CardContainer>
      </CardPanelRowTop>
    </div>
  );
};

const CardPanelRowTop = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0rem;
  /* background: lightcoral; */
`;

const CardContainer = styled(motion.div)`
  margin: 0 0.1rem;
`;

export default CardPanel;
