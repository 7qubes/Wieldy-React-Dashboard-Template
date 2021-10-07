import React from "react";
import CustomScrollbars from "util/CustomScrollbars";
import IntlMessages from "util/IntlMessages";
import UploadClick from "components/Upload/UploadClick";

const ReportsSideNav = () => (
  <div className="gx-module-side">
    <div className="gx-module-side-header">
      <div className="gx-module-logo">
        <i className="icon icon-compose gx-mr-4"/>
        <span><IntlMessages id="chat.reports"/></span>
      </div>
    </div>
    <div className="gx-module-side-content">
      <CustomScrollbars className="gx-module-side-scroll">
        <div className="gx-module-side-nav" style={{marginTop: '30px'}}>
          <UploadClick/>
          <ul className="gx-module-nav">
            <li className="gx-nav-item">
              <a href="/reports/standard">
                <span className="gx-link">
                  <i className="icon icon-all-contacts"/>
                  <span>Standard Reports</span>
                </span>
              </a>
            </li>
            <li className="gx-nav-item">
              <a href="/reports/my_reports">
                <span className="gx-link">
                  <i className="icon icon-frequent"/>
                  <span>My Reports</span>
                </span>
              </a>
            </li>
            <li className="gx-nav-item">
              <a href="/reports/share">
                <span className="gx-link">
                  <i className="icon icon-star"/>
                  <span>Shared with me</span>
                </span>
              </a>
            </li>
            <li className="gx-nav-item">
              <a href="/reports/manage">
                <span className="gx-link">
                  <i className="icon icon-team"/>
                  <span>Manage Reports</span>
                </span>
              </a>
            </li>
            <li className="gx-nav-item">
              <a href="/reports/signed_documents">
                <span className="gx-link">
                  <i className="icon icon-team"/>
                  <span>Signed documents</span>
                </span>
              </a>
            </li>
            <li className="gx-nav-item">
              <a href="/reports/audits">
                <span className="gx-link">
                  <i className="icon icon-team"/>
                  <span>Audits</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </CustomScrollbars>
    </div>
  </div>
);

export default ReportsSideNav
