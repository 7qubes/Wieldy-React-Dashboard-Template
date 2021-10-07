import React from "react";
// components
import BOMTableFull from "./BOMTableFull";
import BOMTableSplitOne from "./BOMTableSplitOne";
import BOMTableSplitTwo from "./BOMTableSplitTwo";

const BOMTable = ({ isTableSplit }) => {
  return (
    <div>
      {(() => {
        switch (isTableSplit.bom) {
          case false:
            return <BOMTableFull />;
          case true:
            return (
              <div>
                <BOMTableSplitOne /> <div style={{ height: "3vh" }}></div>
                <BOMTableSplitTwo />
              </div>
            );
        }
      })()}
    </div>
  );
};

export default BOMTable;
