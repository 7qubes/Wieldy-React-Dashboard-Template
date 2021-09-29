import React, { useState } from "react";
// components
import DropDownPanel from "./DropDownPanel";
// first set of table
import MRPTableOneOne from "./MRPTablesOne/MRPTableOneOne";
import MRPTableOneTwo from "./MRPTablesOne/MRPTableOneTwo";
import MRPTableOneThree from "./MRPTablesOne/MRPTableOneThree";
// second set of table
import MRPTableTwoOne from "./MRPTablesTwo/MRPTableTwoOne";
import MRPTableTwoTwo from "./MRPTablesTwo/MRPTableTwoTwo";
import MRPTableTwoThree from "./MRPTablesTwo/MRPTableTwoThree";

const MRPTable = () => {
  //state
  const [table, setTable] = useState({ first: "0", second: "0" }); //tables will run zero indexed
  return (
    <div>
      <DropDownPanel setTable={setTable} table={table} />
      {(() => {
        switch (table.first) {
          case "0":
            return <MRPTableOneOne />;
          case "1":
            return <MRPTableOneTwo />;
          case "2":
            return <MRPTableOneThree />;
          default:
            return <MRPTableOneOne />;
        }
      })()}
      <div style={{ height: "3vh" }}></div>
      {(() => {
        switch (table.second) {
          case "0":
            return <MRPTableTwoOne />;
          case "1":
            return <MRPTableTwoTwo />;
          case "2":
            return <MRPTableTwoThree />;
          default:
            return <MRPTableTwoOne />;
        }
      })()}
    </div>
  );
};

export default MRPTable;
