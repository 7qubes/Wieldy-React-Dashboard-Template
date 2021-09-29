import React from "react";

import { Table, Switch, Radio, Form, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Lot Size - 2",
    dataIndex: "lotsize",
    width: 80,
    align: "center",
  },
  {
    title: "Lead Time",
    dataIndex: "leadtime",
    width: 80,
    align: "center",
  },
  {
    title: "On Hand",
    dataIndex: "onhand",
    width: 80,
    align: "center",
  },
  {
    title: "Allocated",
    dataIndex: "allocated",
    width: 80,
    align: "center",
  },
  {
    title: "Safety Stock",
    dataIndex: "safetystock",
    width: 80,
    align: "center",
  },
  {
    title: "Level Code",
    dataIndex: "levelcode",
    width: 80,
    align: "center",
  },
  {
    title: "Part Number",
    dataIndex: "partnumber",
    width: 80,
    align: "center",
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

class MRPTableOneTwo extends React.Component {
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

export default MRPTableOneTwo;
