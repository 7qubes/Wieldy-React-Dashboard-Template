import React, { useState }from "react";
import {Avatar, Button} from "antd";
import SweetAlert from "react-bootstrap-sweetalert";
import IntlMessages from "util/IntlMessages";

class ProfileHeader extends React.Component {
  onConfirm = () => {
    this.setState({
      prompt: false,
    });
  };

  onCancel = () => {
    this.setState({
      prompt: false
    })
  };


  constructor() {
    super();
    this.state = {
      prompt: false,
    }
  }
  render () {
    const {prompt} = this.state;
    const url = `/contacts`;
    return(
    <div className="gx-profile-banner" style={{backgroundColor: '#6236FF'}}>
      <div className="gx-profile-container">
        <a href={url}>
          <i className="icon icon-arrow-left"/>
        </a>
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..." src={"https://via.placeholder.com/150"}/>
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">Kiley Brown</h2>
              <p className="gx-mb-0 gx-fs-lg">Florida, USA</p>
            </div>
          </div>
          <div className="gx-profile-banner-top-right">
            <ul className="gx-follower-list">
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  <i className="icon icon-edit"/>
                </span>
                <span className="gx-fs-sm">Contact</span></li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  <i className="icon icon-add-circle"/>
                </span>
                <span className="gx-fs-sm">
                  <Button className="gx-mb-0" type="primary" onClick={() => {
                    this.setState({prompt: true})
                  }}>Project</Button>
                </span>
                <SweetAlert show={prompt}
                            input
                            showCancel
                            cancelBtnBsStyle="default"
                            title={<IntlMessages id="sweetAlerts.anInput"/>}
                            inputPlaceHolder={<IntlMessages id="sweetAlerts.anInput"/>}
                  onConfirm={this.onConfirm}
                  onCancel={this.onCancel}
                            customClass="gx-sweet-alert-top-space"
                >
                  <IntlMessages id="sweetAlerts.basic"/>{<IntlMessages id="sweetAlerts.writeSomething"/>}
                </SweetAlert>
              </li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  <i className="icon icon-add-circle"/>
                </span>
                <span className="gx-fs-sm">Equipment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }

};

export default ProfileHeader;
