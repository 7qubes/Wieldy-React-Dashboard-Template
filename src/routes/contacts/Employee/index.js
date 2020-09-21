import React from "react";
import {Col, Row, Tabs} from "antd";
import About from "../../../components/profile/employee/About/index";
import Events from "../../../components/profile/employee/Events/index";
import Emergency from "../../../components/profile/employee/Emergency";
import Contact from "../../../components/profile/employee/Contact/index";
import Agreements from "../../../components/profile/employee/Agreements";
import Training from "../../../components/profile/employee/Training";
import Performance from "../../../components/profile/employee/Performance";

import {friendList} from './data'
import Friends from "../../../components/profile/employee/Friends/index";
import Auxiliary from "../../../util/Auxiliary";
import ProfileHeader from "../../../components/profile/employee/ProfileHeader/index";
import PersonalInformation from "../../../components/profile/emergency/PersonalInformation"
import MedicalInformation from "../../../components/profile/emergency/MedicalInformation"
const TabPane = Tabs.TabPane;

const Profile = () => {
  return (
    <Auxiliary>
      <ProfileHeader/>
      <div className="gx-profile-content">
        <Tabs defaultActiveKey="1">
          <TabPane tab="General" key="1" style={{fontColor: '#ffffff'}}>
            <Row>
              <Col xl={16} lg={14} md={14} sm={24} xs={24}>
                <About/>
                <Row>
                  <Col xl={16} lg={14} md={14} sm={24} xs={24}>
                    <Events/>
                  </Col>
                  <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                    <Emergency/>
                  </Col>
                </Row>
                <Row>
                  <Col xl={16} lg={14} md={14} sm={24} xs={24}>
                    <Agreements/>
                  </Col>
                  <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                    <Training/>
                  </Col>
                </Row>
              </Col>

              <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                <Contact/>
                <Row>
                  <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                    <Friends friendList={friendList}/>
                  </Col>
                  <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                    <Performance/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Emergency" key="2">
            <Row>
              <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                <PersonalInformation/>
              </Col>
              <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <Emergency/>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <MedicalInformation/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Agreements" key="3">
            <Row>

            </Row>
          </TabPane>
          <TabPane tab="Training" key="4">
            <Row>

            </Row>
          </TabPane>
          <TabPane tab="Performance" key="5">
            <Row>

            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Auxiliary>
  );
};

export default Profile;


