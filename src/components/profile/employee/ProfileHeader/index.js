import React from "react";
import {Avatar} from "antd";

const ProfileHeader = () => {
  return (
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
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
        {/*<div className="gx-profile-banner-bottom">*/}
        {/*  <div className="gx-tab-list">*/}
        {/*    <ul className="gx-navbar-nav">*/}
        {/*      <li>*/}
        {/*        <span className="gx-link">General</span>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span className="gx-link">Emergency</span>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span className="gx-link">Agreements</span>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span className="gx-link">Training</span>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span className="gx-link">Performance</span>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*  <span className="gx-link gx-profile-setting">*/}
        {/*    <i className="icon icon-setting gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>*/}
        {/*    <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">Settings</span>*/}
        {/*  </span>*/}
        {/*</div>*/}
      </div>
    </div>
  )
};

export default ProfileHeader;
