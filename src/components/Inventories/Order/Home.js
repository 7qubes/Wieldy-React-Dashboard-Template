import React from "react";

import TopLevelPanel from "./Common/TopLevelPanel";
import CardPanel from "./Common/CardPanel";
import OrdersTable from "./Vendors/OrdersTable";

const Home = () => {
  return (
    <div>
      <TopLevelPanel />
      <CardPanel />
      <OrdersTable />
    </div>
  );
};

export default Home;
