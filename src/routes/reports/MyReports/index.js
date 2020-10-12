import React, {Component} from "react";
import {Card, Drawer, Col, Row} from "antd";
// import CustomScrollbars from "util/CustomScrollbars";

import AppModuleHeader from "components/AppModuleHeader/index";
// import IntlMessages from "util/IntlMessages";
// import UploadClick from "components/Upload/UploadClick";
// import FollowerGraph from "components/SocialMedia/FollowerGraph";
// import ReportBarChart from "components/Report/ReportBarChart";
import ReportsSideNav from "../../../components/Reports/ReportsSideNav";
import MyReportsTable from "../../../components/Reports/MyReportsTable";

let contactId = 723812738;

class StandardReports extends Component {

  constructor() {
    super();
    this.state = {
      noPaymentFoundMessage: 'No Payment found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: "https://via.placeholder.com/150"
      },
      searchUser: '',
      selectedContact: null,
      selectedContacts: 0,
    }
  }

  updateContactUser(evt) {
    this.setState({
      searchUser: evt.target.value,
    });
    this.filterContact(evt.target.value)
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            <ReportsSideNav/>
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <AppModuleHeader placeholder="Search Reports" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">
              <div className="gx-module-box-topbar" style={{backgroundColor: '#6236FF'}}>
                <h2 style={{color: '#ffffff'}}>My Reports</h2>
              </div>
              <Row>
                <Col md={24}>
                  <MyReportsTable/>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StandardReports;
