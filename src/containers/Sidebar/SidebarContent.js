import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import {useSelector} from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = () => {

  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            {/*<MenuItemGroup key="main" className="gx-menu-group">*/}
              <Menu.Item key="dashboard">
                <Link to="/dashboard"><i className="icon icon-culture-calendar"/>
                  <span><IntlMessages id="sidebar.dashboard"/></span></Link>
              </Menu.Item>

              <Menu.Item key="contacts">
                <Link to="/contacts"><i className="icon icon-contacts"/><span><IntlMessages
                  id="sidebar.contactsApp"/></span></Link>
              </Menu.Item>

              {/*<Menu.Item key="in-built-apps/contacts">*/}
              {/*  <Link to="/in-built-apps/contacts"><i className="icon icon-contacts"/><span><IntlMessages*/}
              {/*    id="sidebar.contactsApp"/></span></Link>*/}
              {/*</Menu.Item>*/}

              <Menu.Item key="billing">
                <Link to="/billing"><i className="icon icon-amchart"/>
                  <span><IntlMessages id="sidebar.billing"/></span></Link>
              </Menu.Item>

              <SubMenu key="calendar" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-calendar-new"/><span><IntlMessages
                         id="sidebar.calendar"/></span></span>}>
                <Menu.Item key="extensions/calendar/basic">
                  <Link to="/extensions/calendar/basic">
                    <span><IntlMessages
                      id="sidebar.calendar.basic"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/cultures">
                  <Link to="/extensions/calendar/cultures">
                    <span><IntlMessages
                      id="sidebar.calendar.cultures"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/popup">
                  <Link to="/extensions/calendar/popup">
                    <span><IntlMessages
                      id="sidebar.calendar.popup"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/rendering">
                  <Link to="/extensions/calendar/rendering">
                    <span><IntlMessages
                      id="sidebar.calendar.rendering"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/selectable">
                  <Link to="/extensions/calendar/selectable">
                    <span><IntlMessages
                      id="sidebar.calendar.selectable"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/timeslots">
                  <Link to="/extensions/calendar/timeslots">
                    <span><IntlMessages id="sidebar.calendar.timeslots"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="feedBack" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-chat-new"/>
                    <span><IntlMessages id="sidebar.components.feedBack"/></span>

              </span>}>
                <Menu.Item key="components/feedBack/alert">
                  <Link to="/components/feedBack/alert">
                    <span><IntlMessages
                      id="sidebar.feedBack.alert"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/modal">
                  <Link to="/components/feedBack/modal">
                    <span><IntlMessages
                      id="sidebar.feedBack.modal"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/message">
                  <Link to="/components/feedBack/message">
                    <span><IntlMessages
                      id="sidebar.feedBack.message"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/notification">
                  <Link to="/components/feedBack/notification">
                    <span><IntlMessages
                      id="sidebar.feedBack.notification"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/progress">
                  <Link to="/components/feedBack/progress">
                    <span><IntlMessages
                      id="sidebar.feedBack.progress"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/popconfirm">
                  <Link to="/components/feedBack/popconfirm">
                    <span><IntlMessages id="sidebar.feedBack.popConfirm"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/spin">
                  <Link to="/components/feedBack/spin">
                    <span><IntlMessages
                      id="sidebar.feedBack.spin"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="media">
                <Link to="/social-media/"><i className="icon icon-email"/><span><IntlMessages
                  id="sidebar.social.media"/></span></Link>
              </Menu.Item>

              <Menu.Item key="finance">
                <Link to="/finance"><i className="icon icon-chart-area"/><span><IntlMessages
                  id="sidebar.finance"/></span></Link>
              </Menu.Item>

              <Menu.Item key="inventories">
                <Link to="/inventories"><i className="icon icon-bitcoin"/><span><IntlMessages
                  id="sidebar.inventories"/></span></Link>
              </Menu.Item>

              <Menu.Item key="website">
                <Link to="/website"><i className="icon icon-chart"/><span><IntlMessages
                  id="sidebar.website"/></span></Link>
              </Menu.Item>

              <Menu.Item key="reports">
                <Link to="/reports"><i className="icon icon-anchor"/><span><IntlMessages
                  id="sidebar.reports"/></span></Link>
              </Menu.Item>

              <Menu.Item key="analytics">
                <Link to="/analytics"><i className="icon icon-chart-radial"/><span><IntlMessages
                  id="sidebar.analytics"/></span></Link>
              </Menu.Item>

              <Menu.Item key="workspace">
                <Link to="/workspace"><i className="icon icon-chart-tree"/><span><IntlMessages
                  id="sidebar.workspace"/></span></Link>
              </Menu.Item>


            {/*</MenuItemGroup>*/}
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

