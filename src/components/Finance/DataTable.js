import React from "react";
import {Card, Table} from "antd";

const columns = [
  {title: 'Common', dataIndex: 'common', key: 'common'},
  {title: 'OUTSTANDING', dataIndex: 'outstanding', key: 'outstanding'},
  {title: 'OWNERSHIP', dataIndex: 'ownership', key: 'ownership'},
  {title: 'FULLY DILUTED', dataIndex: 'fullyDiluted', key: 'fullyDiluted' },
  {title: 'OWNERSHIP', dataIndex: 'ownershipPercent', key: 'ownershipPercent' },
];

const data = [
  {
    key: 1,
    common: '18 certificates 15,000,000 authorized',
    outstanding: '11,567,123',
    ownership: '11,567,123',
    fullyDiluted: '11,567,123',
    ownershipPercent: '78.224%',
    children: [{
      key: 11,
      common: 'Jake Papas',
      outstanding: '',
      ownership: '11,567,123',
      fullyDiluted: '11,567,123',
      ownershipPercent: '78.224%',
      }, {
      key: 12,
      common: 'Jake Papas',
      outstanding: '',
      ownership: '11,567,123',
      fullyDiluted: '11,567,123',
      ownershipPercent: '78.224%',
    }],
  },
  {
    key: 2,
    common: '18 certificates 15,000,000 authorized',
    outstanding: '11,567,123',
    ownership: '11,567,123',
    fullyDiluted: '11,567,123',
    ownershipPercent: '78.224%',
    children: [{
      key: 11,
      common: 'Jake Papas',
      outstanding: '',
      ownership: '11,567,123',
      fullyDiluted: '11,567,123',
      ownershipPercent: '78.224%',
      }, {
      key: 12,
      common: 'Jake Papas',
      outstanding: '',
      ownership: '11,567,123',
      fullyDiluted: '11,567,123',
      ownershipPercent: '78.224%',
    }],
  },
  {
    key: 3,
    common: '18 certificates 15,000,000 authorized',
    outstanding: '11,567,123',
    ownership: '11,567,123',
    fullyDiluted: '11,567,123',
    ownershipPercent: '78.224%',
    children: [{
      key: 11,
      common: 'Jake Papas',
      outstanding: '',
      ownership: '11,567,123',
      fullyDiluted: '11,567,123',
      ownershipPercent: '78.224%',
      }, {
      key: 12,
      common: 'Jake Papas',
      outstanding: '',
      ownership: '11,567,123',
      fullyDiluted: '11,567,123',
      ownershipPercent: '78.224%',
    }],
  },
];

const DataTable = () => {
  return (
    <Card>
      <Table className="gx-table-responsive"
             columns={columns}
             dataSource={data}
             pagination={false}
             // showHeader={false}
      />
    </Card>
  );
};

export default DataTable;
