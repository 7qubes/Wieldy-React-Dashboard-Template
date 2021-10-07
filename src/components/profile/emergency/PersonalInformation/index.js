import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row} from "antd";

const FormItem = Form.Item;

const PersonalInformation = () => {
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Personal Information</span>
      </div>
      <div className="ant-card-body">
        <Row>
          <Col xl={12} md={12} xs={24} sm={24} lg={12}>
            <FormItem>
              <Input placeholder='First Name' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Medical Conditions' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Allergies & Reactions' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Blood Type' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Weight' style={{maxWidth: '98%'}}/>
            </FormItem>
          </Col>
          <Col xl={12} md={12} xs={24} sm={24} lg={12}>
            <FormItem>
              <Input placeholder='Date of Birth' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Medical Notes' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Medications' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Organ Donor' style={{maxWidth: '98%'}}/>
            </FormItem>
            <FormItem>
              <Input placeholder='Height' style={{maxWidth: '98%'}}/>
            </FormItem>
          </Col>
        </Row>
      </div>
    </Widget>
  );
}

export default PersonalInformation;
