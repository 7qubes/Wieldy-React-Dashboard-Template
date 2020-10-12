import React from "react";
import {Avatar, Button, Col, Row, Tabs} from "antd";
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
import PersonalInformation from "../../../components/profile/emergency/PersonalInformation"
import MedicalInformation from "../../../components/profile/emergency/MedicalInformation"
import AgreementsTable from "../../../components/Table/AgreementsTable";
import TrainingTable from "../../../components/Table/TrainingTable";
import PerformanceTable from "../../../components/Table/PerformanceTable";
import SweetAlert from "react-bootstrap-sweetalert";
import IntlMessages from "util/IntlMessages";
const TabPane = Tabs.TabPane;

class Profile extends React.Component {
  onConfirm = () => {
    this.setState({
      addProject: false,
      addEquipment: false,
    });
  };

  onCancel = () => {
    this.setState({
      addProject: false,
      addEquipment: false,
    })
  };


  constructor() {
    super();
    this.state = {
      addProject: false,
      addEquipment: false
    }
  }

  render() {
    const {addProject, addEquipment} = this.state;
    const url = `/contacts`;
    return (
      <Auxiliary>
        {/*<ProfileHeader/>*/}
        <div className="gx-profile-banner" style={{backgroundColor: '#6236FF'}}>
          <div className="gx-profile-container">
            <a href={url}>
              <i className="icon icon-arrow-left"/>
            </a>
            <div className="gx-profile-banner-top">
              <div className="gx-profile-banner-top-left">
                <div className="gx-profile-banner-avatar">
                  <Avatar className="gx-size-90" alt="..." src={"https://via.placeholder.com/150"}/>
                </div>
                <div className="gx-profile-banner-avatar-info">
                  <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">Kiley Brown</h2>
                  <p className="gx-mb-0 gx-fs-lg">Florida, USA</p>
                </div>
              </div>
              <div className="gx-profile-banner-top-right">
                <ul className="gx-follower-list">
                  <li>
                    <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                      <i className="icon icon-edit"/>
                    </span>
                    <span className="gx-fs-sm">Contact</span>
                  </li>
                  <li onClick={() => {this.setState({addProject: true})}}>
                    <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                      <i className="icon icon-add-circle"/>
                    </span>
                    <span className="gx-fs-sm">Project</span>
                  </li>
                  <li onClick={() => {this.setState({addEquipment: true})}}>
                    <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                      <i className="icon icon-add-circle"/>
                    </span>
                    <span className="gx-fs-sm">Equipment</span>
                  </li>
                  <li>
                    <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                      <i className="icon icon-setting"/>
                    </span>
                    <span className="gx-fs-sm">Setting</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*<div className="gx-profile-banner-bottom">*/}
            {/*  <span className="gx-link gx-profile-setting">*/}
            {/*    <i className="icon icon-setting gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>*/}
            {/*    <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">Setting</span>*/}
            {/*  </span>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="gx-profile-content">
          <Tabs defaultActiveKey="1" style={{color: '#ffffff'}}>
            <TabPane tab="General" key="1">
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
            <TabPane tab="Documents" key="3">
              <Row>
                <Col span={24}>
                  <AgreementsTable/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Training" key="4">
              <Row>
                <Col span={24}>
                  <TrainingTable/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Performance" key="5">
              <PerformanceTable/>
            </TabPane>
          </Tabs>
        </div>
        <SweetAlert show={addProject}
                    input
                    showCancel
                    cancelBtnBsStyle="default"
                    title={<IntlMessages id="sweetAlerts.addProject"/>}
                    inputPlaceHolder={<IntlMessages id="sweetAlerts.addProject"/>}
                    onConfirm={this.onConfirm}
                    onCancel={this.onCancel}
                    customClass="gx-sweet-alert-top-space"
        >
          <IntlMessages id="sweetAlerts.projectName"/>
        </SweetAlert>
        <SweetAlert show={addEquipment}
                    input
                    showCancel
                    cancelBtnBsStyle="default"
                    title={<IntlMessages id="sweetAlerts.addEquipment"/>}
                    inputPlaceHolder={<IntlMessages id="sweetAlerts.addEquipment"/>}
                    onConfirm={this.onConfirm}
                    onCancel={this.onCancel}
                    customClass="gx-sweet-alert-top-space"
        >
          <IntlMessages id="sweetAlerts.equipmentName"/>
        </SweetAlert>
      </Auxiliary>
    );
  }
};

export default Profile;


