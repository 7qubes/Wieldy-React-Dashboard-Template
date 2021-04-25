import React, { useState, useEffect } from "react";
import { Table, Tag, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { filter } from "lodash-es";

const primaryColor = ["#F7B500", "#933CCC", "#00BF9A"];
let colorLabel;

const columns = [
  {
    title: "Created",
    dataIndex: "created",
    key: "created",
    align: "center",
  },
  {
    title: "Part",
    dataIndex: "part",
    key: "part",
    align: "center",
  },
  {
    title: "Vendor",
    dataIndex: "vendor",
    key: "vendor",
    align: "center",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    align: "center",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
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
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    align: "center",
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
    vendor: "Walmart",
    quantity: "900",
    total: "$100.00",
    status: "in-transit",
    updated: "02/14/2021",
  },
  {
    key: "2",
    created: "01/05/2021",
    part: "Screw",
    vendor: "Target",
    quantity: "90",
    total: "$100.00",
    status: "received",
    updated: "02/14/2021",
  },
  {
    key: "3",
    created: "01/15/2021",
    part: "Screw",
    vendor: "ToysRUs",
    quantity: "1000",
    total: "$100.00",
    status: "unsent",
    updated: "02/14/2021",
  },
  {
    key: "4",
    created: "01/15/2021",
    part: "Screw",
    vendor: "Target",
    quantity: "1000",
    total: "$100.00",
    status: "in-transit",
    updated: "02/14/2021",
  },
];

const statusValues = ["unsent", "in-transt", "received"];
let rowIndex;
// Event Handler

// to identify the dropdown menu of which row has been selected/clicked
const labelChangeHandler = (event) => {
  rowIndex = event.target.parentElement.parentElement.dataset.rowKey - 1;
};

// to identify which menu item in a dropdown has been selected/clicked
const labelSelectorHandler = (event) => {
  let selectedMenuItem = event.key;
  // row data manipulation
  // setData([
  //   ...data,
  //   (data[rowIndex].status = statusValues[parseInt(selectedMenuItem)]),
  // ]);
};

const menu = (
  <Menu onClick={labelSelectorHandler}>
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

const OrdersTable = ({ filter }) => {
  const [selectionType, setSelectionType] = useState("checkbox");

  // filtering data according to the Secondary Level selection value
  let filteredData = data;
  if (filter.toLowerCase() === "all") {
    filteredData = data;
  } else {
    filteredData = [];
    data.forEach((d) => {
      if (d.vendor.toLowerCase() === filter.toLowerCase()) {
        filteredData.push(d);
      }
    });
  }

  console.log(filteredData);

  useEffect(() => {
    someFunction();
  }, []);

  const someFunction = () => {
    return (
      <Table
        pagination={false}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={filteredData}
        size={"middle"}
      />
    );
  };

  return <div>{someFunction()}</div>;
};

export default OrdersTable;
