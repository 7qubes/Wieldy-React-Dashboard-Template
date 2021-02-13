import React, { Component } from "react";
import CustomScrollbars from "util/CustomScrollbars";
import { Link } from "react-router-dom";

import AppModuleHeader from "components/AppModuleHeader/index";
class Home extends Component {
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
            <div className="gx-module-add-task">
              <Link
                className="gx-btn-block ant-btn"
                type="primary"
                aria-label="add"
                to="/analytics/action"
              >
                <i className="icon icon-add-circle gx-mr-1" />
                <span>Create New</span>
              </Link>
            </div>
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
export default Home;
