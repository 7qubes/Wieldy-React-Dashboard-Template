import React from "react";
import {Card, Divider, Table} from "antd";
import Icon from '@ant-design/icons';

const columns = [
  {
    title: 'ID#',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Contractor',
    dataIndex: 'contractor',
    key: 'contractor',
    render: text => <span className="gx-link">{text}</span>,
  },
  {
    title: 'Doc',
    dataIndex: 'doc',
    key: 'doc',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    key: 'status',
    render: (text, record) => (
      <span>
      <span className="gx-link">Action 一 {record.name}</span>
      <Divider type="vertical"/>
      <span className="gx-link">Delete</span>
      <Divider type="vertical"/>
      <span className="gx-link ant-dropdown-link">
        More actions <Icon type="down"/>
      </span>
    </span>
    ),
  }
];

const data = [
  {
    key: '1',
    id: '4514',
    contractor: 'John Brown',
    doc: 32,
    type: 'New Hire',
  },
  {
    key: '2',
    id: '4514',
    contractor: 'Jim Green',
    doc: 42,
    type: 'New Hire',
  },
  {
    key: '3',
    id: '4514',
    contractor: 'Joe Black',
    doc: 32,
    type: 'New Hire',
  }
];

const AgreementsTable = () => {
  return (
    <Card title="Documents">
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default AgreementsTable;
