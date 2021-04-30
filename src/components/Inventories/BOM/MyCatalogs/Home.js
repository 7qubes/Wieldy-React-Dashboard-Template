import React from "react";
// components
import TopLevelPanel from "../Common/TopLevelPanel";
import Catalog from "./Catalog";
// styling
import styled from "styled-components";

const Home = () => {
  const catalogData = [
    {
      sku: 132456,
      itemName: "Skateboard",
      group: "Group A",
      cost: 80.0,
      inStock: 10,
    },
    {
      sku: 132456,
      itemName: "Skateboard",
      group: "Group A",
      cost: 80.0,
      inStock: 10,
    },
    {
      sku: 132456,
      itemName: "Skateboard",
      group: "Group A",
      cost: 80.0,
      inStock: 10,
    },
  ];
  return (
    <div>
      <TopLevelPanel />
      <CatalogContainer className="my-catalog-container">
        <CatalogRow className="catalog-row">
          <h4>SKU</h4>
          <h4>Item Name</h4>
          <h4>Group</h4>
          <h4>Cost</h4>
          <h4>In-Stock</h4>
        </CatalogRow>
        {catalogData.map((data) => (
          <Catalog data={data} />
        ))}
      </CatalogContainer>
    </div>
  );
};

const CatalogContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const CatalogRow = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* align-items: center;
  justify-content: space-around; */
  text-align: center;
  background: #e8e8e8;
  border: 1px solid #bfbfbf;
  border-radius: 6px 6px 0 0;
  padding: 1rem 0;
  margin: 1rem 0 -1px;
  h4 {
    flex-grow: 1;
  }
`;

export default Home;
