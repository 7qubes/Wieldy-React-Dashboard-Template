import React from "react";

import TopLevelPanel from "./TopLevelPanel";
import TodayPanel from "./TodayPanel";
import CardPanel from "./CardPanel";

// just for editing
// import CostByPartsCard from "./GraphCardsColumn/CostByPartsCard";
// import FinishedItemOverTimeCard from "./GraphCardsColumn/FinishedItemOverTimeCard";
// import LineCardOne from "./LineIndicatorCardsColumn/LineCardOne";
// import LineCardTwo from "./LineIndicatorCardsColumn/LineCardTwo";
// import LineCardThree from "./LineIndicatorCardsColumn/LineCardThree";

const Home = () => {
  return (
    <div>
      <TopLevelPanel />
      <TodayPanel />
      <CardPanel />
      <div style={{ height: "5vh" }}></div>
    </div>
  );
};

export default Home;
