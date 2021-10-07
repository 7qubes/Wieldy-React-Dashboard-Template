import React, {Component} from "react";
import {Button, Checkbox, Drawer, message, Col} from "antd";
import CustomScrollbars from "util/CustomScrollbars";

import paymentList from "./data";
import PaymentList from "components/billing/Payment";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddPayment from "components/billing/Payment/AddPayment";
import IntlMessages from "util/IntlMessages";

let contactId = 723812738;

const filterOptions = [
  {
    id: 1,
    name: 'All Payees',
    icon: 'all-contacts'
  }, {
    id: 2,
    name: 'Frequently Paid',
    icon: 'frequent'
  }, {
    id: 3,
    name: 'Alphabetical Order',
    icon: 'star'
  }, {
    id: 4,
    name: 'Last Paid',
    icon: 'team'
  }, {
    id: 5,
    name: 'Utilities Group',
    icon: 'team'
  }, {
    id: 6,
    name: 'Employees Group',
    icon: 'team'
  }
];

class Payment extends Component {

  PaymentSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-compose gx-mr-4"/>
          <span><IntlMessages id="chat.payee"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddContact}>
              <i className="icon icon-add-circle gx-mr-1"/>
              <span>Add New Payee</span>
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

  onContactSelect = (data) => {
    data.selected = !data.selected;
    let selectedContacts = 0;
    const paymentList = this.state.paymentList.map(payment => {
        if (payment.selected) {
          selectedContacts++;
        }
        if (payment.id === data.id) {
          if (payment.selected) {
            selectedContacts++;
          }
          return data;
        } else {
          return payment;
        }
      }
    );
    this.setState({
      selectedContacts: selectedContacts,
      paymentList: paymentList
    });

  };

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
          paymentList: this.state.allPayment
        });
        break;
      }
      case 'Frequently Paid': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allPayment.filter((payment) => payment.frequently)
        });
        break;
      }
      case 'Alphabetical Order': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allPayment.filter((payment) => payment.order)
        });
        break;
      }
      case 'Last Paid': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allPayment.filter((payment) => payment.last)
        });
        break;
      }
      case 'Utilities Group': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allPayment.filter((payment) => payment.utils)
        });
        break;
      }
      case 'Employees Group': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allPayment.filter((payment) => payment.employee)
        });
        break;
      }
      default:
        break;
    }
  };

  onSaveContact = (data) => {
    let isNew = true;
    const paymentList = this.state.paymentList.map((payment) => {
      if (payment.id === data.id) {
        isNew = false;
        return data
      } else {
        return payment
      }
    });
    if (isNew) {
      paymentList.push(data);
    }
    this.setState({
      alertMessage: isNew ? 'Payment Added Successfully' : 'Payment Updated Successfully',
      showMessage: true,
      paymentList: paymentList,
      // allContact: paymentList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
  };
  onDeleteContact = (data) => {
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      // allContact: this.state.allContact.filter((contact) => contact.id !== data.id),
      paymentList: this.state.paymentList.filter((payment) => payment.id !== data.id)
    })
  };
  onDeleteSelectedContact = () => {
    const payments = this.state.paymentList.filter((payment) => !payment.selected);
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      // allContact: contacts,
      paymentList: payments,
      selectedContacts: 0
    })
  };
  filterContact = (userName) => {
    const {filterOption} = this.state;
    if (userName === '') {
      this.setState({paymentList: this.state.paymentList});
    } else {
      const filterContact = this.state.paymentList.filter((payment) =>
        payment.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All Payees') {
        this.setState({paymentList: filterContact});
      } else if (filterOption === 'Frequently Paid') {
        this.setState({paymentList: filterContact.filter((payment) => payment.frequently)});
      } else if (filterOption === 'Alphabetical Order') {
        this.setState({paymentList: filterContact.filter((payment) => payment.order)});
      } else if (filterOption === 'Last Paid') {
        this.setState({paymentList: filterContact.filter((payment) => payment.last)});
      } else if (filterOption === 'Utilities Group') {
        this.setState({paymentList: filterContact.filter((payment) => payment.utils)});
      } else if (filterOption === 'Employees Group') {
        this.setState({paymentList: filterContact.filter((payment) => payment.employee)});
      }

    }
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };
  getAllContact = () => {
    let paymentList = this.state.paymentList.map((contact) => contact ? {
      ...contact,
      selected: true
    } : contact);
    this.setState({
      selectedContacts: paymentList.length,
      // allContact: paymentList,
      paymentList: paymentList
    });
  };
  getUnselectedAllContact = () => {
    let paymentList = this.state.paymentList.map((payment) => payment ? {
      ...payment,
      selected: false
    } : payment);
    this.setState({
      selectedContacts: 0,
      // allContact: paymentList,
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
      allPayment: paymentList,
      paymentList: paymentList,
      selectedContact: null,
      selectedContacts: 0,
      addPaymentState: false,
    }
  }

  onAllContactSelect() {
    const selectAll = this.state.selectedContacts < this.state.paymentList.length;
    if (selectAll) {
      this.getAllContact();
    } else {
      this.getUnselectedAllContact();
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
      paymentList,
      addPaymentState,
      drawerState,
      selectedContacts,
      alertMessage,
      showMessage,
      noPaymentFoundMessage
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
              {this.PaymentSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.PaymentSideBar(user)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search Payee history" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">
              <div className="gx-module-box-topbar">
                <Checkbox color="primary" className="gx-icon-btn"
                          indeterminate={selectedContacts > 0 && selectedContacts < paymentList.length}
                          checked={selectedContacts > 0}
                          onChange={this.onAllContactSelect.bind(this)}
                          value="SelectMail"/>
                {selectedContacts > 0 &&
                <i className="gx-icon-btn icon icon-trash" onClick={this.onDeleteSelectedContact.bind(this)}/>}

              </div>
              <CustomScrollbars className="gx-module-content-scroll">
                {paymentList.length === 0 ?
                  <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                    {noPaymentFoundMessage}
                  </div>
                  : <PaymentList paymentList={paymentList}
                                 // addFavourite={this.addFavourite.bind(this)}
                                 onContactSelect={this.onContactSelect.bind(this)}
                                 onDeleteContact={this.onDeleteContact.bind(this)}
                                 onSaveContact={this.onSaveContact.bind(this)}/>
                }
              </CustomScrollbars>
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

export default Payment;
