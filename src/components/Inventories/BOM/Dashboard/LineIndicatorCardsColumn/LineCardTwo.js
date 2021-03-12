import React from "react";
import LineIndicator from "./LineIndicator";
import styled from "styled-components";
import { motion } from "framer-motion";

const LineCardTwo = () => {
  return (
    <div>
      <CardBody className="gx-site-dash gx-mb-2 gx-pt-3 gx-pb-3 gx-pt-xl-2">
        <CardList className="gx-line-indicator">
          <ListItem>
            <h6 className="gx-text-uppercase">Cost Per Part</h6>
            <LineIndicator
              width="78%"
              title="AVG"
              secondTitle="$5 U.S. DOLLAR"
              color="#038FDE"
              value="78%"
            />
          </ListItem>
          <LineBreaker className="line-breaker"></LineBreaker>
          <ListItem>
            <h6 className="gx-text-uppercase">Cost Per Labor Hours</h6>
            <LineIndicator
              width="18%"
              title="SUM"
              secondTitle="$10 U.S. DOLLAR"
              color="#EB2F96"
              value="18%"
            />
          </ListItem>
        </CardList>
      </CardBody>
    </div>
  );
};

const CardBody = styled(motion.div)`
  background: white;
  font-family: "Poppins", sans-serif;
  margin-left: 20px;
  box-shadow: 1px 1px 8px #c9c9c9;
  border-radius: 10px;
  overflow: hidden;
`;

const CardList = styled(motion.div)`
  margin: 10px;
  /* padding-left: 50px; */
`;

const LineBreaker = styled(motion.div)`
  width: 100%;
  height: 2px;
  background: #d9d9d9;
  margin: 20px 0;
`;

const ListItem = styled(motion.div)`
  padding-left: 30px;
  h6 {
    padding-bottom: 2px;
  }
`;

export default LineCardTwo;
