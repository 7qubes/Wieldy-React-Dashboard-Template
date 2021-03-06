import React, { useState } from "react";
import { Table, Tag, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

// importing styles
import styles from "./style/tableStyler.css";

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderid",
    key: "orderid",
  },
  {
    title: "Created",
    dataIndex: "created",
    key: "created",
  },
  {
    title: "Vendor",
    dataIndex: "vendor",
    key: "vendor",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    //This will be for fulfillment. Logic will be created later
    title: "Fulfillment",
    key: "fulfillment",
    dataIndex: "fulfillment",
    render: (fulfillment) => (
      <>
        {fulfillment.map((fulfill) => {
          let color = fulfill.length > 5 ? "geekblue" : "green";
          if (fulfill === "loser") {
            color = "volcano";
          }
          return (
            <Dropdown overlay={menu} trigger={["click"]}>
              <Tag color={color} key={fulfill}>
                {fulfill.toUpperCase()}
                <DownOutlined style={{ marginLeft: "5px" }} />
              </Tag>
            </Dropdown>
          );
        })}
      </>
    ),
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Expected Profit",
    dataIndex: "expectedprofit",
    key: "expectedprofit",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Dropdown overlay={menu} trigger={["click"]}>
        <Tag onClick={labelChanger()}>
          {status}
          <DownOutlined style={{ marginLeft: "5px" }} />
        </Tag>
      </Dropdown>
    ),
  },
  {
    title: "Updated",
    dataIndex: "updated",
    key: "updated",
  },
];
const data = [
  {
    key: "1",
    orderid: "132-456",
    created: "01/05/2021",
    vendor: "Walmart",
    amount: "N-90",
    fulfillment: ["Unfulfilled"],
    total: "$1000.00",
    expectedprofit: "$200.00",
    status: ["Unfulfilled"],
    updated: "02/14/2021",
  },
  {
    key: "2",
    orderid: "132-456",
    created: "01/05/2021",
    vendor: "Target",
    amount: "N-60",
    fulfillment: ["Unfulfilled"],
    total: "$1000.00",
    expectedprofit: "$200.00",
    status: ["Unfulfilled"],
    updated: "02/14/2021",
  },
  {
    key: "3",
    orderid: "132-456",
    created: "01/05/2021",
    vendor: "ToysRus",
    amount: "N-30",
    fulfillment: ["Unfulfilled"],
    total: "$1000.00",
    expectedprofit: "$200.00",
    status: ["Unfulfilled"],
    updated: "02/14/2021",
  },
];

// Event Handler
const labelChanger = (event) => {
  // console.log(event.key);
  // console.log(menu.props.children);
  console.log(event);
};

const menu = (
  <Menu>
    <Menu.Item key="0">Unfulfilled</Menu.Item>
    <Menu.Item key="1">Pending</Menu.Item>
    <Menu.Item key="2">Complete</Menu.Item>
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
      />
    </div>
  );
};

export default OrdersTable;
