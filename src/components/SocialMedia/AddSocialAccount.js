import React from "react";
import { Avatar, Form, Checkbox, Button, Input, Modal } from "antd";
import { Link } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import LockOutlined from "@ant-design/icons/lib/icons/LockOutlined";
import axios from "axios";
import {
  LinkedinOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
} from "@ant-design/icons";

// import ConnectModal from "./ConnectModal";
// import IntlMessages from "util/IntlMessages";
const FormItem = Form.Item;

class AddSocialAccount extends React.Component {
  constructor(props) {
    super(props);
  }
  faceBookLogin = () => {
    window.FB.login(function (response) {
      if (response.status === "connected") {
        axios
          .post("http://localhost:5000/addToken", {
            user_id: "123",
            medium: 1,
            token: response.authResponse.accessToken,
            social_id: response.authResponse.userID,
          })
          .then(function (resp) {
            console.log(resp);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    });
  };
  OpenLoginWindow = (url) => {
    url = url + "?id=123";
    window.open(
      url,
      "popUpWindow",
      "height=600,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=no"
    );
  };

  render() {
    const { open, onClose } = this.props;

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
              <ul
                className="gx-list-inline gx-mb-3 gx-mb-lg-4"
                onClick={this.showSignInModal}
              >
                <li>
                  <FacebookFilled
                    style={{ fontSize: "48px", color: "#1877f2" }}
                    onClick={() => this.faceBookLogin()}
                  />
                </li>
                <li>
                  <InstagramFilled
                    style={{ fontSize: "48px" }}
                    onClick={() =>
                      this.OpenLoginWindow(
                        "http://localhost:5000/instagram_login"
                      )
                    }
                  />
                </li>
                <li>
                  <TwitterOutlined
                    style={{ fontSize: "48px", color: "rgba(29,161,242,1.00)" }}
                    onClick={() =>
                      this.OpenLoginWindow("http://localhost:5000/t_getAuthUrl")
                    }
                  />
                </li>
                <li>
                  <LinkedinOutlined
                    style={{ fontSize: "48px", color: "#0073b1" }}
                    onClick={() =>
                      this.OpenLoginWindow("http://localhost:5000/getAuthUrl")
                    }
                  />
                </li>
              </ul>
            </div>
            {/* <div className="gx-form-group">
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
            </div> */}
          </div>
        </div>
        <NotificationContainer />
      </Modal>
    );
  }
}

export default AddSocialAccount;
