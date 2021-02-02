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
            <Menu.Item key="dashboard">
              <Link to="/dashboard"><i className="icon icon-dashboard"/>
                <span><IntlMessages id="sidebar.dashboard"/></span></Link>
            </Menu.Item>

            <Menu.Item key="contacts">
              <Link to="/contacts"><i className="icon icon-contact"/><span><IntlMessages
                id="sidebar.contactsApp"/></span></Link>
            </Menu.Item>

            <SubMenu key="billing" popupClassName={getNavStyleSubMenuClass(navStyle)}
                     title={
                       <span><i className="icon icon-billing"/><span><IntlMessages id="sidebar.billing"/></span></span>
                     }>
              <Menu.Item key="billing/transactions">
                <Link to="/billing/transactions">
                  <i className="icon icon-transaction"/>
                  <span><IntlMessages id="sidebar.billing.transactions"/></span>
                </Link>
              </Menu.Item>
              <Menu.Item key="billing/payment">
                <Link to="/billing/payment">
                  <i className="icon icon-payment"/>
                  <span><IntlMessages id="sidebar.billing.payment"/></span>
                </Link>
              </Menu.Item>
              <Menu.Item key="billing/invoice">
                <Link to="/billing/invoice">
                  <i className="icon icon-invoice"/>
                  <span><IntlMessages id="sidebar.billing.invoice"/></span>
                </Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="calendar">
              <Link to="/calendar"><i className="icon icon-calendar"/>
                <span><IntlMessages id="sidebar.calendar"/></span></Link>
            </Menu.Item>

            <SubMenu key="communications" popupClassName={getNavStyleSubMenuClass(navStyle)}
                     title={
                       <span><i className="icon icon-chat"/><span>
                         <IntlMessages id="sidebar.communications"/></span></span>
                     }>
              <Menu.Item key="communications/email">
                <Link to="/communications/email">
                <i className="icon icon-email"/>
                  <span><IntlMessages id="sidebar.communications.email"/></span></Link>
              </Menu.Item>
              <Menu.Item key="communications/chats">
                <Link to="/communications/chats">
                <i className="icon icon-chat"/>
                  <span><IntlMessages id="sidebar.communications.chats"/></span></Link>
              </Menu.Item>
              <Menu.Item key="communications/calls">
                <Link to="/communications/calls">
                <i className="icon icon-video"/>
                  <span><IntlMessages id="sidebar.communications.calls"/></span></Link>
              </Menu.Item>
              <Menu.Item key="communications/support">
                <Link to="/communications/support">
                <i className="icon icon-support"/>
                  <span><IntlMessages id="sidebar.communications.support"/></span></Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="media" popupClassName={getNavStyleSubMenuClass(navStyle)}
                     title={
                       <span><i className="icon icon-social_media"/><span>
                         <IntlMessages id="sidebar.social.media"/></span></span>
                     }>
              <Menu.Item key="media/analytics">
                <Link to="/media/analytics">
                <i className="icon icon-report"/>
                  <span><IntlMessages id="sidebar.media.analytics"/></span></Link>
              </Menu.Item>
              <Menu.Item key="media/scheduling">
                <Link to="/media/scheduling">
                <i className="icon icon-time"/>
                  <span><IntlMessages id="sidebar.media.scheduling"/></span></Link>
              </Menu.Item>
              <Menu.Item key="media/automations">
                <Link to="/media/automations">
                <i className="icon icon-automations"/>
                  <span><IntlMessages id="sidebar.media.automations"/></span></Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="finance">
              <Link to="/finance"><i className="icon icon-finance"/><span><IntlMessages
                id="sidebar.finance"/></span></Link>
            </Menu.Item>

          

            <SubMenu key="inventories" popupClassName={getNavStyleSubMenuClass(navStyle)}
                     title={
                       <span><i className="icon icon-inventory"/><span>
                         <IntlMessages id="sidebar.inventories"/></span></span>
                     }>
              <Menu.Item key="inventories/eshop">
                <Link to="/inventories/eshop">
                <i className="icon icon-shop"/>
                  <span><IntlMessages id="sidebar.inventories.eshop"/></span></Link>
              </Menu.Item>
              <Menu.Item key="inventories/bom">
                <Link to="/inventories/bom">
                <i className="icon icon-bom"/>
                  <span><IntlMessages id="sidebar.inventories.bom"/></span></Link>
              </Menu.Item>
              <Menu.Item key="inventories/orders">
                <Link to="/inventories/orders">
                <i className="icon icon-inventory"/>
                  <span><IntlMessages id="sidebar.inventories.orders"/></span></Link>
              </Menu.Item>
              
            </SubMenu>
             

            <Menu.Item key="website">
              <Link to="/website"><i className="icon icon-website"/><span><IntlMessages
                id="sidebar.website"/></span></Link>
            </Menu.Item>

            <Menu.Item key="document">
              <Link to="/document"><i className="icon icon-report"/><span><IntlMessages
                id="sidebar.document"/></span></Link>
            </Menu.Item>

            <Menu.Item key="analytics">
              <Link to="/analytics"><i className="icon icon-analytics"/><span><IntlMessages
                id="sidebar.analytics"/></span></Link>
            </Menu.Item>

            <Menu.Item key="forecaster">
              <Link to="/forecaster"><i className="icon icon-forecaster"/><span><IntlMessages
                id="sidebar.forecaster"/></span></Link>
            </Menu.Item>
            <Menu.Item key="notifications">
              <Link to="/notifications"><i className="icon icon-notification"/><span><IntlMessages
                id="sidebar.notifications"/></span></Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

