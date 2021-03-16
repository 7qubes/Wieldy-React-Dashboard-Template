import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SecondaryLevelPanel = () => {
  return (
    <div>
      <SecondaryPanel className="secondary-panel">
        <PanelItems className="panel-items">
          <PanelItem className="panel-item">
            <h4>
              ALL (180)<span>|</span>
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              WALMART (90)<span>|</span>
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              TARGET (60)<span>|</span>
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>TOYSRUS (30)</h4>
          </PanelItem>
        </PanelItems>
      </SecondaryPanel>
    </div>
  );
};

const SecondaryPanel = styled(motion.div)`
  margin: 0;
  margin-top: 1px;
  padding: 0;
  box-sizing: border-box;
  background: #6236ff;
  color: white;
  height: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const PanelItems = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: stretch;
`;

const PanelItem = styled(motion.div)`
  cursor: pointer;
  /* background: lightcoral; */
  height: 100%;
  margin: 0 10px;

  h4 {
    font-size: 15px;
    color: white;
    font-weight: lighter;
    /* background: green; */
    margin: 0;
    span {
      margin-left: 15px;
    }
  }
  :hover {
    h4 {
      background: white;
      color: #6236ff;
    }
  }
`;

export default SecondaryLevelPanel;
