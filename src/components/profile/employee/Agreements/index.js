import React from "react";

import Widget from "components/Widget/index";
import {Row} from "antd";

const Agreements = () => {
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Agreements</span>
      </div>
      <div className="ant-card-body">
        <Row><i className="icon icon-contacts"/><p style={{marginLeft: '15px'}}>Task list attachments (0)</p></Row>
        <Row><i className="icon icon-contacts"/><p style={{marginLeft: '15px'}}>Workflow attachments (0)</p></Row>
        <Row><i className="icon icon-contacts"/><p style={{marginLeft: '15px'}}>Contract (0)</p></Row>
        <Row><i className="icon icon-contacts"/><p style={{marginLeft: '15px'}}>Signed documents (0)</p></Row>
      </div>
    </Widget>
  );
}

export default Agreements;
