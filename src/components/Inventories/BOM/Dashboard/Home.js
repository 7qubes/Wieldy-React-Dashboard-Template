import React, { useState } from "react";

import TopLevelPanel from "../Common/TopLevelPanel";
import TodayPanel from "../Common/TodayPanel";
import CardPanel from "./CardPanel";
import BottomPanel from "./BottomPanel";

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
      <CardPanel />
      <BottomPanel />
      <div style={{ height: "5vh" }}></div>
    </div>
  );
};

export default Home;
