import React from "react";
import {Avatar, Form, Checkbox, Button, Input, Modal} from "antd";
import {Link} from "react-router-dom";
import {NotificationContainer, NotificationManager} from "react-notifications";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import LockOutlined from "@ant-design/icons/lib/icons/LockOutlined";
import ConnectModal from "./ConnectModal";
// import IntlMessages from "util/IntlMessages";
const FormItem = Form.Item;

class BankSignInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      nickName: this.props.nickName,
      showConnectModal: false
    }
  }

  showConnectModal = () => {
    this.setState({showConnectModal: true})
  };

  closeConnectModal = () => {
    this.setState({showConnectModal: false})
  };

  render() {
    const {open, onClose} = this.props;
    const {showConnectModal} = this.state;

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
              <h1 className="gx-login-title gx-text-center">Sign In</h1>
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
                <FormItem  name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  <Link className="gx-login-form-forgot" to="/custom-views/user-auth/forgot-password">Forgot password</Link>
                </FormItem>
                <FormItem className="gx-text-center">
                  {/*<Link to='/billing/transactions/details'>*/}
                  <Button type="primary" onClick={this.showConnectModal}
                          // htmlType="submit"
                  >
                    Log in
                  </Button>
                  <ConnectModal open={showConnectModal} onClose={this.closeConnectModal}/>
                  {/*</Link>*/}
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

export default BankSignInModal;
