import React from "react";

import TopLevelPanel from "./TopLevelPanel";
import TodayPanel from "./TodayPanel";
import CardPanel from "./CardPanel";

const Home = () => {
  return (
    <div>
      <TopLevelPanel />
      <TodayPanel />
      <CardPanel />
    </div>
  );
};

export default Home;
