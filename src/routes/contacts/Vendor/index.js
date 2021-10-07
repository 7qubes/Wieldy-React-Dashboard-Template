import React from "react";
import {Avatar, Col, Input, Row, Form} from "antd";

import Auxiliary from "../../../util/Auxiliary";
import Widget from "components/Widget/index";

const FormItem = Form.Item;

const Vendor = () => {
  const url = `/contacts`;
  const avatar = require('assets/images/avatar.jpg');

  return (
    <Auxiliary>
      <div className="gx-profile-banner" style={{backgroundColor: '#933CCC'}}>
        <div className="gx-profile-container">
          <a href={url}>
            <i className="icon icon-arrow-left"/>
          </a>
          <div className="gx-profile-banner-top">
            <div className="gx-profile-banner-top-left">
              <div className="gx-profile-banner-avatar">
                <Avatar className="gx-size-90" alt="..." src={avatar}/>
              </div>
              <div className="gx-profile-banner-avatar-info">
                <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">Kiley Brown</h2>
                <p className="gx-mb-0 gx-fs-lg">Vendor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gx-profile-content">
        <Row>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
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
                  </Col>
                  <Col xl={12} md={12} xs={24} sm={24} lg={12}>
                    <FormItem>
                      <Input placeholder='Last Name' style={{maxWidth: '98%'}}/>
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
                  </Col>
                </Row>
              </div>
            </Widget>
            <Widget styleName="gx-card-profile">
              <div className="ant-card-head">
                <span className="ant-card-head-title gx-mb-1">Subcriptions</span>
              </div>
              <div className="ant-card-body">
                <Row>
                  <Col xl={8} md={8} xs={24} sm={24} lg={8}>
                    <span><i className='icon icon-contact'/> Gold @ $200/yr</span>
                  </Col>
                  <Col xl={8} md={8} xs={24} sm={24} lg={8}>
                    <span>Renews 10/20/2021</span>
                  </Col>
                  <Col xl={8} md={8} xs={24} sm={24} lg={8}>
                    <span>Cancel Subscription</span>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Widget styleName="gx-card-profile">
              <div className="ant-card-head">
                <span className="ant-card-head-title gx-mb-1">Billing</span>
              </div>
              <div className="ant-card-body">
                <Row>
                  <Col xl={8} md={8} xs={24} sm={24} lg={8}>
                    <FormItem>
                      <Input placeholder='Card' style={{maxWidth: '98%'}}/>
                    </FormItem>
                  </Col>
                  <Col xl={8} md={8} xs={24} sm={24} lg={8}>
                    <FormItem>
                      <Input placeholder='Expiration Date' style={{maxWidth: '98%'}}/>
                    </FormItem>
                  </Col>
                  <Col xl={8} md={8} xs={24} sm={24} lg={8}>
                    <FormItem>
                      <Input placeholder='CVV' style={{maxWidth: '98%'}}/>
                    </FormItem>
                  </Col>
                  <Col xl={12} md={12} xs={24} sm={24} lg={12}>
                    <FormItem>
                      <Input placeholder='Address' style={{maxWidth: '98%'}}/>
                    </FormItem>
                    <FormItem>
                      <Input placeholder='State' style={{maxWidth: '98%'}}/>
                    </FormItem>
                    <FormItem>
                      <Input placeholder='Work phone' style={{maxWidth: '98%'}}/>
                    </FormItem>
                  </Col>
                  <Col xl={12} md={12} xs={24} sm={24} lg={12}>
                    <FormItem>
                      <Input placeholder='City' style={{maxWidth: '98%'}}/>
                    </FormItem>
                    <FormItem>
                      <Input placeholder='Zipcode' style={{maxWidth: '98%'}}/>
                    </FormItem>
                    <FormItem>
                      <Input placeholder='Cellphone' style={{maxWidth: '98%'}}/>
                    </FormItem>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    </Auxiliary>
  );
};

export default Vendor;


