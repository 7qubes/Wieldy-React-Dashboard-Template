import React, { Component } from "react";
import CustomScrollbars from "util/CustomScrollbars";
// import { Link } from "react-router-dom";

import AppModuleHeader from "components/AppModuleHeader/index";
class Action extends Component {
  constructor() {
    super();
    this.state = {
      test: "Hello",
      user: {
        name: "Robert Johnson",
        email: "robert.johnson@example.com",
        avatar: "https://via.placeholder.com/150",
      },
      searchUser: "",
      drawerState: false,
    };
  }

  ContactSideBar = (user) => {
    return (
      <div className="gx-module-side">
        <div className="gx-module-side-header">
          <div className="gx-module-logo">
            <i className="icon icon-compose gx-mr-4" />
            <span>Analytics</span>
          </div>
        </div>

        <div className="gx-module-side-content">
          <CustomScrollbars className="gx-module-side-scroll">
            Hello World!
          </CustomScrollbars>
        </div>
      </div>
    );
  };

  updateContactUser(evt) {
    this.setState({
      searchUser: evt.target.value,
    });
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState,
    });
  }
  render() {
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(this.state.user)}
          </div>
          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <AppModuleHeader
                placeholder="Search Analytics"
                notification={false}
                apps={false}
                user={this.state.user}
                onChange={this.updateContactUser.bind(this)}
                value={this.state.searchUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Action;
