import React, {Component} from "react";
import {Button, Col, Card, Drawer, Row, Select} from "antd";
import CustomScrollbars from "util/CustomScrollbars";

import AppModuleHeader from "components/AppModuleHeader/index";
import IntlMessages from "util/IntlMessages";
import FollowerGraph from "../../components/SocialMedia/FollowerGraph";
import DataTable from "../../components/Finance/DataTable";
import CollapsePanel from "../../components/Finance/CollapsePanel";
// import UploadClick from "components/Upload/UploadClick";

let contactId = 723812738;
const Option = Select.Option;
const filterOptions = [
  {
    id: 1,
    name: 'Standard Reports',
    icon: 'all-contacts'
  }, {
    id: 2,
    name: 'My Reports',
    icon: 'frequent'
  }, {
    id: 3,
    name: 'Shared with me',
    icon: 'star'
  }, {
    id: 4,
    name: 'Manage Reports',
    icon: 'team'
  }, {
    id: 5,
    name: 'Signed documents',
    icon: 'team'
  }, {
    id: 6,
    name: 'Audits',
    icon: 'team'
  }
];

class Finance extends Component {

  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-compose gx-mr-4"/>
          <span><IntlMessages id="chat.finance"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddContact}>
              <i className="icon icon-add-circle gx-mr-1"/>
              <span>Add New</span>
            </Button>
          </div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                    <i className={`icon icon-${option.icon}`}/>
                    <span>{option.name}</span>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };
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
      // filterOption: 'All contacts',
      // allContact: paymentList,
      // paymentList: paymentList,
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
    const {
      user,
      drawerState,
    } = this.state;

    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ContactSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search Reports" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">
              {/*<div className="gx-module-box-topbar" style={{backgroundColor: '#6236FF'}}>*/}
              {/*  <h2 style={{color: '#ffffff'}}>Standard Reports</h2>*/}
              {/*</div>*/}
              <Row>
                <Col md={18}>
                    <Select className="gx-mr-3 gx-mb-3" defaultValue="Portfolio" style={{width: 300}}>
                      <Option value="portfolio">Portfolio</Option>
                      <Option value="sales">Sales</Option>
                      <Option value="table">Cap table</Option>
                    </Select>
                    <Button size="small" className="gx-btn-outline-primary">7 Days</Button>
                    <Button size="small" className="gx-btn-outline-primary">1 Month</Button>
                    <Button size="small" className="gx-btn-outline-primary">3 Months</Button>
                  <Card className="gx-card" title="Performance">
                    <FollowerGraph/>
                  </Card>
                  <DataTable/>
                </Col>
                <Col md={6}>
                  <Card className="gx-card">
                    <CollapsePanel header="Holdings 15,000" color='#419EF9'/>
                    <CollapsePanel header="Invest 15,000" color='#419EF9'/>
                    <CollapsePanel header="Credit 15,000" color='#419EF9'/>
                    <CollapsePanel header="Expenses -100" color='#F33620'/>
                  </Card>

                </Col>
              </Row>
              <Row>

              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Finance;
