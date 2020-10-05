import React from "react";
import {Button, Table, Form, Row, Col, Input, Tooltip, DatePicker} from "antd";

import Widget from "components/Widget/index";

const columns = [
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
    // render: text => <span className="gx-link">{text}</span>,
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Tax',
    dataIndex: 'tax',
    key: 'tax',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  }
];

const data = [
  {
    key: '1',
    service: 'Item1',
    cost: '$1300',
    quantity: 2,
    tax: 480,
    total: 1780
  },
  {
    key: '2',
    service: 'Item2',
    cost: '$1300',
    quantity: 2,
    tax: 480,
    total: 1780
  },
];

const DetailViewer = () => {
  return (
    <Widget styleName="gx-ch-capitalize gx-card-sm-px" extra={
      <div className="gx-list-inline gx-ml-auto gx-mb-0 gx-text-grey">
        <Tooltip title="Print">
          <i className="icon icon-backtop"/>
        </Tooltip>
      </div>
    } title={<h2 className="gx-text-capitalize gx-mb-0">
        Invoice Viewer</h2>
      }>
      <Form className="gx-form-row0 gx-mb-0">
        <Row className="gx-mb-3 gx-w-100">
          <Col md={24}>
            <h1 className="gx-text-primary">7QUBES</h1>
            <span>2012 Corporate Lane Suite 108</span>
            <span>Naperville IL 605478</span>
          </Col>
          <Col md={24} className="gx-text-right">
            <p>Invoice No. R-9087</p>
            <p>Account No. A-567245</p>
            <p>Invoice date: 05/26/2020</p>
            <p>Due date: 06/26/2020</p>
          </Col>
        </Row>
        <Row className="gx-mb-3 gx-w-100">
          <Col md={24} style={{marginBottom: '30px'}}>
            <Table className="gx-table-responsive" columns={columns} dataSource={data} pagination={false}/>
          </Col>
          <Col md={24} className="gx-text-right">
            <p>Total net price: $3456</p>
            <p>Tax: $3456</p>
            <p>Total gross price: $3456</p>
          </Col>
          <Col md={24} className="gx-text-left">
            <p>Late Payment fee: $50</p>
          </Col>
        </Row>
      </Form>
    </Widget>
  );
};

export default DetailViewer;
