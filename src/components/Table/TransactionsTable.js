import React from "react";
import {Card, Divider, Table} from "antd";
import Icon from '@ant-design/icons';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Transaction',
    dataIndex: 'transaction',
    key: 'transaction',
  },
  {
    title: 'Debit/Credit',
    dataIndex: 'card',
    key: 'card',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  }
];

const data = [
  {
    key: '1',
    date: '07/02/2020',
    transaction: 'invoice',
    card: '8613.34',
    balance: '2536.44'
  },
  {
    key: '2',
    date: '07/02/2020',
    transaction: 'invoice',
    card: '8613.34',
    balance: '2536.44'
  },
  {
    key: '3',
    date: '07/02/2020',
    transaction: 'invoice',
    card: '8613.34',
    balance: '2536.44'
  },
  {
    key: '4',
    date: '07/02/2020',
    transaction: 'invoice',
    card: '8613.34',
    balance: '2536.44'
  },
  {
    key: '5',
    date: '07/02/2020',
    transaction: 'invoice',
    card: '8613.34',
    balance: '2536.44'
  },
  {
    key: '6',
    date: '07/02/2020',
    transaction: 'invoice',
    card: '8613.34',
    balance: '2536.44'
  },
];

const TransactionsTable = () => {
  return (
    <Card>
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default TransactionsTable;
