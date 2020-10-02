import React, {Component} from "react";
import {Button, Checkbox, Drawer, message, Col, Row} from "antd";
import CustomScrollbars from "util/CustomScrollbars";

// import paymentList from "../data";
// import PaymentList from "components/billing/Payment";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddPayment from "components/billing/Payment/AddPayment";
import PayeeName from "components/billing/Payment/PayeeName/index";
import AccountType from "components/billing/Payment/AccountType/index";
import PayeeGroup from "components/billing/Payment/PayeeGroup/index";
import Status from "components/billing/Payment/Status/index";
import Payments from "components/billing/Payment/Payments/index";
import Address from "components/billing/Payment/Address/index";
import PayeeDate from "components/billing/Payment/PayeeDate/index";
import PayeeAmount from "components/billing/Payment/PayeeAmount/index";
// import Payee from "components/billing/Payment/Payee/index";
import IntlMessages from "util/IntlMessages";

let contactId = 723812738;

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

class SocialMedia extends Component {

  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-compose gx-mr-4"/>
          <span><IntlMessages id="chat.media"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddContact}>
              <i className="icon icon-add-circle gx-mr-1"/>
              <span>Add Account</span>
            </Button>
          </div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                    {/*<i className={`icon icon-${option.icon}`}/>*/}
                    <Checkbox/>
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

  // onContactSelect = (data) => {
  //   data.selected = !data.selected;
  //   let selectedContacts = 0;
  //   const paymentList = this.state.paymentList.map(contact => {
  //       if (contact.selected) {
  //         selectedContacts++;
  //       }
  //       if (contact.id === data.id) {
  //         if (contact.selected) {
  //           selectedContacts++;
  //         }
  //         return data;
  //       } else {
  //         return contact;
  //       }
  //     }
  //   );
  //   this.setState({
  //     selectedContacts: selectedContacts,
  //     paymentList: paymentList
  //   });
  //
  // };

  onAddContact = () => {
    this.setState({addPaymentState: true});
  };
  onContactClose = () => {
    this.setState({addPaymentState: false});
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
  // onDeleteSelectedContact = () => {
  //   const contacts = this.state.allContact.filter((contact) => !contact.selected);
  //   this.setState({
  //     alertMessage: 'Contact Deleted Successfully',
  //     showMessage: true,
  //     allContact: contacts,
  //     paymentList: contacts,
  //     selectedContacts: 0
  //   })
  // };
  filterContact = (userName) => {
    const {filterOption} = this.state;
    if (userName === '') {
      this.setState({paymentList: this.state.allContact});
    } else {
      const filterContact = this.state.allContact.filter((contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        this.setState({paymentList: filterContact});
      } else if (filterOption === 'Frequently contacted') {
        this.setState({paymentList: filterContact.filter((contact) => contact.frequently)});
      } else if (filterOption === 'Starred contacts') {
        this.setState({paymentList: filterContact.filter((contact) => contact.starred)});
      } else if (filterOption === 'Employee') {
        this.setState({paymentList: filterContact.filter((contact) => contact.employee)});
      } else if (filterOption === 'Vendors') {
        this.setState({paymentList: filterContact.filter((contact) => contact.vendors)});
      } else if (filterOption === 'Customers') {
        this.setState({paymentList: filterContact.filter((contact) => contact.customers)});
      }

    }
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };
  getAllContact = () => {
    let paymentList = this.state.allContact.map((contact) => contact ? {
      ...contact,
      selected: true
    } : contact);
    this.setState({
      selectedContacts: paymentList.length,
      allContact: paymentList,
      paymentList: paymentList
    });
  };
  getUnselectedAllContact = () => {
    let paymentList = this.state.allContact.map((contact) => contact ? {
      ...contact,
      selected: false
    } : contact);
    this.setState({
      selectedContacts: 0,
      allContact: paymentList,
      paymentList: paymentList
    });
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
      // allContact: paymentList,
      // paymentList: paymentList,
      selectedContact: null,
      selectedContacts: 0,
      addPaymentState: false,
    }
  }

  // onAllContactSelect() {
  //   const selectAll = this.state.selectedContacts < this.state.paymentList.length;
  //   if (selectAll) {
  //     this.getAllContact();
  //   } else {
  //     this.getUnselectedAllContact();
  //   }
  // }

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
      // paymentList,
      addPaymentState,
      drawerState,
      // selectedContacts,
      alertMessage,
      showMessage,
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

              <AppModuleHeader placeholder="Search Social Media" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">
              <div className="gx-module-box-topbar" style={{backgroundColor: '#6236FF'}}>
                <span style={{color: '#ffffff'}}>@username</span>
              </div>
              <Row>
                <span>Post Scheduling page</span>

              </Row>

            </div>
          </div>
        </div>

        <AddPayment open={addPaymentState} contact={{
          'id': contactId++,
          'name': '',
          'thumb': '',
          'nickName': '',
          'email': '',
          'phone': '',
          'designation': '',
          'selected': false,
          'starred': false,
          'frequently': false,
        }} onSaveContact={this.onSaveContact}
                    onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>

        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }
}

export default SocialMedia;
