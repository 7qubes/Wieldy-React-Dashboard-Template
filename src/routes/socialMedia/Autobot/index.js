import React, { Component } from "react";
import { Button, Checkbox, Drawer, Tooltip, Card, Tag, Col, Input, Row, Avatar } from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import AppModuleHeader from "components/AppModuleHeader";
import AddSocialAccount from "components/SocialMedia/AddSocialAccount"
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import IntlMessages from "util/IntlMessages";
import SchedulePost from "../../../components/SocialMedia/SchedulePost";
import Panel from './panel';

const filterOptions = [
  {
    id: 1,
    name: '@username',
  }, {
    id: 2,
    name: '@username',
  }, {
    id: 3,
    name: '@username',
  }
];
const userImageList = [
  {
    id: 1,
    image: "/src/assets/images/customer_1.jpg",
  },
  {
    id: 2,
    image: "assets/images/customer_2.jpg",
  },
  {
    id: 3,
    image: "assets/images/customer_3.jpg",

  }
]
class Autobot extends Component {

  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-compose gx-mr-4" />
          <span><IntlMessages id="chat.media" /></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
              onClick={this.onShowSchedulePost}>
              <i className="icon icon-add-circle gx-mr-1" />
              <span>Schedule a Post</span>
            </Button>
          </div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                <span
                  className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                  <Checkbox className="gx-icon-btn" />
                  <Avatar className="gx-mr-2" shape="square" size="small" icon={<UserOutlined />} />
                  <span className="gx-contact-name">{option.name}</span>
                </span>
              </li>
              )}
            </ul>
          </div>
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" aria-label="add"
              onClick={this.onAddAccount}>
              <i className="icon icon-add-circle gx-mr-1" />
              <span>Add account</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };

  onAddAccount = () => {
    this.setState({ addAccount: true });
  };
  onClose = () => {
    this.setState({ addAccount: false });
  };

  onShowSchedulePost = () => {
    this.setState({ schedulePost: true });
  };
  onCloseSchedulePost = () => {
    this.setState({ schedulePost: false });
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

  onSaveContact = (data) => {
    let isNew = true;
    const paymentList = this.state.allContact.map((contact) => {
      if (contact.id === data.id) {
        isNew = false;
        return data
      } else {
        return contact
      }
    });
    if (isNew) {
      paymentList.push(data);
    }
    this.setState({
      alertMessage: isNew ? 'Payment Added Successfully' : 'Payment Updated Successfully',
      showMessage: true,
      paymentList: paymentList,
      allContact: paymentList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
  };
  onDeleteContact = (data) => {
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: this.state.allContact.filter((contact) => contact.id !== data.id),
      paymentList: this.state.allContact.filter((contact) => contact.id !== data.id)
    })
  };
  filterContact = (userName) => {
    const { filterOption } = this.state;
    if (userName === '') {
      this.setState({ paymentList: this.state.allContact });
    } else {
      const filterContact = this.state.allContact.filter((contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        this.setState({ paymentList: filterContact });
      } else if (filterOption === 'Frequently contacted') {
        this.setState({ paymentList: filterContact.filter((contact) => contact.frequently) });
      } else if (filterOption === 'Starred contacts') {
        this.setState({ paymentList: filterContact.filter((contact) => contact.starred) });
      } else if (filterOption === 'Employee') {
        this.setState({ paymentList: filterContact.filter((contact) => contact.employee) });
      } else if (filterOption === 'Vendors') {
        this.setState({ paymentList: filterContact.filter((contact) => contact.vendors) });
      } else if (filterOption === 'Customers') {
        this.setState({ paymentList: filterContact.filter((contact) => contact.customers) });
      }

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
      filterOption: 'All contacts',
      selectedContact: null,
      selectedContacts: 0,
      addAccount: false,
      schedulePost: false,
      engagement: 30,
      posts: 40,
      followers: 800,
      following: 1000
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
      addAccount,
      schedulePost,
      inputVisible,
      inputValue,
      tags
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
                  onClick={this.onToggleDrawer.bind(this)} />
              </span>

              <AppModuleHeader placeholder="Search Mails" notification={false} apps={false}
                user={this.state.user}
                onChange={this.updateContactUser.bind(this)}
                value={this.state.searchUser} />
            </div>
            <div className="gx-module-box-content">
              <div className="gx-module-box-topbar" style={{ backgroundColor: '#6236FF', display: "flex","justify-content": "space-between" }}>
              
              <div>
              <Avatar className="gx-mr-2" size="large" icon={<UserOutlined />} />
                <span className="gx-contact-name" style={{ color: '#ffffff' }}> @username</span>
              </div>
                
                <div  style={{ color: '#ffffff' }}x>
                <table className="padding-table-columns">
                  <tr>
                    <th style={{padding:"0 20px 0 0" }}>
                      {this.state.engagement}%
                   </th>
                    <th style={{padding:"0 20px 0 0" }}>
                      {this.state.posts}
                    </th>
                    <th style={{padding:"0 20px 0 0" }}>
                      {this.state.followers}
                    </th>
                    <th style={{padding:"0 20px 0 0" }}>
                      {this.state.following}
                    </th>
                  </tr>
                  <tr>
                    <th style={{padding:"0 20px 0 0" }}>
                      Engagement
                   </th>
                    <th style={{padding:"0 20px 0 0" }}>
                      Posts
                   </th>
                    <th style={{padding:"0 20px 0 0" }}>
                      Followers
                   </th>
                    <th style={{padding:"0 20px 0 0" }}>
                      Following
                   </th>
                  </tr>
                </table>
              </div>
              </div>
              
              <div style={{ padding: '32px 32px 0', backgroundColor: "#F5F6FA" }}>
                <Panel />
              </div>
            </div>
          </div>
        </div>

        <AddSocialAccount open={addAccount} onClose={this.onClose} />
        <SchedulePost open={schedulePost} onClose={this.onCloseSchedulePost} />
      </div>
    )
  }
}

export default Autobot;
