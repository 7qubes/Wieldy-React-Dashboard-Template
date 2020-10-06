import React from "react";

import Widget from "components/Widget/index";
import ConnectBankModal from "./ConnectBankModal";

class ConnectBank extends React.Component {
  constructor() {
    super();
    this.state = {
      showEdit: false
    }
  }
  showEdit = () => {
    this.setState({showEdit: true});
  };
  closeEdit = () => {
    this.setState({showEdit: false});
  };
  render() {
    const {showEdit} = this.state;
    return (
      <Widget styleName="gx-bg-orange gx-text-white gx-card-1367-p">
        <div onClick={this.showEdit}>
          <div className="gx-flex-row gx-justify-content-between gx-mb-2">
            <i className="icon icon-mail-open gx-fs-xxl gx-mr-2"/>
            <i className="icon icon-long-arrow-right gx-fs-xxl"/>
          </div>
          <h2 className="gx-text-white">Connect Bank</h2>
          <p className="gx-mb-0">Accounts</p>
        </div>
        <ConnectBankModal open={showEdit} onClose={this.closeEdit}/>
      </Widget>
  );
  }
};

export default ConnectBank;
