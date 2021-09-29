import React from "react";
// components
import MaterialCostTableFull from "./MaterialCostTableFull";
import MaterialCostTableSplitOne from "./MaterialCostTableSplitOne";
import MaterialCostTableSplitTwo from "./MaterialCostTableSplitTwo";

const MaterialCostTable = ({ isTableSplit }) => {
  return (
    <div>
      {(() => {
        switch (isTableSplit.materialCost) {
          case false:
            return <MaterialCostTableFull />;
          case true:
            return (
              <div>
                <MaterialCostTableSplitOne />{" "}
                <div style={{ height: "3vh" }}></div>
                <MaterialCostTableSplitTwo />
              </div>
            );
        }
      })()}
    </div>
  );
};

export default MaterialCostTable;
