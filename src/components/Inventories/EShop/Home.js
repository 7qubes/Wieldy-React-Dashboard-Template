import React, { useState } from "react";
// components
import TopLevelPanel from "../CommonOrdersEShop/TopLevelPanel";
import InventoryCard from "./InventoryCard";
import InventoryList from "./InventoryList";
import AddInventory from "./AddInventory";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// grid, list image
import gridIcon from "./image/grid-icon.svg";
import listIcon from "./image/list-icon.svg";
// data
import data from "./data/eshopInventory.json";

const Home = ({ filter, isAddNew }) => {
  // state for view switch
  const [isGrid, setIsGrid] = useState(false);

  // grid/list event handler
  const viewSwitchHandler = (event) => {
    if (event.target.parentElement.classList.contains("view-switcher")) {
      if (isGrid) {
        event.target.parentElement.firstChild.innerText = "View Grid";
        event.target.parentElement.children[1].src = gridIcon;
      } else {
        event.target.parentElement.firstChild.innerText = "View List";
        event.target.parentElement.children[1].src = listIcon;
      }
    }
    if (event.target.parentElement.classList.contains("view-switcher")) {
      setIsGrid(!isGrid);
    }
  };

  // filtering data in to available and sold based on the filterOption
  let eshopData = data.inventory.filter(
    (element) => element.blocks[0].status === filter.split(" ")[0]
  );
  if (filter === "Folders") {
    eshopData = data.inventory;
  }

  return (
    <div>
      <TopLevelPanel />
      <AddInventory isAddNew={isAddNew} />
      <ViewSwitcher onClick={viewSwitchHandler} className="view-switcher">
        <p>View Grid</p>
        <img src={gridIcon} alt="" />
      </ViewSwitcher>

      {!isGrid ? (
        eshopData.map((data) => <InventoryCard data={data} key={data.id} />)
      ) : (
        <InventoryList eshopData={eshopData} />
      )}
      <div style={{ height: "5vh" }}></div>
    </div>
  );
};

const ViewSwitcher = styled(motion.div)`
  width: 90%;
  margin: 0rem auto 0;
  display: flex;
  align-items: center;
  justify-content: end;
  p {
    cursor: pointer;
    padding: 1rem 0.5rem 0 0;
    font-weight: bold;
    color: #038fde;
    letter-spacing: 2px;
    font-size: 15px;
    user-select: none;
  }
  img {
    cursor: pointer;
  }
`;

export default Home;
