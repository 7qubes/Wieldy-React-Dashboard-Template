import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BriefInfoBar = () => {
  return (
    <div>
      <MainInfoBar className="main-info-bar">
        <InfoItems className="info-items">
          <InfoItem className="info-item">
            <p>Product Name</p>
            <h5>Bike WRXZ</h5>
          </InfoItem>
          <InfoItem className="info-item">
            <p>Assembly Name</p>
            <h5>Age 12-15</h5>
            <h5>Women's Bike</h5>
          </InfoItem>
          <InfoItem className="info-item">
            <p>Assembly Number</p>
            <h5>655830</h5>
          </InfoItem>
          <InfoItem className="info-item">
            <p>Approved By</p>
            <h5>John Smith</h5>
          </InfoItem>
          <InfoItem className="info-item">
            <p>Approved Date</p>
            <h5>Thursday</h5>
            <h5>May 28, 2020</h5>
          </InfoItem>
          <InfoItem className="info-item">
            <p>Part Count</p>
            <h5>7</h5>
          </InfoItem>
          <InfoItem className="info-item">
            <p>Total Cost</p>
            <h5>$96.98</h5>
          </InfoItem>
        </InfoItems>
      </MainInfoBar>
    </div>
  );
};

const MainInfoBar = styled(motion.div)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* height: 10vh; */
  padding: 0.5rem;
  margin: 1rem 2.5rem;
  background: #fafafa;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
`;

const InfoItems = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  p {
    margin-bottom: 0.3rem;
    color: #8c8c8c;
  }
  h5 {
    font-weight: 500;
    color: #484848;
  }
`;

export default BriefInfoBar;
