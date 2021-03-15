import React, { useState } from "react";

import TopLevelPanel from "./TopLevelPanel";
import TodayPanel from "./TodayPanel";
import CardPanel from "./CardPanel";
import BottomPanel from "./BottomPanel";

// just for editing
// import CostByPartsCard from "./GraphCardsColumn/CostByPartsCard";
// import FinishedItemOverTimeCard from "./GraphCardsColumn/FinishedItemOverTimeCard";
// import LineCardOne from "./LineIndicatorCardsColumn/LineCardOne";
// import LineCardTwo from "./LineIndicatorCardsColumn/LineCardTwo";
// import LineCardThree from "./LineIndicatorCardsColumn/LineCardThree";

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
