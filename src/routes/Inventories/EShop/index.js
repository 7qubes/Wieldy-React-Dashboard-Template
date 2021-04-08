import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Drawer,
  message,
  Col,
  Collapse,
  Typography,
  Space,
  Avatar,
} from "antd";
import { v4 as uuidv4 } from "uuid";

// import CustomScrollbars from "../../../../util/CustomScrollbars";
import CustomScrollbars from "../../../util/CustomScrollbars";
import IntlMessages from "../../../util/IntlMessages";
import { AntDesignOutlined, BehanceOutlined } from "@ant-design/icons";

// import TopLevelPanel from "../../../components/Inventories/Order/Common/TopLevelPanel";
// import CardPanel from "../../../components/Inventories/Order/Common/CardPanel";
// import OrdersTable from "../../../components/Inventories/Order/Vendors/OrdersTable";
import Home from "../../../components/Inventories/EShop/Home";

import AppModuleHeader from "components/AppModuleHeader/index";

const filterOptions = [
  {
    id: 1,
    name: "Available Inventory",
    icon: "filter",
  },
  {
    id: 2,
    name: "Sold Inventory",
    icon: "frequent",
  },
  {
    id: 3,
    name: "Folders",
    icon: "Catalog",
  },
];

// // creating a random array to test our BOMS
// const testArray = [
//   { value: 1, key: uuidv4() },
//   { value: 2, key: uuidv4() },
//   { value: 3, key: uuidv4() },
// ];

// consts for collapsible Active and All BOMs
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

// const for headings of collapsible
// const { Text, Link } = Typography;
// const { Title } = Typography;

class Orders extends Component {
  ContactSideBar = (user) => {
    return (
      <div className="gx-module-side">
        <div className="gx-module-side-header">
          <div className="gx-module-logo">
            <i className="icon icon-inventory gx-mr-4" />
            <span>
              <IntlMessages id="sidebar.inventories.eshop.heading" />
            </span>
          </div>
        </div>

        <div className="gx-module-side-content">
          <CustomScrollbars className="gx-module-side-scroll">
            <div className="gx-module-add-task">
              <Button
                className="gx-btn-block ant-btn"
                type="primary"
                aria-label="add"
                onClick={this.onAddContact}
              >
                <i className="icon icon-add gx-mr-1" />
                <span>Add New</span>
              </Button>
              <Button
                className="gx-btn-block ant-btn"
                style={{ width: "165px" }}
                aria-label="add"
                onClick={this.onAddContact}
              >
                <span>Upload</span>
              </Button>
            </div>
            <div className="gx-module-side-nav">
              <ul className="gx-module-nav">
                {filterOptions.map((option) => (
                  <li key={option.id} className="gx-nav-item">
                    <span
                      className={`gx-link ${
                        option.id === this.state.selectedSectionId
                          ? "active"
                          : ""
                      }`}
                      // onClick={this.onFilterOptionSelect.bind(this, option)}
                      // onClick={this.supplyVendorToggle.bind(option)}
                    >
                      <i className={`icon icon-${option.icon}`} />
                      <span
                        onClick={
                          (this.filterOptionHandler = this.filterOptionHandler.bind(
                            this
                          ))
                        }
                      >
                        {option.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </CustomScrollbars>
        </div>
      </div>
    );
  };

  filterOptionHandler = (event) => {
    const filterValue = event.target.innerText;
    if (filterValue) {
      this.setState({
        filter: filterValue,
      });
    }
  };

  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case "All BOM": {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          //   paymentList: this.state.allContact
        });
        break;
      }
      case "All Catalogs": {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          //   paymentList: this.state.allContact.filter((contact) => contact.frequently)
        });
        break;
      }
      default:
        break;
    }
  };

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState,
    });
  }

  constructor() {
    super();
    this.state = {
      // noPaymentFoundMessage: 'No Payment found in selected folder',
      // alertMessage: '',
      // showMessage: false,
      // selectedSectionId: 1,
      drawerState: false,
      // user: {
      //   name: 'Robert Johnson',
      //   email: 'robert.johnson@example.com',
      //   avatar: "https://via.placeholder.com/150"
      // },
      searchUser: "",
      // filterOption: 'All contacts',
      // allContact: paymentList,
      // paymentList: paymentList,
      // selectedContact: null,
      // selectedContacts: 0,
      // addPaymentState: false,
      filter: "Available Inventory",
    };
  }

  render() {
    const {
      user,
      // paymentList,
      // addPaymentState,
      drawerState,
      // selectedContacts,
      // alertMessage,
      // showMessage,
      // noPaymentFoundMessage
      filter,
    } = this.state;

    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}
            >
              {this.ContactSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
          </div>
          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                <i
                  className="icon icon-menu gx-icon-btn"
                  aria-label="Menu"
                  onClick={this.onToggleDrawer.bind(this)}
                />
              </span>

              {/* We need AppModuleHandler gere from src.components.AppModuleHandler.index.js
              But I am doing it temporarily by bringing the HTML code here and adjusting it just to show the results*/}
              {/* <AppModuleHeader placeholder="Search Mails"
                            notification={false}
                            apps={false}
                            onChange=""
                            value=""/> */}
              <div className="gx-module-box-header-inner">
                <div className="gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-none gx-d-sm-block">
                  <div className="gx-form-group">
                    <input
                      className="ant-input gx-border-0"
                      type="search"
                      placeholder="Search Mails..."
                    />
                    <span className="gx-search-icon gx-pointer">
                      <i className="icon icon-search" />
                    </span>
                  </div>
                </div>
                <div className="gx-module-box-header-right">
                  <span className="gx-fs-xl">
                    <i className="icon icon-back gx-icon-btn" />
                  </span>
                  <span className="gx-fs-xl">
                    <i className="icon icon-dashboard gx-icon-btn" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="gx-module-box-content"
              style={{ background: "#F5F6FA" }}
            >
              {/* <TopLevelPanel />
              <CardPanel />
              <OrdersTable /> */}
              <Home filter={filter} />
            </div>
          </div>
        </div>
      </div>

      // <div>
      //     <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
      //         {this.ContactSideBar(user)}
      //     </div>

      //     <div className="gx-module-box">
      //         <div className="gx-module-box-header">
      //             <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
      //                 <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
      //                     onClick={this.onToggleDrawer.bind(this)}/>
      //             </span>

      //             <h2>Hello</h2>
      //             {/* <AppModuleHeader placeholder="Search Payee history" notification={false} apps={false}/> */}
      //         </div>
      //     </div>

      // </div>
    );
  }
}

export default Orders;
