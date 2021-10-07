import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SecondaryLevelPanel = ({ setActiveSecondLevel }) => {
  // event handlers
  //////// switch the table on click on tabs
  let selected;
  const tableSwitchHandler = (event) => {
    if (event.target.classList.contains("item")) {
      selected = event.target.innerText.toLowerCase();
    } else if (event.target.classList.contains("panel-item")) {
      selected = event.target.firstChild.innerText.toLowerCase();
    }
    setActiveSecondLevel(selected);
  };
  return (
    <div>
      <MainPanel className="main-panel">
        <PanelItems className="panel-items" onClick={tableSwitchHandler}>
          <PanelItem className="panel-item">
            <p className="item">BOM</p>
          </PanelItem>
          <PanelItem>
            <p>|</p>
          </PanelItem>
          <PanelItem className="panel-item">
            <p className="item">Material Cost</p>
          </PanelItem>
          <PanelItem>
            <p>|</p>
          </PanelItem>
          <PanelItem className="panel-item">
            <p className="item">MRP</p>
          </PanelItem>
          <PanelItem>
            <p>|</p>
          </PanelItem>
          <PanelItem className="panel-item">
            <p className="item">Billing Schedule</p>
          </PanelItem>
          <PanelItem>
            <p>|</p>
          </PanelItem>
          <PanelItem className="panel-item">
            <p className="item">Payables vs Receivables Summary</p>
          </PanelItem>
        </PanelItems>
      </MainPanel>
    </div>
  );
};

const MainPanel = styled(motion.div)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #6236ff;
  color: white;
  height: 4vh;
  padding: 1px 1px;
  border-top: 1px solid #828181;
  overflow: hidden;
`;

const PanelItems = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PanelItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: lighter;
    font-size: 1rem;
    color: white;
    padding-top: 3px;
  }
  &:nth-child(odd) {
    cursor: pointer;
    padding: 0 20px;
    &:hover {
      background: #e8e8e8;
      p {
        color: #6236ff;
      }
    }
  }
  &:nth-child(even) {
    p {
      pointer-events: none;
      padding: 0;
    }
  }
`;

export default SecondaryLevelPanel;

{
  /* <div className="info-labels">
<div className="info-label">
  <p>Product Name</p>
</div>
<div className="info-label">
  <p>Assembly Name</p>
</div>
<div className="info-label">
  <p>Assembly Number</p>
</div>
<div className="info-label">
  <p>Approved By</p>
</div>
<div className="info-label">
  <p>Approved Date</p>
</div>
<div className="info-label">
  <p>Part Count</p>
</div>
<div className="info-label">
  <p>Total Cost</p>
</div>
</div>
<div className="info-contents">
<div className="info-content">
<h5>Bike WRXZ</h5>
</div>
<div className="info-content">
<h5>Age</h5>
</div>
<div className="info-content">
<h5>Bike WRXZ</h5>
</div>
<div className="info-content">
<h5>Bike WRXZ</h5>
</div>
<div className="info-content">
<h5>Bike WRXZ</h5>
</div>
<div className="info-content">
<h5>Bike WRXZ</h5>
</div>
</div> */
}
