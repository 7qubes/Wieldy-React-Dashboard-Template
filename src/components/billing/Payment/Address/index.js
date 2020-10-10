import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row, Checkbox, Button} from "antd";
import EditModal from './EditModal'

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
    const {showEdit, closeEdit} = this.state;
    return (
    <Widget styleName="gx-card-full" extra={
      <Button className="gx-btn-block ant-btn" type="primary" onClick={this.showEdit}>
        <i className="icon icon-edit gx-mr-1"/>
        <span>Edit</span>
      </Button>
      }>
      <div className="gx-px-3 gx-pt-3">
        <h2 className="gx-mb-3">Name of Account</h2>
        <p className="gx-mb-3">Address</p>
      </div>
      {/*<EditModal open={showEdit} onClose={this.closeEdit}/>*/}
    </Widget>
  );
  }
}

export default Index;
