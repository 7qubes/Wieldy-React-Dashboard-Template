import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import CostByPartsCard from "./GraphCardsColumn/CostByPartsCard";
import FinishedItemOverTimeCard from "./GraphCardsColumn/FinishedItemOverTimeCard";
import LineCardOne from "./LineIndicatorCardsColumn/LineCardOne";
import LineCardTwo from "./LineIndicatorCardsColumn/LineCardTwo";
import LineCardThree from "./LineIndicatorCardsColumn/LineCardThree";

const BottomPanel = () => {
  return (
    <div>
      <Container className="container">
        <GraphCardsContainer className="graph-cards-container">
          <CostByPartsCard />
          <FinishedItemOverTimeCard />
        </GraphCardsContainer>
        <LineCardContainer className="line-cards-container">
          <LineCardOne />
          <LineCardTwo />
          <LineCardThree />
        </LineCardContainer>
      </Container>
    </div>
  );
};

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 10px;
`;

const GraphCardsContainer = styled(motion.div)`
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LineCardContainer = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default BottomPanel;
