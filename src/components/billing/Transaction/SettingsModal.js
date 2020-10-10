import React from "react";
import {Checkbox, Input, Button, Form, Modal} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";

const FormItem = Form.Item;

class SettingsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {open, onClose} = this.props;

    return (
      <Modal
        title={<h2>Settings</h2>}
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        >
        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <FormItem><Checkbox>Notify me via email when logging in</Checkbox></FormItem>
              <FormItem><Checkbox>Send SMS confirmation for all online payments</Checkbox></FormItem>
              <FormItem><Checkbox>Check which devices accessed your account</Checkbox></FormItem>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SettingsModal;
