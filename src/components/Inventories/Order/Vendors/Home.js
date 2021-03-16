import React from "react";

import TopLevelPanel from "../Common/TopLevelPanel";
import CardPanel from "../Common/CardPanel";
import OrdersTable from "./OrdersTable";

const Home = () => {
  const cardNameOne = "ACTIVE ORDERS";
  const cardNameTwo = "Product On-Hand";
  const cardNameThree = "FULFILLED";
  return (
    <div>
      <TopLevelPanel />
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
