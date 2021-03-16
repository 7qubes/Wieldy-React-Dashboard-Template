import React from "react";

import TopLevelPanel from "../Common/TopLevelPanel";
import SecondaryLevelPanel from "../Common/SecondaryLevelPanel";
import CardPanel from "../Common/CardPanel";
import OrdersTable from "./OrdersTable";

const Home = () => {
  const cardNameOne = "ACTIVE ORDERS";
  const cardNameTwo = "COST OF MATERIALS";
  const cardNameThree = "EXPECTED RETURN";
  return (
    <div>
      <TopLevelPanel />
      <SecondaryLevelPanel />
      <CardPanel
        cardNameOne={cardNameOne}
        cardNameTwo={cardNameTwo}
        cardNameThree={cardNameThree}
      />
      <OrdersTable />
    </div>
  );
};

export default Home;
