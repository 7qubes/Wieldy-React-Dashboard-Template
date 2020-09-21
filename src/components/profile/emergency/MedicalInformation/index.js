import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row} from "antd";

const FormItem = Form.Item;

const MedicalInformation = () => {
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Medical Information</span>
      </div>
      <div className="ant-card-body">
        <Col md={24} lg={24} xs={24} sm={24}>
          <FormItem>
            <Input placeholder='Primary Physician' style={{maxWidth: '98%'}}/>
          </FormItem>
          <FormItem>
            <Input placeholder='Medical Facility' style={{maxWidth: '98%'}}/>
          </FormItem>
          <FormItem>
            <Input placeholder='Address' style={{maxWidth: '98%'}}/>
          </FormItem>
        </Col>
      </div>
    </Widget>
  );
}

export default MedicalInformation;
