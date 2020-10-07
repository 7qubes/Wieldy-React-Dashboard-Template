import React from "react";
import {Form, Row, Col, Input, DatePicker} from "antd";
import Widget from "components/Widget/index";

const Search = Input.Search;

const CreateInvoice = () => {
  return (
    <Widget>
      <h2 className="gx-mb-3 gx-mb-xxl-4 gx-font-weight-light">Information about your customer</h2>
      <Form className="gx-form-row0 gx-mb-0">
        <div className="gx-mb-3">
          <Col md={24}>
            <Search placeholder="Enter a company name or SIREN" enterButton="Search" size="large"/>
          </Col>
        </div>
        <Row>
          <Col md={12}>
            <Input placeholder="Address"/>
          </Col>
          <Col md={12}>
            <Input placeholder="Email Address"/>
          </Col>
        </Row>
      </Form>
      <h3 className="gx-mb-3 gx-mb-xxl-4 gx-font-weight-light" style={{marginTop: '50px'}}>Invoice Details</h3>
      <Form className="gx-form-row0 gx-mb-0">
        <Row>
          <Col md={12}>
            <span>Issue Date</span>
            <DatePicker className="gx-mb-3 gx-w-100"/>
          </Col>
          <Col md={12}>
            <span>Due Date</span>
            <DatePicker className="gx-mb-3 gx-w-100"/>
          </Col>
        </Row>
        <Row className="gx-mb-3 gx-w-100">
          <Col md={12}>
            <span>Invoice No</span>
            <Input placeholder="Invoice Number"/>
          </Col>
          <Col md={12}>
            <span>Account No</span>
            <Input placeholder="Account Number"/>
          </Col>
        </Row>
        <Row className="gx-mb-3 gx-w-100">
          <Col md={6}>
            <span>Service</span>
            <Input placeholder="Service"/>
          </Col>
          <Col md={6}>
            <span>Cost</span>
            <Input placeholder="Cost"/>
          </Col>
          <Col md={6}>
            <span>Quantity</span>
            <Input placeholder="Quantity"/>
          </Col>
          <Col md={6}>
            <span>Tax</span>
            <Input placeholder="Tax"/>
          </Col>
        </Row>
        <Row className="gx-mb-3 gx-w-100">
          <Col md={6}>
            <span>Service</span>
            <Input placeholder="Service"/>
          </Col>
          <Col md={6}>
            <span>Cost</span>
            <Input placeholder="Cost"/>
          </Col>
          <Col md={6}>
            <span>Quantity</span>
            <Input placeholder="Quantity"/>
          </Col>
          <Col md={6}>
            <span>Tax</span>
            <Input placeholder="Tax"/>
          </Col>
        </Row>
        <Row className="gx-mb-3 gx-w-100">
          <Col md={24}>
            <a href='#'><span>+add service</span></a>
          </Col>
          <Col md={24} className="gx-text-right">
            <p>Tax Total: $480</p>
            <h2>Total: $14500</h2>
          </Col>
        </Row>
      </Form>
    </Widget>
  );
};

export default CreateInvoice;
