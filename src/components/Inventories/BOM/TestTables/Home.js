import React, { useState, useEffect } from "react";
// components
import TopLevelPanel from "../Common/TopLevelPanel";
import SecondaryLevelPanel from "./SecondaryLevelPanel";
import BriefInfoBar from "./BriefInfoBar";
import BOMTableData from "./BOMTableData";
import PayableVSReceivableSummaryTable from "./PayableVSReceivableSummaryTable";
import BillingScheduleTable from "./BillingScheduleTable";
import MaterialCostTable from "./MaterialCostTable";
import MRPTable from "./MRPTable";
import { findLastKey } from "lodash-es";

const Home = () => {
  // state
  const [activeSecondLevel, setActiveSecondLevel] = useState(
    "billing schedule"
  );

  // state - for Splitting table
  const [isTableSplit, setIsTableSplit] = useState({
    bom: false,
    materialCost: false,
    mrp: false,
    billingSchedule: false,
    payableVSReceivableSummary: false,
  });

  const resetSplit = () => {
    setIsTableSplit({
      bom: false,
      materialCost: false,
      mrp: false,
      billingSchedule: false,
      payableVSReceivableSummary: false,
    });
  };

  useEffect(() => {
    resetSplit();
  }, [activeSecondLevel]);

  return (
    <div>
      <TopLevelPanel
        activeSecondLevel={activeSecondLevel}
        setIsTableSplit={setIsTableSplit}
        isTableSplit={isTableSplit}
      />
      <SecondaryLevelPanel setActiveSecondLevel={setActiveSecondLevel} />
      <BriefInfoBar />
      {(() => {
        switch (activeSecondLevel) {
          case "bom":
            return <BOMTableData />;
          case "material cost":
            return <MaterialCostTable />;
          case "payables vs receivables summary":
            return <PayableVSReceivableSummaryTable />;
          case "billing schedule":
            return <BillingScheduleTable />;
          case "mrp":
            return <MRPTable />;
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
