import React from "react";
import {Card, Divider, Table} from "antd";
import Icon from '@ant-design/icons';

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
  }
];

const data = [
  {
    key: '1',
    name: 'Name of Training',
    date: '10/10/2020',
    startDate: '08/10/2020',
    clearedDate: '08/25/2020',
    link: 'External Link'
  },
  {
    key: '2',
    name: 'Name of Training',
    date: '10/10/2020',
    startDate: '08/10/2020',
    clearedDate: '08/25/2020',
    link: 'External Link'
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
