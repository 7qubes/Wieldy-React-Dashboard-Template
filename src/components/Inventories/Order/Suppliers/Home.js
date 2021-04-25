import React, { useState, useEffect } from "react";

import TopLevelPanel from "../../CommonOrdersEShop/TopLevelPanel";
import SecondaryLevelPanel from "../Common/SecondaryLevelPanel";
import CardPanel from "../Common/CardPanel";
import OrdersTable from "./OrdersTable";

const Home = () => {
  const cardNameOne = "ACTIVE ORDERS";
  const cardNameTwo = "COST OF MATERIALS";
  const cardNameThree = "EXPECTED RETURN";

  const [filter, setFilter] = useState("all");

  return (
    <div>
      <TopLevelPanel />
      <SecondaryLevelPanel setFilter={setFilter} />
      <CardPanel
        cardNameOne={cardNameOne}
        cardNameTwo={cardNameTwo}
        cardNameThree={cardNameThree}
      />
      <OrdersTable filter={filter} />
    </div>
  );
};

export default Home;
