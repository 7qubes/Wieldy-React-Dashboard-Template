import React from "react";
import {Avatar, Form, Checkbox, Button, Input, Modal} from "antd";
import {Link} from "react-router-dom";
import {NotificationContainer, NotificationManager} from "react-notifications";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import LockOutlined from "@ant-design/icons/lib/icons/LockOutlined";
// import ConnectModal from "./ConnectModal";
// import IntlMessages from "util/IntlMessages";
const FormItem = Form.Item;

class AddSocialAccount extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {open, onClose} = this.props;

    return (
      <Modal
        // style={{backgroundColor: '#6236FF'}}
        title={<h2>Connect Social Media</h2>}
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        footer={null}
        >
        {/*<Modal.Header>Connect Bank</Modal.Header>*/}
        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group gx-text-center">
              <ul className="gx-list-inline gx-mb-3 gx-mb-lg-4" onClick={this.showSignInModal}>
                <li><Avatar className="gx-mr-2" shape="square" size="large" icon={<UserOutlined />}/></li>
                <li><Avatar className="gx-mr-2" shape="square" size="large" icon={<UserOutlined />}/></li>
                <li><Avatar className="gx-mr-2" shape="square" size="large" icon={<UserOutlined />}/></li>
                <li><Avatar className="gx-bg-primary gx-text-white">Ms</Avatar></li>
              </ul>
            </div>
            <div className="gx-form-group">
              <Form
                initialValues={{ remember: true }}
                name="basic"
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                className="gx-signin-form gx-form-row0">
                <FormItem rules={[{ required: true, message: 'Please input your E-mail!' }]} name="email">

                <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="Email"/>
                </FormItem>
                <FormItem rules= {[{required: true, message: 'Please input your Password!'}]}  name="password">

                    <Input prefix={<LockOutlined  style={{color: 'rgba(0,0,0,.25)'}}/>}
                           type="password"
                           placeholder="Password"/>
                </FormItem>

                <FormItem className="gx-text-center">
                  <Button type="primary" onClick={this.showConnectModal}
                          // htmlType="submit"
                  >
                    Connect Account
                  </Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default AddSocialAccount;
