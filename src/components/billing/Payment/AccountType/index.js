import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row, Checkbox, Button} from "antd";
import Modal from './Modal'

class Index extends React.Component{
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
    <Widget styleName="gx-card-full" extra={
      <Button className="gx-btn-block ant-btn" type="primary" onClick={this.showEdit}>
        <i className="icon icon-edit gx-mr-1"/>
        <span>Edit</span>
      </Button>
      }>
      <div className="gx-text-center gx-px-3 gx-pt-3">
        <div className="gx-mb-3">
          <h2>Account Type: Checking</h2>
          <h2>Checking Number: 123456789</h2>
          <h2>Payee Account: 1234567890</h2>
          <h2>Bank Account: JPMorgan Chase & Co</h2>
          <h2>Account Type: Business</h2>
        </div>
      </div>
      <Modal open={showEdit} onClose={this.closeEdit}/>
    </Widget>
  );
  }
}

export default Index;
