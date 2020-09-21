import React from "react";

import Widget from "components/Widget/index";
import {Card, Input, Form} from "antd";
// import EventItem from "./EventItem";
import {eventList} from "../../../../routes/socialApps/Profile/data"

const FormItem = Form.Item;

const Emergency = () => {
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Emergency</span>
      </div>
      <div className="ant-card-body">
        <FormItem>
          <Input placeholder='First Name' />
        </FormItem>
        <FormItem>
          <Input placeholder='Last Name' />
        </FormItem>
        <FormItem>
          <Input placeholder='Relationship' />
        </FormItem>
        <FormItem>
          <Input placeholder='Work email' />
        </FormItem>
        <FormItem>
          <Input placeholder='Mobile' />
        </FormItem>
        <FormItem>
          <Input placeholder='Email' />
        </FormItem>
      </div>
    </Widget>
  );
}

export default Emergency;
