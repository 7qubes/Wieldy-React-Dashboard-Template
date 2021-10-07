import React, {Component} from "react";
import {Avatar, Button, Drawer, Row, Input, Tabs} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import Moment from "moment";
import ChatUserList from "components/chat/ChatUserList";
import Conversation from "components/chat/Conversation/index";
import IntlMessages from "util/IntlMessages";

const Search = Input.Search;
class Support extends Component {

  constructor() {
    super();
    this.state = {
      loader: false,
      userNotFound: 'No user found',
      selectedSectionId: '',
      selectedTabIndex: 1,
      userState: 1,
      searchChatUser: '',
      // contactList: users.filter((user) => !user.recent),
      selectedUser: null,
      message: '',
      // chatUsers: users.filter((user) => user.recent),
      // conversationList: conversationList,
      conversation: null
    }
  }

  render() {
    return (
      <div className="gx-main-content">
        <div className="gx-app-module gx-chat-module">
          <div className="gx-chat-module-box">
            <div className="gx-chat-sidenav gx-d-none gx-d-lg-flex">
              <div className="gx-chat-sidenav-main">
                <div className="gx-chat-sidenav-header">
                  <div className="gx-chat-user-hd">
                    <div className="gx-chat-avatar gx-mr-3">
                      <div className="gx-status-pos">
                        <Avatar id="avatar-button" src={"https://via.placeholder.com/150"}
                                className="gx-size-50"
                                alt=""/>
                        <span className="gx-status gx-online"/>
                      </div>
                    </div>

                    <div className="gx-module-user-info gx-flex-column gx-justify-content-center">
                      <div className="gx-module-title">
                        <h5 className="gx-mb-0">Robert Johnson</h5>
                      </div>
                      <div className="gx-module-user-detail">
                        <span className="gx-text-grey gx-link">robert@example.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Row>
                <img className="gx-w-100" src={require('assets/images/support.png')} alt=''/>
              {/*<h1 style={{fontWeight: "bold", textAlign: 'center'}}>7QUBES Support</h1>*/}
              <Search placeholder="Input Search Text" enterButton="Search" size="large"/>
              </Row>

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Support;
