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
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Invoice',
    dataIndex: 'invoice',
    key: 'invoice',
    // render: text => <span className="gx-link">{text}</span>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    key: 'status',
    render: (text, record) => (
          <p><icon className='icon icon-check-square-o'/> Sent</p>
    ),
  }
];

const data = [
  {
    key: '1',
    date: '07/02/2020',
    invoice: 'AllState',
    amount: 861334,
  },
  {
    key: '2',
    date: '07/02/2020',
    invoice: 'AllState',
    amount: 861334,
  },
  {
    key: '3',
    date: '07/02/2020',
    invoice: 'AllState',
    amount: 861334,
  },
  {
    key: '4',
    date: '07/02/2020',
    invoice: 'AllState',
    amount: 861334,
  },
  {
    key: '5',
    date: '07/02/2020',
    invoice: 'AllState',
    amount: 861334,
  },
  {
    key: '6',
    date: '07/02/2020',
    invoice: 'AllState',
    amount: 861334,
  },
];

const InvoiceTable = () => {
  return (
    <Card>
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default InvoiceTable;
