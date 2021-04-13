import React, { useState } from "react";
import { Table, Tag, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const primaryColor = ["#F7B500", "#933CCC", "#00BF9A"];
let colorLabel;

const columns = [
  {
    title: "Created",
    dataIndex: "created",
    key: "created",
  },
  {
    title: "Part",
    dataIndex: "part",
    key: "part",
  },
  {
    title: "Vendor",
    dataIndex: "vendor",
    key: "vendor",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <>
        {(() => {
          switch (status) {
            case "unsent":
              colorLabel = primaryColor[0];
              break;
            case "in-transit":
              colorLabel = primaryColor[1];
              break;
            case "received":
              colorLabel = primaryColor[2];
              break;
            default:
              colorLabel = "#696969";
          }
        })()}
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          onClick={labelChangeHandler}
          style={{ cursor: "pointer" }}
        >
          <Tag color={colorLabel} key={status}>
            {status.toUpperCase()}
            <DownOutlined
              style={{ marginLeft: "5px", PointerEvents: "none" }}
            />
          </Tag>
        </Dropdown>
      </>
    ),
  },
  {
    title: "Updated",
    dataIndex: "updated",
    key: "updated",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",

    render: () => (
      <Space size="middle">
        <a href="#">ORDER</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    created: "01/10/2021",
    part: "Screw",
    vendor: "SCREWSRUS",
    quantity: "900",
    total: "$100.00",
    status: "in-transit",
    updated: "02/14/2021",
  },
  {
    key: "2",
    created: "01/05/2021",
    part: "Screw",
    vendor: "SCREWSRUS",
    quantity: "90",
    total: "$100.00",
    status: "received",
    updated: "02/14/2021",
  },
  {
    key: "3",
    created: "01/15/2021",
    part: "Screw",
    vendor: "SCREWSRUS",
    quantity: "1000",
    total: "$100.00",
    status: "unsent",
    updated: "02/14/2021",
  },
];

// Event Handler
const labelChangeHandler = (event) => {
  console.log(event.target);
  console.log("hello");
};

const labelSelectorHandler = (event) => {
  console.log(event.target);
};

const menu = (
  <Menu>
    <Menu.Item key="0">Unsent</Menu.Item>
    <Menu.Item key="1">In-Transit</Menu.Item>
    <Menu.Item key="2">Received</Menu.Item>
  </Menu>
);

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

const OrdersTable = () => {
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

export default OrdersTable;
