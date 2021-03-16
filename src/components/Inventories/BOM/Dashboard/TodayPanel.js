import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DatePicker, Space } from "antd";

const TodayPanel = ({ activeTimeFrame, setActiveTimeFrame, date, setDate }) => {
  // styles for the time frame boxes
  const timeFrameStyle = {
    activeBackground: "#4A9AF9",
    inactiveBackground: "#F5F6FA",
    activePTag: "#fff",
    inactivePTag: "#8c8c8c",
  };

  // function to change the styles of active/inactive time frame boxes
  const changeBGColor = (parentDiv) => {
    parentDiv.childNodes.forEach((child, index) => {
      if (index !== activeTimeFrame) {
        child.style.background = timeFrameStyle.inactiveBackground;
        child.childNodes[0].style.color = timeFrameStyle.inactivePTag;
      } else {
        child.style.background = timeFrameStyle.activeBackground;
        child.childNodes[0].style.color = timeFrameStyle.activePTag;
      }
    });
  };

  // Date picker function
  function onChange(date, dateString) {
    console.log(date, dateString);
    let year = dateString.slice(0, 4);
    let month = dateString.slice(5, 7);
    setDate({
      yearIndex: year,
      monthIndex: month - 1,
    });
    console.log(date);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // event handler
  const activeTimeFrameToggleHandler = (event) => {
    console.log(event.target);
    const activeDivClass = event.target.classList[2];
    const parentDiv = event.target.parentElement;

    switch (activeDivClass) {
      case "month-frame":
        setActiveTimeFrame(0);
        changeBGColor(parentDiv);
        break;
      case "week-frame":
        setActiveTimeFrame(1);
        changeBGColor(parentDiv);
        break;
      case "day-frame":
        setActiveTimeFrame(2);
        changeBGColor(parentDiv);
        break;
      default:
        setActiveTimeFrame(0);
    }
  };

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
            {date === null ? (
              <p>
                {months[new Date().getMonth()]}
                {new Date().getFullYear}
              </p>
            ) : (
              <p>
                {months[date.monthIndex]} {date.yearIndex}
              </p>
            )}
          </ShowDate>
        </DateContainer>
        <TimeFrameContainer
          className="time-frame-container"
          onClick={activeTimeFrameToggleHandler}
        >
          <MonthFramer className="month-frame">
            <p style={{ color: "#fff" }}>Month</p>
          </MonthFramer>
          <WeekFramer className="week-frame">
            <p>Week</p>
          </WeekFramer>
          <DayFramer className="day-frame">
            <p>Day</p>
          </DayFramer>
        </TimeFrameContainer>
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

const TimeFrameContainer = styled(motion.div)`
  width: 40%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  div {
    border: solid #8c8c8c 1px;
    padding: 5px 40px;
    /* :hover {
      background: #99c7ff;
    } */
    p {
      font-size: 10px;
      color: #8c8c8c;
      padding-top: 5px;
      pointer-events: none;
    }
  }
`;

const MonthFramer = styled(motion.div)`
  align-content: center;
  border-radius: 10px 0 0 10px;
  background: #4a9af9;
  p {
    color: white;
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
