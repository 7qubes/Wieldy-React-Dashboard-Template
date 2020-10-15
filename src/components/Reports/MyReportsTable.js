import React from "react";
import {Card, Collapse, Divider, Table} from "antd";
import Icon from '@ant-design/icons';

const Panel = Collapse.Panel;

const customPanelStyle = {
  borderRadius: 4,
  border: 0,
  overflow: 'hidden',
};

const columns = [
  {
    title: 'ID#',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Sent By',
    dataIndex: 'sentBy',
    key: 'sentBy',
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
    render: () => (
      <Collapse bordered={false} expandIconPosition='right'>
        <Panel header="Signed" style={customPanelStyle}>
          <p><icon className='icon icon-eye'/> View</p>
          <p><icon className='icon icon-backtop'/> Export</p>
        </Panel>
      </Collapse>
    ),
  }
];

const data = [
  {
    key: '1',
    id: '4514',
    sentBy: 'John Brown',
    doc: 12,
    type: 'New Hire',
  },
  {
    key: '2',
    id: '4514',
    sentBy: 'Jim Green',
    doc: 12,
    type: 'New Hire',
  },
  {
    key: '3',
    id: '4514',
    sentBy: 'Joe Black',
    doc: 12,
    type: 'New Hire',
  }
];

const MyReportsTable = () => {
  return (
    <Card title="Documents">
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default MyReportsTable;