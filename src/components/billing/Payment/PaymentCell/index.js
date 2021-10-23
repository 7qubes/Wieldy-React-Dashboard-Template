import React from "react";
import {Avatar, Checkbox, Dropdown, Menu} from "antd";

import AddContact from "../../../contact/AddContact/index";

const options = [
  'Edit',
  'Delete',
];

class ContactCell extends React.Component {

  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onDeleteContact = (contact) => {
    this.setState({addContactState: false});
    this.props.onDeleteContact(contact);
  };
  onEditContact = () => {
    this.setState({addContactState: true});
  };
  menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Edit') {
      this.onEditContact()
    } else {
      this.onDeleteContact(this.props.contact)
    }
  }
  }>
    {options.map(option =>
      <Menu.Item key={option}>
        {option}
      </Menu.Item>,
    )}
  </Menu>);

  constructor() {
    super();
    this.state = {
      addContactState: false,
    }
  }

  render() {
    const {contact, addFavourite, onContactSelect, onSaveContact} = this.props;
    const {addContactState} = this.state;
    const {name, number} = contact;
    const url = `/billing/payment/edit`;

    return (

      <div className="gx-contact-item">
        <div className="gx-module-list-icon">
          <Checkbox className="gx-icon-btn"
                    checked={contact.selected}
                    value="checkedF"
                    onClick={() => {
                      onContactSelect(contact)
                    }}/>
        </div>

        <div className="gx-module-list-info gx-contact-list-info">
          <div className="gx-module-contact-content">
            <p className="gx-mb-1">
              <a href={url}>
                <span className="gx-text-truncate gx-contact-name"> {name} </span>
              </a>
              <span className="gx-toolbar-separator">&nbsp;</span>
              <span className="gx-email gx-d-inline-block gx-mr-2">
                Account number: {number}
              </span>
            </p>
          </div>
          {/*<div className="gx-text-muted">*/}
          {/*  <span className="gx-email gx-d-inline-block gx-mr-2">*/}
          {/*      */}
          {/*  </span>*/}
          {/*</div>*/}

          {/*<div className="gx-module-contact-right">*/}

          {/*  <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['click']}>*/}
          {/*    <i className="gx-icon-btn icon icon-ellipse-h"/>*/}
          {/*  </Dropdown>*/}

          {/*  {addContactState &&*/}
          {/*  <AddContact open={addContactState} contact={contact} onSaveContact={onSaveContact}*/}
          {/*              onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>}*/}
          {/*</div>*/}
        </div>
        <div className="gx-module-contact-right">

            <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['click']}>
              <i className="gx-icon-btn icon icon-ellipse-h"/>
            </Dropdown>

            {addContactState &&
            <AddContact open={addContactState} contact={contact} onSaveContact={onSaveContact}
                        onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>}
          </div>
      </div>
    )
  }
}

export default ContactCell;
