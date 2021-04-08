import React from "react";
// components
import TopLevelPanel from "../Common/TopLevelPanel";
import SecondaryLevelPanel from "./SecondaryLevelPanel";
import BriefInfoBar from "./BriefInfoBar";
import TableData from "./TableData";

const Home = () => {
  return (
    <div>
      <TopLevelPanel />
      <SecondaryLevelPanel />
      <BriefInfoBar />
      <TableData />
      <div style={{ height: "5vh" }}></div>
    </div>
  );
};

export default Home;
