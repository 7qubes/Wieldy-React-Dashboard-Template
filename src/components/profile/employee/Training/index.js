import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row, Checkbox} from "antd";

const FormItem = Form.Item

const Training = () => {
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Training</span>
      </div>
      <div className="ant-card-body">
        <Row><Checkbox>CPR 01/05/2020</Checkbox></Row>
        <Row><Checkbox>Compliance 01/05/2020</Checkbox></Row>
        <Row><Checkbox>New hire 01/05/2020</Checkbox></Row>
      </div>
    </Widget>
  );
}

export default Training;
