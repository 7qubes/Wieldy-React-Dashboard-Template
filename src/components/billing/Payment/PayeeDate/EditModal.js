import React from "react";
import {Avatar, Input, Modal} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";

import IntlMessages from "util/IntlMessages";

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      nickName: this.props.nickName
    }
  }

  render() {
    const {open, onClose} = this.props;
    // const {name, nickName} = this.state;

    return (
      <Modal
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        >

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <span>Payee Name</span>
              <Input
                required
                placeholder="Payee Name"
                // onChange={(event) => this.setState({name: event.target.value})}
                // defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Payee Nickname</span>
              <Input
                required
                placeholder="Payee Nickname"
                // onChange={(event) => this.setState({nickName: event.target.value})}
                // defaultValue={name}
                margin="none"/>
            </div>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default EditModal;
