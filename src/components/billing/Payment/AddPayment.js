import React from "react";
import {Avatar, Input, Modal} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";

import IntlMessages from "util/IntlMessages";

class AddPayment extends React.Component {
  constructor(props) {
    super(props);

    const {id, thumb, name, nickName, email, phone, designation, selected, starred, frequently} = props.contact;
    this.state = {
      id,
      thumb,
      name,
      nickName,
      email,
      phone,
      designation,
      selected,
      starred,
      frequently
    }
  }

  render() {
    const {onSaveContact, onContactClose, open, contact} = this.props;
    const {id, name, nickName, email, phone, designation, selected, starred, frequently} = this.state;

    return (
      <Modal
        title={contact.name === '' ?
          <IntlMessages id="billing.addPayment"/> :
          <IntlMessages id="billing.savePayment"/>}
        toggle={onContactClose} visible={open}
        closable={false}
        onOk={() => {
          NotificationManager.success(<IntlMessages id="notification.successMessage"/>, <IntlMessages
            id="notification.titleHere"/>);
          if (name === '')
            return;
          onContactClose();
          onSaveContact(
            {
              'id': id,
              'name': name,
              'nickName': nickName,
              'email': email,
              'phone': phone,
              'designation': designation,
              'selected': selected,
              'starred': starred,
              'frequently': frequently
            });
          this.setState({
            'id': id + 1,
            'name': '',
            'nickName': '',
            'email': '',
            'phone': '',
            'designation': '',
          })

        }}
        onCancel={onContactClose}>

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <Input
                required
                placeholder="Payee Name"
                onChange={(event) => this.setState({name: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                required
                placeholder="Payee Nickname"
                onChange={(event) => this.setState({nickName: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                required
                placeholder="Account Type"
                onChange={(event) => this.setState({nickName: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                required
                placeholder="Checking Number"
                onChange={(event) => this.setState({nickName: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                required
                placeholder="Payee Account"
                onChange={(event) => this.setState({nickName: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                required
                placeholder="Bank Account"
                onChange={(event) => this.setState({nickName: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                required
                placeholder="Payee Group"
                onChange={(event) => this.setState({nickName: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                required
                placeholder="Payee Address"
                onChange={(event) => this.setState({nickName: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default AddPayment;
