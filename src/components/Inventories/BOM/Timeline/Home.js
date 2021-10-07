import React, { useState } from "react";
// components
import TopLevelPanel from "../Common/TopLevelPanel";
import TodayPanel from "../Common/TodayPanel";
import TimelineData from "./TimelineData";

const Home = () => {
  // states
  const [activeTimeFrame, setActiveTimeFrame] = useState();
  const [date, setDate] = useState({
    yearIndex: new Date().getFullYear(),
    monthIndex: new Date().getMonth(),
  });
  return (
    <div>
      <TopLevelPanel />
      <TodayPanel
        activeTimeFrame={activeTimeFrame}
        setActiveTimeFrame={setActiveTimeFrame}
        date={date}
        setDate={setDate}
      />
      <TimelineData />
      <div style={{ height: "5vh" }}></div>
    </div>
  );
};

export default Home;
