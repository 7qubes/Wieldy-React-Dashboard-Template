import React from "react";

import { Table, Switch, Radio, Form, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Period",
    dataIndex: "period",
    width: 150,
    align: "center",
    fixed: "left",
  },
  {
    title: "Period - 1",
    dataIndex: "period1",
    width: 60,
    align: "center",
  },
  {
    title: "Period - 2",
    dataIndex: "period2",
    width: 60,
    align: "center",
  },
  {
    title: "Period - 3",
    dataIndex: "period3",
    width: 60,
    align: "center",
  },
  {
    title: "Period - 4",
    dataIndex: "period4",
    width: 60,
    align: "center",
  },
  {
    title: "Period - 5",
    dataIndex: "period5",
    width: 60,
    align: "center",
  },
  {
    title: "Period - 6",
    dataIndex: "period6",
    width: 60,
    align: "center",
  },
  {
    title: "Period - 7",
    dataIndex: "period7",
    width: 60,
    align: "center",
  },
  {
    title: "Period - 8",
    dataIndex: "period8",
    width: 60,
    align: "center",
  },
];

const data = [];
const rowHeads = [
  "Gross Requirements",
  "Scheduled Receipts",
  "Units On Hand",
  "Net Requirement",
  "Planned Order Receipts",
  "Planned Order Releaded",
];
for (let i = 0; i <= 5; i++) {
  data.push({
    key: i,
    period: rowHeads[i],
  });
}

const showHeader = true;

class MRPTableTwoOne extends React.Component {
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

export default MRPTableTwoOne;
