import React from "react";
import {Col, Row} from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import AppModuleHeader from "components/AppModuleHeader/index";
// import BankBalance from "../../../components/BankBalance"


const Transactions = () => {
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
                    <span><IntlMessages id="chat.transactions"/></span>
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

                <AppModuleHeader placeholder="Search Transactions" notification={false} apps={false}/>
              </div>
            </div>
          </div>
        </div>
        {/*<Row>*/}
        <Col span={24}>
          <Row>
            <div className="gx-card">
              <div className="gx-card-body">
                {/*<BankBalance/>*/}
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default Transactions;
