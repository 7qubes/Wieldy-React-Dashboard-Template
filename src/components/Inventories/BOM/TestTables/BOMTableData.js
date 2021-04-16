import React from "react";

import { Table, Switch, Radio, Form, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "BOM ID",
    dataIndex: "bomid",
    fixed: "left",
    width: 100,
    align: "center",
  },
  {
    title: "Inventory ID",
    dataIndex: "inventoryid",
    width: 150,
    align: "center",
  },
  {
    title: "Level",
    dataIndex: "level",
    width: 150,
    align: "center",
  },
  {
    title: "Part ID",
    dataIndex: "partid",
    width: 150,
    align: "center",
  },
  {
    title: "Description",
    dataIndex: "description",
    width: 150,
    align: "center",
  },
  {
    title: "Quantity Per Unit",
    dataIndex: "quantityperunit",
    width: 150,
    align: "center",
  },
  {
    title: "Type",
    dataIndex: "type",
    width: 150,
    align: "center",
  },
  {
    title: "Lot Size",
    dataIndex: "lotsize",
    width: 150,
    align: "center",
  },
  {
    title: "Lead Time",
    dataIndex: "leadtime",
    width: 150,
    align: "center",
  },
  {
    title: "Units",
    dataIndex: "units",
    width: 150,
    align: "center",
  },
  {
    title: "Payment Terms",
    dataIndex: "paymentterms",
    width: 150,
    align: "center",
  },
  {
    title: "Vendor ID",
    dataIndex: "vendorid",
    width: 150,
    align: "center",
  },
  {
    title: "Substitute Vendor",
    dataIndex: "substitutevendor",
    width: 150,
    align: "center",
  },
  {
    title: "Procurement ID",
    dataIndex: "procurementid",
    width: 150,
    align: "center",
  },
  {
    title: "labor Hours",
    dataIndex: "laborhours",
    width: 150,
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    width: 150,
    align: "center",
  },
  {
    title: "Date Updated",
    dataIndex: "dateupdated",
    width: 150,
    align: "center",
  },
  {
    title: "Modified By",
    dataIndex: "modifiedby",
    width: 150,
    align: "center",
  },

  {
    title: "Action",
    key: "action",
    align: "center",
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a className="ant-dropdown-link">
          More actions <DownOutlined />
        </a>
      </Space>
    ),
  },
];

const data = [];
// for (let i = 1; i <= 10; i++) {
//   data.push({
//     key: i,
//     name: "John Brown",
//     age: `${i}2`,
//     address: `New York No. ${i} Lake Park`,
//     description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
//   });
// }

const showHeader = true;

class BOMTableData extends React.Component {
  state = {
    bordered: true,
    pagination: false,
    size: "default",
    title: undefined,
    showHeader,

    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    top: "none",
    bottom: "none",
  };

  render() {
    const { xScroll, yScroll, ...state } = this.state;

    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = "100vw";
    }

    const tableColumns = columns.map((item) => ({
      ...item,
      ellipsis: state.ellipsis,
    }));
    if (xScroll === "fixed") {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = "right";
    }

    return (
      <div>
        <Table
          {...this.state}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={{ x: 1000, y: 1500 }}
        />
      </div>
    );
  }
}

export default BOMTableData;
