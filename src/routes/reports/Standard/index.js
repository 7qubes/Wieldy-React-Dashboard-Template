import React, {Component} from "react";
import {Card, Drawer, Col, Row} from "antd";
import CustomScrollbars from "util/CustomScrollbars";

import AppModuleHeader from "components/AppModuleHeader/index";
import IntlMessages from "util/IntlMessages";
import UploadClick from "components/Upload/UploadClick";
import FollowerGraph from "components/SocialMedia/FollowerGraph";
import ReportBarChart from "components/Report/ReportBarChart";
import ReportsSideNav from "../../../components/Reports/ReportsSideNav";

let contactId = 723812738;

class StandardReports extends Component {

  // ContactSideBar = (user) => {
  //   return <div className="gx-module-side">
  //     <div className="gx-module-side-header">
  //       <div className="gx-module-logo">
  //         <i className="icon icon-compose gx-mr-4"/>
  //         <span><IntlMessages id="chat.reports"/></span>
  //       </div>
  //     </div>
  //
  //     <div className="gx-module-side-content">
  //       <CustomScrollbars className="gx-module-side-scroll">
  //         <div className="gx-module-side-nav" style={{marginTop: '30px'}}>
  //           <UploadClick/>
  //           <ul className="gx-module-nav">
  //             {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
  //                 <span
  //                   className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
  //                   this.onFilterOptionSelect.bind(this, option)
  //                 }>
  //                   <i className={`icon icon-${option.icon}`}/>
  //                   <span>{option.name}</span>
  //                 </span>
  //               </li>
  //             )}
  //           </ul>
  //         </div>
  //       </CustomScrollbars>
  //     </div>
  //   </div>
  //
  // };
  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All Payees': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allContact
        });
        break;
      }
      case 'Frequently contacted': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allContact.filter((contact) => contact.frequently)
        });
        break;
      }
      default:
        break;
    }
  };

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
    // const {
    //   user,
    //   drawerState,
    // } = this.state;

    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          {/*<div className="gx-d-block gx-d-lg-none">*/}
            {/*<Drawer*/}
            {/*  placement="left"*/}
            {/*  closable={false}*/}
            {/*  visible={drawerState}*/}
            {/*  onClose={this.onToggleDrawer.bind(this)}>*/}
            {/*  {this.ContactSideBar()}*/}
            {/*</Drawer>*/}
          {/*</div>*/}
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            <ReportsSideNav/>
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              {/*<span className="gx-drawer-btn gx-d-flex gx-d-lg-none">*/}
              {/*    <i className="icon icon-menu gx-icon-btn" aria-label="Menu"*/}
              {/*       onClick={this.onToggleDrawer.bind(this)}/>*/}
              {/*</span>*/}

              <AppModuleHeader placeholder="Search Reports" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">
              <div className="gx-module-box-topbar" style={{backgroundColor: '#6236FF'}}>
                <h2 style={{color: '#ffffff'}}>Standard Reports</h2>
              </div>
              <Row>
                <Col md={24}>
                  <Card className="gx-card" title="Simple with Gradient">
                    <FollowerGraph/>
                  </Card>
                  <Card className="gx-card" title="Gradient Bar Chart">
                    <ReportBarChart/>
                  </Card>
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
