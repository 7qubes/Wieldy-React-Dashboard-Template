import React from "react";
import {Avatar, Input, Modal} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";

import IntlMessages from "util/IntlMessages";

class ConnectBankModal extends React.Component {
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
        // style={{backgroundColor: '#6236FF'}}
        title={<h2>Connect Bank</h2>}
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        footer={null}
        >
        {/*<Modal.Header>Connect Bank</Modal.Header>*/}
        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <p>Enter Bank URL</p>
              <Input
                required
                placeholder="Enter Bank URL"
                // onChange={(event) => this.setState({name: event.target.value})}
                // defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group" style={{marginTop: '30px'}}>
              <p>Or Choose from Popular Banks</p>
              <ul className="gx-list-inline gx-mb-3 gx-mb-lg-4">
                <li><Avatar src={"https://via.placeholder.com/150"}/></li>
                <li><Avatar src={"https://via.placeholder.com/150"}/></li>
                <li><Avatar src={"https://via.placeholder.com/150"}/></li>
                <li><Avatar className="gx-bg-primary gx-text-white">Ms</Avatar></li>
              </ul>

            </div>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default ConnectBankModal;
