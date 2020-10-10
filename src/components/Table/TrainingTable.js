import React from "react";
import {Card, Divider, Table, Collapse} from "antd";
import Icon from '@ant-design/icons';

const Panel = Collapse.Panel;

const columns = [
  {
    title: 'Name of Training',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date Due',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Date Started',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Date Cleared',
    dataIndex: 'clearedDate',
    key: 'clearedDate',
  },
  {
    title: 'External Link',
    dataIndex: 'link',
    key: 'link',
    render: () => (
      <Collapse bordered={false} expandIconPosition='right'>
        <Panel header="External Link" style={customPanelStyle}>
          <p className="gx-link">Link</p>
          <p>Username: 123456789</p>
          <p>Password: password</p>
        </Panel>
      </Collapse>
    )
  }
];

const customPanelStyle = {
  borderRadius: 4,
  border: 0,
  overflow: 'hidden',
};

const data = [
  {
    key: '1',
    name: 'Name of Training',
    date: '10/10/2020',
    startDate: '08/10/2020',
    clearedDate: '08/25/2020',
  },
  {
    key: '2',
    name: 'Name of Training',
    date: '10/10/2020',
    startDate: '08/10/2020',
    clearedDate: '08/25/2020',
  }
];

const TrainingTable = () => {
  return (
    <Card title="Training">
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default TrainingTable;
