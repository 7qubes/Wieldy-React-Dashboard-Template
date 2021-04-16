import React, { useState, useEffect } from "react";
// components
import TopLevelPanel from "../Common/TopLevelPanel";
import SecondaryLevelPanel from "./SecondaryLevelPanel";
import BriefInfoBar from "./BriefInfoBar";
import BOMTableData from "./BOMTableData";
import PayableVSReceivableSummaryTable from "./PayableVSReceivableSummaryTable";
import BillingScheduleTable from "./BillingScheduleTable";
import MaterialCostTable from "./MaterialCostTable";

const Home = () => {
  // state
  const [activeSecondLevel, setActiveSecondLevel] = useState(
    "billing schedule"
  );
  return (
    <div>
      <TopLevelPanel />
      <SecondaryLevelPanel setActiveSecondLevel={setActiveSecondLevel} />
      <BriefInfoBar />
      {(() => {
        switch (activeSecondLevel) {
          case "bom":
            return <BOMTableData />;
          case "material cost":
            return <MaterialCostTable />;
          case "payable vs receivale summary":
            return <PayableVSReceivableSummaryTable />;
          case "billing schedule":
            return <BillingScheduleTable />;
          default:
            return <BOMTableData />;
        }
      })()}
      {/* {useEffect(() => {
        switch (activeSecondLevel) {
          case "bom":
            return <BOMTableData />;
          case "material cost":
            return <MaterialCostTable />;
          case "payable vs receivale summary":
            return <PayableVSReceivableSummaryTable />;
          case "billing schedule":
            return <BillingScheduleTable />;
          default:
            return <BOMTableData />;
        }
      }, [activeSecondLevel])} */}

      <div style={{ height: "5vh" }}></div>
    </div>
  );
};

export default Home;
