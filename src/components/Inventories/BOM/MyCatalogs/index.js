// import React, { useState } from "react";
// // styling
// import styled from "styled-components";
// // components
// import TopLevelPanel from "../Common/TopLevelPanel";
// import Catalog from "./Catalog";

// const MyCatalogsHome = () => {
//   const [catalogs, setCatalogs] = useState([
//     {
//       sku: 123,
//       itemName: "ABC XYZ",
//       group: "ABC Group",
//       cost: "$22.99",
//       inStock: 10,
//     },
//     {
//       sku: 456,
//       itemName: "QWE RTY",
//       group: "DEF Group",
//       cost: "$33.99",
//       inStock: 7,
//     },
//     {
//       sku: 789,
//       itemName: "ASD FGH",
//       group: "GHI Group",
//       cost: "$44.99",
//       inStock: 2,
//     },
//   ]);

//   return (
//     <div>
//       <TopLevelPanel />
//       <MyCatalogsTable className="my-catalogs-table">
//         <TableHead className="table-head">
//           <p>SKU</p>
//           <p>Item Name</p>
//           <p>Group</p>
//           <p>Cost</p>
//           <p>In-Stock</p>
//         </TableHead>
//         {catalogs.map((catalog) => (
//           <Catalog catalog={catalog} />
//         ))}
//       </MyCatalogsTable>
//     </div>
//   );
// };

// const MyCatalogsTable = styled.div`
//   border: none;
//   border: 1px solid #dcdcdc;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   margin-top: 2rem;
// `;

// const TableHead = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   width: 100%;
//   padding: 1rem;
//   background: #e8e8e8;
//   border: 1px solid #dcdcdc;
// `;

// export default MyCatalogsHome;

import React, { useState } from "react";
import { Table } from "antd";
import Catalog from "./Catalog";

const MyCatalogsHome = () => {
  const [catalogs, setCatalogs] = useState([
    {
      sku: 123,
      itemName: "ABC XYZ",
      group: "ABC Group",
      cost: "$22.99",
      inStock: 10,
    },
    {
      sku: 456,
      itemName: "QWE RTY",
      group: "DEF Group",
      cost: "$33.99",
      inStock: 7,
    },
    {
      sku: 789,
      itemName: "ASD FGH",
      group: "GHI Group",
      cost: "$44.99",
      inStock: 2,
    },
  ]);

  const [isCatalogOpen, setIsCatalogOpen] = useState([]);
  const temp = [];
  catalogs.forEach((catalog) => {
    temp.push(false);
  });
  setIsCatalogOpen(temp);

  const expandedRowRender = (event) => {
    console.log("Hello event ", event.sku);
    const openCatalogSKU = event.sku;

    //   inside data
    const data = [];
    // for (let i = 0; i < 3; ++i) {
    //   data.push({
    //     key: i,
    //     date: "2014-12-24 23:12:00",
    //     name: "This is production name",
    //     upgradeNum: "Upgraded: 56",
    //   });
    // }

    // return <Table dataSource={data} pagination={false} />;
    return (
      <Catalog
        catalogs={catalogs}
        isCatalogOpen={isCatalogOpen}
        setIsCatalogOpen={setIsCatalogOpen}
        openCatalogSKU={openCatalogSKU}
      />
    );
  };

  const columns = [
    { title: "SKU", dataIndex: "sku", key: "sku" },
    { title: "Item Name", dataIndex: "itemName", key: "itemName" },
    { title: "Group", dataIndex: "group", key: "group" },
    { title: "Cost", dataIndex: "cost", key: "cost" },
    { title: "In-Stock", dataIndex: "inStock", key: "inStock" },
  ];

  // outside Data
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      sku: i,
      itemName: "Some Item Name",
      group: `Group - ${i}`,
      cost: `$2${i}.99`,
      inStock: `1${i}`,
    });
  }

  return (
    <div>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandable={{ expandedRowRender }}
        dataSource={data}
      />
    </div>
  );
};

export default MyCatalogsHome;
