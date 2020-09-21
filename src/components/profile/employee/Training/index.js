import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row} from "antd";

const FormItem = Form.Item

const Training = () => {
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Training</span>
      </div>
      <div className="ant-card-body">
        <Row><i className="icon icon-check-square-o"/><p style={{marginLeft: '15px'}}>CPR 01/05/2020</p></Row>
        <Row><i className="icon icon-check-square-o"/><p style={{marginLeft: '15px'}}>Compliance 01/05/2020</p></Row>
        <Row><i className="icon icon-check-square-o"/><p style={{marginLeft: '15px'}}>New hire 01/05/2020</p></Row>
      </div>
    </Widget>
  );
}

export default Training;
