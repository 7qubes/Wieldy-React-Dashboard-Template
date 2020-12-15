import React from "react";
import TopLevelPanel from "./TopLevelPanel";
import SecondaryLevelPanel from "./SecondaryLevelPanel";
import BriefInfoBar from "./BriefInfoBar";
import TableData from "./TableData";

const TestTables = () => {
  return (
    <div>
      <div className="top-level-panel" style={{ background: "#F5F6FA" }}>
        <TopLevelPanel />
        <SecondaryLevelPanel />
        <BriefInfoBar />
        <div className="table-data">
          <TableData />
        </div>
        <div style={{ height: "5vh" }}></div>
      </div>
    </div>
  );
};

export default TestTables;
