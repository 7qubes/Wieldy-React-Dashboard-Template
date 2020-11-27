import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {
  let { navStyle, themeType, pathname } = useSelector(
    ({ settings }) => settings
  );

  const getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
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
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div
          className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}
        >
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
            mode="inline"
          >
            <Menu.Item key="dashboard">
              <Link to="/dashboard">
                <i className="icon icon-dashboard" />
                <span>
                  <IntlMessages id="sidebar.dashboard" />
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="contacts">
              <Link to="/contacts">
                <i className="icon icon-contact" />
                <span>
                  <IntlMessages id="sidebar.contactsApp" />
                </span>
              </Link>
            </Menu.Item>

            <SubMenu
              key="billing"
              popupClassName={getNavStyleSubMenuClass(navStyle)}
              title={
                <span>
                  <i className="icon icon-billing" />
                  <span>
                    <IntlMessages id="sidebar.billing" />
                  </span>
                </span>
              }
            >
              <Menu.Item key="billing/transactions">
                <Link to="/billing/transactions">
                  <i className="icon icon-transaction" />
                  <span>
                    <IntlMessages id="sidebar.billing.transactions" />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="billing/payment">
                <Link to="/billing/payment">
                  <i className="icon icon-payment" />
                  <span>
                    <IntlMessages id="sidebar.billing.payment" />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="billing/invoice">
                <Link to="/billing/invoice">
                  <i className="icon icon-invoice" />
                  <span>
                    <IntlMessages id="sidebar.billing.invoice" />
                  </span>
                </Link>
              </Menu.Item>

              <SubMenu
                key="calendar"
                popupClassName={getNavStyleSubMenuClass(navStyle)}
                title={
                  <span>
                    <i className="icon icon-calendar-new" />
                    <span>
                      <IntlMessages id="sidebar.calendar" />
                    </span>
                  </span>
                }
              >
                <Menu.Item key="extensions/calendar/basic">
                  <Link to="/extensions/calendar/basic">
                    <span>
                      <IntlMessages id="sidebar.calendar.basic" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/cultures">
                  <Link to="/extensions/calendar/cultures">
                    <span>
                      <IntlMessages id="sidebar.calendar.cultures" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/popup">
                  <Link to="/extensions/calendar/popup">
                    <span>
                      <IntlMessages id="sidebar.calendar.popup" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/rendering">
                  <Link to="/extensions/calendar/rendering">
                    <span>
                      <IntlMessages id="sidebar.calendar.rendering" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/selectable">
                  <Link to="/extensions/calendar/selectable">
                    <span>
                      <IntlMessages id="sidebar.calendar.selectable" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/timeslots">
                  <Link to="/extensions/calendar/timeslots">
                    <span>
                      <IntlMessages id="sidebar.calendar.timeslots" />
                    </span>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="feedBack"
                popupClassName={getNavStyleSubMenuClass(navStyle)}
                title={
                  <span>
                    <i className="icon icon-chat-new" />
                    <span>
                      <IntlMessages id="sidebar.components.feedBack" />
                    </span>
                  </span>
                }
              >
                <Menu.Item key="components/feedBack/alert">
                  <Link to="/components/feedBack/alert">
                    <span>
                      <IntlMessages id="sidebar.feedBack.alert" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/modal">
                  <Link to="/components/feedBack/modal">
                    <span>
                      <IntlMessages id="sidebar.feedBack.modal" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/message">
                  <Link to="/components/feedBack/message">
                    <span>
                      <IntlMessages id="sidebar.feedBack.message" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/notification">
                  <Link to="/components/feedBack/notification">
                    <span>
                      <IntlMessages id="sidebar.feedBack.notification" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/progress">
                  <Link to="/components/feedBack/progress">
                    <span>
                      <IntlMessages id="sidebar.feedBack.progress" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/popconfirm">
                  <Link to="/components/feedBack/popconfirm">
                    <span>
                      <IntlMessages id="sidebar.feedBack.popConfirm" />
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/spin">
                  <Link to="/components/feedBack/spin">
                    <span>
                      <IntlMessages id="sidebar.feedBack.spin" />
                    </span>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="media">
                <Link to="/social-media/">
                  <i className="icon icon-email" />
                  <span>
                    <IntlMessages id="sidebar.social.media" />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="communications/chats">
                <Link to="/communications/chats">
                  <i className="icon icon-chat" />
                  <span>
                    <IntlMessages id="sidebar.communications.chats" />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="communications/calls">
                <Link to="/communications/calls">
                  <i className="icon icon-video" />
                  <span>
                    <IntlMessages id="sidebar.communications.calls" />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="communications/support">
                <Link to="/communications/support">
                  <i className="icon icon-support" />
                  <span>
                    <IntlMessages id="sidebar.communications.support" />
                  </span>
                </Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="media"
              popupClassName={getNavStyleSubMenuClass(navStyle)}
              title={
                <span>
                  <i className="icon icon-social_media" />
                  <span>
                    <IntlMessages id="sidebar.social.media" />
                  </span>
                </span>
              }
            >
              <Menu.Item key="media/analytics">
                <Link to="/media/analytics">
                  <i className="icon icon-report" />
                  <span>
                    <IntlMessages id="sidebar.media.analytics" />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="media/scheduling">
                <Link to="/media/scheduling">
                  <i className="icon icon-time" />
                  <span>
                    <IntlMessages id="sidebar.media.scheduling" />
                  </span>
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="media/automation">
                <Link to="/media/automation">
                  <span><IntlMessages id="sidebar.social.automation"/></span></Link>
              </Menu.Item> */}
              <Menu.Item key="media/autobot">
                <Link to="/media/autobot">
                  <span>
                    <IntlMessages id="sidebar.social.autobot" />
                  </span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="finance">
              <Link to="/finance">
                <i className="icon icon-finance" />
                <span>
                  <IntlMessages id="sidebar.finance" />
                </span>
              </Link>
            </Menu.Item>

            <SubMenu
              key="inventories"
              popupClassName={getNavStyleSubMenuClass(navStyle)}
              title={
                <span>
                  <i className="icon icon-inventory" />
                  <span>
                    <IntlMessages id="sidebar.inventories" />
                  </span>
                </span>
              }
            >
              <Menu.Item key="inventories/eshop">
                <Link to="/inventories/eshop">
                  <i className="icon icon-shop" />
                  <span>
                    <IntlMessages id="sidebar.inventories.eshop" />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="inventories/bom">
                <Link to="/inventories/bom">
                  <i className="icon icon-bom" />
                  <span>
                    <IntlMessages id="sidebar.inventories.bom" />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="inventories/orders">
                <Link to="/inventories/orders">
                  <i className="icon icon-inventory" />
                  <span>
                    <IntlMessages id="sidebar.inventories.orders" />
                  </span>
                </Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="website">
              <Link to="/website">
                <i className="icon icon-website" />
                <span>
                  <IntlMessages id="sidebar.website" />
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="document">
              <Link to="/document">
                <i className="icon icon-report" />
                <span>
                  <IntlMessages id="sidebar.document" />
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="analytics">
              <Link to="/analytics">
                <i className="icon icon-analytics" />
                <span>
                  <IntlMessages id="sidebar.analytics" />
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="forecaster">
              <Link to="/forecaster">
                <i className="icon icon-forecaster" />
                <span>
                  <IntlMessages id="sidebar.forecaster" />
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="notifications">
              <Link to="/notifications">
                <i className="icon icon-notification" />
                <span>
                  <IntlMessages id="sidebar.notifications" />
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;
