import React, { Component } from "react";
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

import CustomScrollbars from "../../../util/CustomScrollbars";
import IntlMessages from "../../../util/IntlMessages";
import { AntDesignOutlined } from "@ant-design/icons";
// import SingleBOMCard from "../../../components/Inventories/BOM/HomePage/SingleBOMCard";
import Cards from "../../../components/Inventories/BOM/Home/Cards";
import AddBOM from "../../../components/Inventories/BOM/AddBOM";

import AppModuleHeader from "components/AppModuleHeader/index";

const filterOptions = [
  {
    id: 1,
    name: "All BOMS",
    icon: "anchor",
  },
  {
    id: 2,
    name: "My Catalogs",
    icon: "frequent",
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
const { Text } = Typography;
const { Title } = Typography;

class BOM extends Component {
  ContactSideBar = (user) => {
    return (
      <div className="gx-module-side">
        <div className="gx-module-side-header">
          <div className="gx-module-logo">
            <i className="icon icon-bom gx-mr-4" />
            <span>
              <IntlMessages id="sidebar.inventories.bom" />
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
                  <Link
                    to={`/inventories/bom/${option.name
                      .toLowerCase()
                      .replace(/ /g, "")}`}
                    replace
                  >
                    <li key={option.id} className="gx-nav-item">
                      <span
                        className={`gx-link ${
                          option.id === this.state.selectedSectionId
                            ? "active"
                            : ""
                        }`}
                        onClick={this.onFilterOptionSelect.bind(this, option)}
                      >
                        <i className={`icon icon-${option.icon}`} />
                        <span>{option.name}</span>
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </CustomScrollbars>
        </div>
      </div>
    );
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
            <div className="gx-module-box-content">
              <Collapse
                defaultActiveKey={["1", "2"]}
                onChange={callback}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Panel
                  header="BOMS Due Soon!"
                  style={{ fontSize: "1.2rem" }}
                  key="1"
                >
                  <Space>
                    <Text style={{ fontSize: "1rem" }} type="secondary">
                      More BOMs
                    </Text>
                  </Space>
                </Panel>

                <Panel header="BOMS" style={{ fontSize: "1.2rem" }} key="2">
                  <div style={{ display: "flex" }}>
                    <Cards />
                  </div>
                </Panel>
              </Collapse>
              {/* <AddBOM /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BOM;
