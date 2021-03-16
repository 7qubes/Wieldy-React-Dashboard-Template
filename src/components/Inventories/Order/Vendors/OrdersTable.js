import React, { useState } from "react";
import { Table, Tag, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const primaryColor = ["#F7B500", "#00BF9A", "#933CCC"];
let colorLabel;

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
        {(() => {
          switch (fulfillment) {
            case "unfulfilled":
              colorLabel = primaryColor[0];
              break;
            case "pending":
              colorLabel = primaryColor[1];
              break;
            case "complete":
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
          <Tag color={colorLabel} key={fulfillment}>
            {fulfillment.toUpperCase()}
            <DownOutlined style={{ marginLeft: "5px" }} />
          </Tag>
        </Dropdown>
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
      <>
        {(() => {
          switch (status) {
            case "unfulfilled":
              colorLabel = primaryColor[0];
              break;
            case "pending":
              colorLabel = primaryColor[1];
              break;
            case "complete":
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
];
const data = [
  {
    key: "1",
    orderid: "132-456",
    created: "01/05/2021",
    vendor: "Walmart",
    amount: "N-90",
    fulfillment: "unfulfilled",
    total: "$1000.00",
    expectedprofit: "$200.00",
    status: "unfulfilled",
    updated: "02/14/2021",
  },
  {
    key: "2",
    orderid: "132-456",
    created: "01/05/2021",
    vendor: "Target",
    amount: "N-60",
    fulfillment: "complete",
    total: "$1000.00",
    expectedprofit: "$200.00",
    status: "pending",
    updated: "02/14/2021",
  },
  {
    key: "3",
    orderid: "132-456",
    created: "01/05/2021",
    vendor: "ToysRus",
    amount: "N-30",
    fulfillment: "pending",
    total: "$1000.00",
    expectedprofit: "$200.00",
    status: "complete",
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
        size={"middle"}
      />
    </div>
  );
};

export default OrdersTable;