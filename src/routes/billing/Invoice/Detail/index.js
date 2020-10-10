import React from "react";
import {Col, Row} from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import AppModuleHeader from "components/AppModuleHeader/index";
import DetailTable from "components/billing/Invoice/DetailTable";
import DetailViewer from "components/billing/Invoice/DetailViewer";

const Detail = () => {
  return (
    <Auxiliary>
      <Row>
        <div className="gx-main-content">
          <div className="gx-app-module">
            <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
              <div className="gx-module-side">
                <div className="gx-module-side-header">
                  <div className="gx-module-logo">
                    <i className="icon icon-compose gx-mr-4"/>
                    <span><IntlMessages id="chat.invoice"/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gx-module-box">
              <div className="gx-module-box-header">
                <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                    <i className="icon icon-menu gx-icon-btn" aria-label="Menu"/>
                       {/*// onClick={this.onToggleDrawer.bind(this)}/>*/}
                </span>

                <AppModuleHeader placeholder="Search Payee history" notification={false} apps={false}/>
              </div>
            </div>
          </div>
        </div>
      </Row>
        <div style={{marginTop: '30px'}}>
        {/*<Col span={24}>*/}
          <Row>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="gx-order-sm-1">
              <DetailTable/>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="gx-order-sm-1">
              <DetailViewer/>
            </Col>
          </Row>
        {/*</Col>*/}
          </div>
      {/*</Row>*/}
    </Auxiliary>
  );
};

export default Detail;
