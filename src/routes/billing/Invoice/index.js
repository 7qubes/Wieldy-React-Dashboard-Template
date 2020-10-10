import React, {Component} from "react";
// import {Redirect} from "react-router"
import {Button, Checkbox, Drawer, message, Col} from "antd";
import CustomScrollbars from "util/CustomScrollbars";

import contactList from "../../contacts/Contact/data/contactList";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddContact from "components/contacts/AddContact";
import IntlMessages from "util/IntlMessages";
import InvoiceTable from "../../../components/billing/Invoice/InvoiceTable";

let contactId = 723812738;

const filterOptions = [
  {
    id: 1,
    name: 'All billing',
    icon: 'all-contacts'
  }, {
    id: 2,
    name: 'Recent Paid',
    icon: 'frequent'

  }, {

    id: 3,
    name: 'Alphabetical Order',
    icon: 'star'
  }
];

class Invoice extends Component {

  ContactSideBar = (user) => {
    const url = `/billing/invoice/send`;
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-compose gx-mr-4"/>
          <span><IntlMessages id="chat.invoice"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <a href={url}>
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    >
              <i className="icon icon-add-circle gx-mr-1"/>
              <span>Send New Invoice</span>
            </Button>
              </a>
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

  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: this.state.allContact
        });
        break;
      }
      default:
        break;
    }

  };

  onSaveContact = (data) => {
    let isNew = true;
    const contactList = this.state.allContact.map((contact) => {
      if (contact.id === data.id) {
        isNew = false;
        return data
      } else {
        return contact
      }
    });
    if (isNew) {
      contactList.push(data);
    }
    this.setState({
      alertMessage: isNew ? 'Contact Added Successfully' : 'Contact Updated Successfully',
      showMessage: true,
      contactList: contactList,
      allContact: contactList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
  };
  onDeleteContact = (data) => {
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: this.state.allContact.filter((contact) => contact.id !== data.id),
      contactList: this.state.allContact.filter((contact) => contact.id !== data.id)
    })
  };

  constructor() {
    super();
    this.state = {
      noContentFoundMessage: 'No Contact found in selected folder',
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
      allContact: contactList,
      contactList: contactList,
      selectedContact: null,
      selectedContacts: 0,
      addPaymentState: false,
    }
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

              <AppModuleHeader placeholder="Search invoice history" notification={false} apps={false}
                               user={this.state.user}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">
              <InvoiceTable/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Invoice;
