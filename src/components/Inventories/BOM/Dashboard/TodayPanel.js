import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DatePicker, Space } from "antd";
import styles from "./style/dashboardstyle.css";

const TodayPanel = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div>
      <MainPanel className="main-panel">
        <DateContainer className="date-container">
          <SelectDate className="select-date">
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
          </SelectDate>
          <ShowDate className="show-date">
            <p>February 2021</p>
          </ShowDate>
        </DateContainer>
        <FrameContainer className="frame-container">
          <MonthFramer className={styles.activeFrame}>
            <p>Month</p>
          </MonthFramer>
          <WeekFramer className="week-frame">
            <p>Week</p>
          </WeekFramer>
          <DayFramer className="day-frame">
            <p>Day</p>
          </DayFramer>
        </FrameContainer>
      </MainPanel>
    </div>
  );
};

const MainPanel = styled(motion.div)`
  width: 94%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DateContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
`;

const SelectDate = styled(motion.div)`
  padding-right: 1rem;
`;

const ShowDate = styled(motion.div)`
  padding-left: 1rem;
  font-size: 22px;
  padding-top: 20px;
  font-weight: 300;
`;

const FrameContainer = styled(motion.div)`
  width: 40%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  div {
    border: solid #8c8c8c 1px;
    padding: 5px 40px;
    p {
      font-size: 10px;
      color: #8c8c8c;
      padding-top: 5px;
    }
  }
`;

const MonthFramer = styled(motion.div)`
  align-content: center;
  border-radius: 10px 0 0 10px;
  background: #4a9af9;
  p {
    color: white !important;
  }
`;

const WeekFramer = styled(motion.div)`
  transform: translateX(-1px);
`;

const DayFramer = styled(motion.div)`
  transform: translateX(-2px);
  border-radius: 0 10px 10px 0px;
`;

export default TodayPanel;
