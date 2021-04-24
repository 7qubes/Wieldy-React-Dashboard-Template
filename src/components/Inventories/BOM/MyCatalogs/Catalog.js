import React from "react";
// styling
import styled from "styled-components";

const Catalog = ({
  catalogs,
  isCatalogOpen,
  setIsCatalogOpen,
  openCatalogSKU,
}) => {
  setIsCatalogOpen([...isCatalogOpen, (isCatalogOpen[openCatalogSKU] = false)]);
  console.log(isCatalogOpen);

  return <TableRow></TableRow>;
};

const TableRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  /* transform: translateY(-1px); */
`;

export default Catalog;
