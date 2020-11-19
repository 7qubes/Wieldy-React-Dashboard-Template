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

const SocialMedia = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/analytics`} />
    <Route
      path={`${match.url}/analytics`}
      component={asyncComponent(() => import("./Analytics"))}
    />
    <Route
      path={`${match.url}/scheduling`}
      component={asyncComponent(() => import("./PostScheduling"))}
    />
    <Route
      path={`${match.url}/automation`}
      component={asyncComponent(() => import("./Automations"))}
    />
    <Route
      path={`${match.url}/autobot`}
      component={asyncComponent(() => import("./Autobot"))}
    />
  </Switch>
);

export default SocialMedia;
