import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row} from "antd";
// import EventItem from "./EventItem";
// import {eventList} from "../../../../routes/socialApps/Profile/data"

const FormItem = Form.Item;

const Events = () => {
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">General Information</span>
      </div>
      <div className="ant-card-body">
        <Row>
          <Col xl={12} md={12} xs={24} sm={24} lg={12}>
            <FormItem>
              <Input placeholder='First Name' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Day of birth' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Marital status' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Tax file number' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Address' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='State' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Work phone' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Work email' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='LinkedIn' style={{maxWidth: '98%'}}/>
            </FormItem>
          </Col>
          <Col xl={12} md={12} xs={24} sm={24} lg={12}>
            <FormItem>
              <Input placeholder='Last Name' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Gender' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='SSN' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Shirt size' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='City' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Zipcode' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Cellphone' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Personal email' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Facebook' style={{maxWidth: '98%'}}/>
            </FormItem>
          </Col>
        </Row>
      </div>
    </Widget>
  );
}

export default Events;
