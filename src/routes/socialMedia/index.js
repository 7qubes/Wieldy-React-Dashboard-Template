import React, { useEffect, useState } from "react";
// import {Redirect, Route, Switch} from "react-router-dom";
import axios from "axios";
import { Col, Row, Menu, Button } from "antd";
import {
  LinkedinOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import CustomScrollbars from "util/CustomScrollbars";
import IntlMessages from "../../util/IntlMessages";
import Calendar from "../extensions/calendar/basic/index";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// import asyncComponent from "util/asyncComponent";

const SocialMedia = () => {
  const [status, setStatus] = useState({});
  const [visible, setVisible] = useState(false);

  // https://developers.facebook.com/docs/facebook-login/web
  const faceBookLogin = () => {
    window.FB.login(function (response) {
      console.log(response);
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
        // console.log(response)
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    });
  };
  const OpenLoginWindow = (url) => {
    window.open(
      url,
      "popUpWindow",
      "height=600,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=no"
    );
  };
  useEffect(() => {
    axios
      .post("http://localhost:5000/getStatus", {
        user_id: "123",
      })
      .then(function (response) {
        console.log(response);
        setStatus(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Row>
      <Col style={{ width: 200, height: "100%" }}>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            // defaultOpenKeys={[defaultOpenKeys]}
            // selectedKeys={[selectedKeys]}
            theme={"lite"}
            mode="inline"
          >
            <Menu.Item key="facebook">
              <FacebookFilled style={{ fontSize: "24px" }} />
              {status["1"] ? (
                <span style={{ color: "blue" }}>Facebook</span>
              ) : (
                <Button onClick={() => faceBookLogin()}>Facebook</Button>
              )}
            </Menu.Item>

            <Menu.Item key="insta">
              <InstagramFilled style={{ fontSize: "24px" }} />
              {status["2"] ? <h4>Instagram</h4> : <Button>Instagram</Button>}
            </Menu.Item>
            <Menu.Item key="twitter">
              <TwitterOutlined style={{ fontSize: "24px" }} />
              {status["3"] ? (
                <h4>Twitter</h4>
              ) : (
                <Button
                  onClick={() =>
                    OpenLoginWindow("http://localhost:5000/t_getAuthUrl?id=123")
                  }
                >
                  Twitter
                </Button>
              )}
            </Menu.Item>
            <Menu.Item key="linkedin">
              <LinkedinOutlined style={{ fontSize: "24px" }} />
              {status["4"] ? (
                <h4>LinkedIn</h4>
              ) : (
                <Button
                  onClick={() =>
                    OpenLoginWindow("http://localhost:5000/getAuthUrl")
                  }
                >
                  LinkedIn
                </Button>
              )}
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </Col>
      <Col>
        <Calendar />
      </Col>
    </Row>
  );
};

export default SocialMedia;
