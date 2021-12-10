import React, { useState } from "react";
import { Table, Tag, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Product Name",
    dataIndex: "productname",
    key: "productname",
    align: "center",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    align: "center",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    align: "center",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    align: "center",
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
    align: "center",
  },
  {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    align: "center",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    align: "center",
  },
  {
    title: "Primary Folder",
    dataIndex: "primaryfolder",
    key: "primaryfolder",
    align: "center",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const InventoryList = ({ eshopData }) => {
  const data = [];
  eshopData.map((singleData) => {
    const tempData = {
      key: singleData.id,
      productname: singleData.blocks[0].headline,
      type: singleData.blocks[0].type,
      quantity: singleData.blocks[0].quantity,
      price: singleData.blocks[0].price,
      notes: singleData.blocks[0].notes,
      tags: singleData.blocks[0].tags,
      rating: singleData.blocks[0].rating,
      primaryfolder: singleData.blocks[0].primaryFolder,
      size: singleData.blocks[0].size,
      status: singleData.blocks[0].status,
    };
    data.push(tempData);
  });

  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Table
        pagination={false}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        size={"middle"}
      />
    </div>
  );
};

export default InventoryList;