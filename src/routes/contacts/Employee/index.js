import React from "react";
import {Col, Row} from "antd";
import About from "../../../components/profile/About/index";
import Events from "../../../components/profile/Events/index";
import Emergency from "../../../components/profile/Emergency";
import Contact from "../../../components/profile/Contact/index";
import Agreements from "../../../components/profile/Agreements";
import Training from "../../../components/profile/Training";
import Performance from "../../../components/profile/Performance";

import {friendList} from './data'
import Friends from "../../../components/profile/Friends/index";
import Auxiliary from "../../../util/Auxiliary";
import ProfileHeader from "../../../components/profile/ProfileHeader/index";


const Profile = () => {
  return (
    <Auxiliary>
      <ProfileHeader/>
      <div className="gx-profile-content">
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
      </div>
    </Auxiliary>
  );
};

export default Profile;


