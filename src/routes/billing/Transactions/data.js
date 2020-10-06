import React from "react";
import {Col, Row} from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import AppModuleHeader from "components/AppModuleHeader/index";
import BalanceHistory from "components/dashboard/BalanceHistory";
import ToolTheDay from "components/Widgets/ToolTheDay";
import TransactionsTable from "components/Table/TransactionsTable";
import ConnectedBankOne from "../../../components/billing/Transaction/ConnectedBankOne";
import ConnectedBankTwo from "../../../components/billing/Transaction/ConnectedBankTwo";
import ConnectBankModal from "../../../components/billing/Transaction/ConnectBankModal";
import SettingsModal from "../../../components/billing/Transaction/SettingsModal";


class TransactionsData extends React.Component {
  constructor() {
    super();
    this.state = {
      onShowBankModal: false,
      onShowSettingsModal: false
    }
  }

  onShowBankModal = () => {
    this.setState({onShowBankModal: true})
  };

  onCloseBankModal = () => {
    this.setState({onShowBankModal: false})
  };

  onShowSettingsModal = () => {
    this.setState({onShowSettingsModal: true})
  };

  onCloseSettingsModal = () => {
    this.setState({onShowSettingsModal: false})
  };

  render() {
    const {onShowBankModal, onShowSettingsModal} = this.state;
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
      </Row>
        <div style={{marginTop: '30px'}}>
          <Col span={24}>
            <Row>
              <Col xl={6} lg={6} md={6} sm={24} xs={24} className="gx-order-sm-1">
                <Row>
                  <Col md={12}>
                  <p className="gx-text-left gx-link" onClick={this.onShowBankModal}>Add Bank</p>
                  <ConnectBankModal open={onShowBankModal} onClose={this.onCloseBankModal}/>
                </Col>
                <Col md={12}>
                  <p className="gx-text-right gx-link" onClick={this.onShowSettingsModal}>Settings</p>
                  <SettingsModal open={onShowSettingsModal} onClose={this.onCloseSettingsModal}/>
                </Col>
                </Row>
                <ConnectedBankOne/>
                <ConnectedBankTwo/>
                <ToolTheDay/>
              </Col>
                <Col xl={18} lg={18} md={18} sm={24} xs={24} className="gx-order-sm-1">
                  <Row>
                    <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                      <BalanceHistory/>
                      <TransactionsTable/>
                    </Col>
                  </Row>
                </Col>
            </Row>
          </Col>
        </div>
    </Auxiliary>
  );
  }
};

export default TransactionsData;
