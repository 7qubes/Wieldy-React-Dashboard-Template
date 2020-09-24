import React from "react";
import {Avatar, Button} from "antd";

const ProfileHeader = () => {
  const url = `/contacts`;
  return (
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
                <span className="gx-fs-sm">Project</span></li>
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
};

export default ProfileHeader;
