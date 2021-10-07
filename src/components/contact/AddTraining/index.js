import React from "react";
import {Avatar, DatePicker, Input, Modal, Rate} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";

import IntlMessages from "util/IntlMessages";

const {TextArea} = Input;

class AddTraining extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: this.props.name,
    //   nickName: this.props.nickName
    // }
  }

  render() {
    const {open, onClose} = this.props;
    return (
      <Modal
        title='Add Training'
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        >

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <span>Name of Training</span>
              <Input
                required
                placeholder="Name of Training"
                // rows={3}
                // onChange={(event) => this.setState({name: event.target.value})}
                // defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Due Date</span>
              {/*<Input*/}
              {/*  required*/}
              {/*  placeholder="Date Due"*/}
              {/*  // rows={3}*/}
              {/*  margin="none"/>*/}
              <DatePicker className="gx-w-100"/>
            </div>
            <div className="gx-form-group">
              <span>External Link</span>
              <Input
                required
                placeholder="External Link"
                // rows={3}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Username</span>
              <Input
                required
                placeholder="Username"
                // rows={3}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Password</span>
              <Input
                required
                placeholder="Password"
                margin="none"
              />
            </div>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default AddTraining;
